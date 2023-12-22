import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import googleIcon from "../../assets/icons/Google__G__Logo 1 (1).svg";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import githubIcon from "../../assets/icons/github.png";

const Register = () => {
  const { createUser, updateUserProfile, user, googleLogin, githubLogin } =
    useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    e.target.reset();

    if (password.length < 6) {
      Swal.fire(
        "Failed!",
        "Password should be at least 6 characters or more!!!",
        "error"
      );
      return;
    } else if (
      !/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        password
      )
    ) {
      Swal.fire(
        "Failed!",
        "Password must contain at least one uppercase, special characters...",
        "error"
      );
      return;
    }

    createUser(email, password)
      .then((res) => {
        updateUserProfile(name, photo).then(() => {
          const userInfo = {
            name: name,
            email: email,
            image: photo,
          };
          axiosPublic.post("/api/v1/create-user", userInfo).then((res) => {
            if (res.data.insertedId) {
              Swal.fire("Success", "User Logged in", "success");
              navigate("/");
            }
          });
          console.log(res.user);
        });
      })
      .catch((err) => {
        Swal.fire("Error!", err.message, "error");
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        const userInfo = {
          name: user?.displayName,
          email: user?.email,
          image: user?.photoURL,
        };

        axiosPublic.post("/api/v1/create-user", userInfo).then((res) => {
          if (res.data.insertedId) {
            Swal.fire("Success", "User Created Done", "success");
            navigate("/");
          }
        });

        console.log(res.user);
      })
      .catch((err) => {
        Swal.fire("Error!", err.message, "error");
      });
  };

  const handleGithubLogin = () => {
    githubLogin()
      .then((res) => {
        console.log(res.user);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col mt-10">
        <div className="card flex-shrink-0 md:w-[550px] h-[620px] shadow-2xl">
          <div className="text-center">
            <h1 className="text-2xl lg:text-3xl font-bold mt-10">
              Register your account
            </h1>
          </div>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input bg-[#F3F3F3] text-xs"
                name="name"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Enter your photo url"
                className="input bg-[#F3F3F3] text-xs"
                name="photo"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="input bg-[#F3F3F3] text-xs"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="input bg-[#F3F3F3] text-xs"
                name="password"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#AA8453] text-white border-none">
                Register
              </button>
            </div>
            <div className="text-center mt-3">
              <p className=" text-sm font-medium">
                Already have an account?
                <Link to="/login">
                  <span className="text-[#AA8453] text-sm font-semibold">
                    Login Now
                  </span>
                </Link>
              </p>
            </div>
          </form>
          <div>
            <h2 className="text-center mt-10">
              ----------------Or----------------
            </h2>
            <div className="flex flex-col gap-3 justify-center py-5">
              <div className="flex justify-center gap-5 border-2 rounded-full w-[400px] mx-auto py-2">
                <img src={googleIcon} alt="googleIcon" />
                <button className="font-medium" onClick={handleGoogleLogin}>
                  Continue With Google
                </button>
              </div>

              <div className="flex justify-center gap-5 border-2 rounded-full w-[400px] mx-auto py-2">
                <img className="w-[30px]" src={githubIcon} alt="githubIcon" />
                <button className="font-medium" onClick={handleGithubLogin}>
                  Continue With Github
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

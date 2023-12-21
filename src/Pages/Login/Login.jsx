import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import googleIcon from "../../assets/icons/Google__G__Logo 1 (1).svg";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Login = () => {
  const { loginUser, googleLogin, user } = useAuth();
  const axiosPublic = useAxiosPublic();

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    e.target.reset();

    loginUser(email, password)
      .then((res) => {
        Swal.fire("Success!", "Logged in successfully!", "success");
        navigate("/");
        console.log(res.user);
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
  return (
    <div className="hero min-h-[70vh]">
      <div className="hero-content flex-col">
        <div className="card flex-shrink-0 md:w-[550px] h-[620px] shadow-2xl">
          <div className="text-center">
            <h1 className="text-2xl lg:text-3xl font-bold mt-10">
              Sign in to your account
            </h1>
          </div>
          <form onSubmit={handleLogin} className="card-body">
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
                Login
              </button>
            </div>
            <div className="text-center mt-3">
              <p className=" text-sm font-medium">
                New to this website?
                <Link to="/register">
                  <span className="text-[#AA8453] text-sm font-semibold">
                    Register Now
                  </span>
                </Link>
              </p>
            </div>
          </form>
          <div>
            <h2 className="text-center">----------------Or----------------</h2>
            <div className="flex justify-center py-10">
              <div className="flex justify-center gap-5 border-2  rounded-full w-[400px] py-2">
                <img src={googleIcon} alt="googleIcon" />
                <button className="font-medium" onClick={handleGoogleLogin}>
                  Continue With Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

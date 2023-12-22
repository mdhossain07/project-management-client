import { Outlet, useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import Logo from "../../assets/images/Team Flow Logo.png";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  const handleSetActive = (to) => {
    console.log(to);
  };

  const handleLogout = () => {
    logOut().then(() => {
      Swal.fire("Done", "Logged out successfully", "success");
      navigate("/login");
    });
  };
  const NavItems = (
    <>
      <li>
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          onSetActive={handleSetActive}
          className="cursor-pointer"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          activeClass="active"
          to="action"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          onSetActive={handleSetActive}
          className="cursor-pointer"
        >
          Action
        </Link>
      </li>

      <li>
        <Link
          activeClass="active"
          to="pricing"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          onSetActive={handleSetActive}
          className="cursor-pointer"
        >
          Pricing
        </Link>
      </li>

      <li>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          onSetActive={handleSetActive}
          className="cursor-pointer"
        >
          Contact
        </Link>
      </li>

      <div className="lg:ml-56">
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt={user?.displayName} src={user?.photoURL} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 ml-24"
            >
              <li>
                <a href="/dashboard">Dashboard</a>
              </li>
              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <li>
            <a href="/login">Login</a>
          </li>
        )}
      </div>
    </>
  );

  return (
    <div>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="max-w-screen-2xl mx-auto px-8 md:px-16 lg:px-24 w-full navbar bg-white shadow-md">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>

            <div className="flex justify-around items-center gap-96">
              <div>
                <Link to="/">
                  <img className="w-[100px]" src={Logo} alt="" />
                </Link>
              </div>

              <div className="flex-none hidden lg:block mt-3">
                <ul className="menu menu-horizontal">
                  {/* Navbar menu content here */}
                  {NavItems}
                </ul>
              </div>
            </div>
          </div>

          {/* Page content here */}
          <Outlet />
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200">
            {/* Sidebar content here */}
            {NavItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

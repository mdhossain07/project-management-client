import { Link, Outlet } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
const DashboardLayout = () => {
  return (
    <div>
      <div className="flex flex-row ">
        <div className="w-48 pt-5 bg-gray-300 flex flex-col min-h-screen">
          <div className="flex items-center gap-3 p-3">
            <FaUser />
            <Link to="/dashboard">Profile</Link>
          </div>

          <div className="flex gap-3 p-3 items-center">
            <FaTasks />
            <Link to="/dashboard/create-tasks">Create Tasks</Link>
          </div>

          <div className="flex gap-3 p-3 items-center">
            <FaTasks />
            <Link to="/dashboard/all-tasks">All Tasks</Link>
          </div>

          <div className="flex items-center p-3 gap-3">
            <FaHome />
            <Link to="/">Home</Link>
          </div>
        </div>
        <div className="w-full bg-base-200 min-h-screen">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

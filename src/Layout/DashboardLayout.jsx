import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <div className="flex flex-row h-screen">
        <div className="w-48 bg-red-400 flex flex-col">
          <Link to="/dashboard/profile">Profile</Link>
          <Link to="/dashboard/create-tasks">Create Tasks</Link>
          <Link to="/dashboard/all-tasks">All Tasks</Link>
          <Link to="/">Home</Link>
        </div>
        <div className="w-9/12 bg-base-200">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

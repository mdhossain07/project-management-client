import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import DashboardLayout from "../Layout/DashboardLayout";
import Profile from "../Pages/Profile/Profile";
import AllTasks from "../Pages/AllTasks/AllTasks";
import CreateTasks from "../Pages/CreateTasks/CreateTasks";
import EditTasks from "../Pages/EditTasks/EditTasks";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        element: <Profile />,
        index: true,
      },
      {
        path: "create-tasks",
        element: <CreateTasks />,
      },
      {
        path: "all-tasks",
        element: <AllTasks />,
      },
      {
        path: "update-task/:id",
        element: <EditTasks />,
      },
    ],
  },
]);

export default routes;

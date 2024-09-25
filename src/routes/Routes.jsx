import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Shop from "../pages/Shop/Shop";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../layout/Dashboard";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import PrivateRoute from "./PrivateRoute";
import AdminHome from "../pages/Dashboard/Admin/AdminHome";
import AddItems from "../pages/Dashboard/Admin/AddItems";
import ManageItems from "../pages/Dashboard/Admin/ManageItems";
import ManageBookings from "../pages/Dashboard/Admin/ManageBookings";
import AllUsers from "../pages/Dashboard/Admin/AllUsers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: "shop/:category",
        element: <Shop></Shop>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "my-cart",
        element: <MyCart></MyCart>,
      },
      {
        path: "admin-home",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "add-items",
        element: <AddItems></AddItems>,
      },
      {
        path: "manage-items",
        element: <ManageItems></ManageItems>,
      },
      {
        path: "manage-bookings",
        element: <ManageBookings></ManageBookings>,
      },
      {
        path: "all-users",
        element: <AllUsers></AllUsers>,
      },
    ],
  },
]);

export default router;

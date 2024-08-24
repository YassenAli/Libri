import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import NotFound from "./Components/Shared/NotFound";
import HomeBooks from "./Pages/HomeBooks";
import Loader from "./Components/Shared/Loader";
import Wishlist from './Pages/Wishlist';
import Guest from "./middleware/Guest";
// import Login from "./Components/Auth/Login";
import Profile from "./Pages/Profile";
import AddBook from './Pages/AddBook';
import Register from "./Components/Auth/Register";
// import ManageUser from "./Pages/Admin/Manage User/ManageUser";
// import ManageBookings from "./Pages/Admin/ManageBookings";
// import AddEvent from "./Pages/AddBook";
// import ManageEvents from "./Pages/Admin/Manage Events/MangeBooks";
// import AddUser from "./Pages/Admin/Manage User/AddUser";
// import UpdateEvent from "./Pages/Admin/Manage Events/UpdateEvent";
// import Admin from "./middleware/Admin";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="home" replace />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "add-book",
        element: <AddBook />,
      },
      {
        path: "login",
        element: <Register />,
      },
      //Guest middleware
      {
        element: <Guest />,
        children: [
          {
            path: "login",
            element: <Register />,
          },
        ],
      },

      //Admin middleware
      // {
      //   element: <Admin />,
      //   children: [
      //     {
      //       path: "/manage-user",
      //       children: [
      //         {
      //           path: "",
      //           element: <ManageUser />,
      //         },
      //         {
      //           path: "add-user",
      //           element: <AddUser />,
      //         },
      //         {},
      //       ],
      //     },
      //     {
      //       path: "user-bookings",
      //       element: <ManageBookings />,
      //     },
      //     {
      //       path: "/manage-events",
      //       children: [
      //         {
      //           path: "",
      //           element: <ManageEvents />,
      //         },
      //         {
      //           path: "add",
      //           element: <AddEvent />,
      //         },
      //         {
      //           path: "update/:id", //update
      //           element: <UpdateEvent />,
      //         },
      //       ],
      //     },
      //   ],
      // },
      {
        path: "home",
        element: <HomeBooks />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "/load",
        element: <Loader />,
      },
    ],
  },
]);

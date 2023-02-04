import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Users, { loader as usersLoader } from "./routes/users";
import User, { loader as userLoader } from "./routes/user";
import ErrorPage from "./routes/error-page";
import "bootstrap/dist/css/bootstrap.min.css";
import EditUser, { loader as editUserLoader } from "./routes/editUser";
import AddUser from "./routes/addUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/users" replace={true} />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/users",
    element: <Users />,
    errorElement: <ErrorPage />,
    loader: usersLoader,
  },
  {
    path: "/users/:userId",
    element: <User />,
    loader: userLoader,
  },
  {
    path: "/users/:userId/edit",
    element: <EditUser />,
    loader: editUserLoader,
  },
  {
    path: "/users/add",
    element: <AddUser />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

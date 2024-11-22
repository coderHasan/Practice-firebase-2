import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import LogIn from "../pages/LogIn";
import Register from "../pages/Register";
import Campaigns from "../pages/Campaigns";
import Details from "../pages/Details";
import PrivetRout from "./PrivetRout";
import ErrorPage from "../pages/ErrorPage";
import Dashboard from "../pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <LogIn />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/campaigns",
        element: <Campaigns />,
        loader: () => fetch("./clothingData.json"),
      },

      {
        path: "/details/:id",
        element: (
          <PrivetRout>
            <Details />
          </PrivetRout>
        ),
        loader: () => fetch("../clothingData.json"),
      },
      {
        path: "/dashboard",
        element: (
          <PrivetRout>
            <Dashboard />
          </PrivetRout>
        ),
      },
    ],
  },

  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;

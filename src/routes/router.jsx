import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import FindPartners from "../pages/FindPartners";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CreatePartnerProfile from "../pages/CreatePartnerProfile";
import PartnerDetails from "../pages/PartnerDetails";
import MyConnections from "../pages/MyConnections";
import Profile from "../pages/Profile";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoute from "../components/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/find-partners", element: <FindPartners /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      {
        path: "/create-profile",
        element: (
          <PrivateRoute>
            <CreatePartnerProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/partner/:id",
        element: (
          <PrivateRoute>
            <PartnerDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-connections",
        element: (
          <PrivateRoute>
            <MyConnections />
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
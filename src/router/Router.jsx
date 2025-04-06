import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayout from "../layout/MainLayout";
import AdminDashboard from "../pages/dashboard/adminDashboard/AdminDashboard";
import Contributors from "../pages/dashboard/adminDashboard/contributors/Contributors";
import Volunteers from "../pages/dashboard/adminDashboard/volunteers/Volunteers";
import Auction from "../pages/dashboard/adminDashboard/auction/Auction";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
    ],
  },
  {
    path: "/admin/dashboard",
    element: <AdminDashboard />,
    children: [
      {
        path: "contributors",
        element: <Contributors />,
      },
      {
        path: "volunteers",
        element: <Volunteers />,
      },
      {
        path: "auction",
        element: <Auction />,
      },
    ],
  },
]);
export default router;

import App from "@/App";
import AdminLayout from "@/components/layout/AdminLayout";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import DashBoard from "@/pages/admin/DashBoard";
import EventItemsManagement from "@/pages/admin/EventItemsManagement";
import RecentEventsManagement from "@/pages/admin/RecentEventsManagement";
import ServicesManagement from "@/pages/admin/ServicesManagement";
import Home from "@/pages/home";
import { Navigate, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/admin/dashboard" />,
      },
      {
        path: "dashboard",
        element: <DashBoard />,
      },
      {
        path: "event-items",
        element: <EventItemsManagement />,
      },
      {
        path: "recent-events",
        element: <RecentEventsManagement />,
      },
      {
        path: "services",
        element: <ServicesManagement />,
      },
    ],
  },
]);

export default router;

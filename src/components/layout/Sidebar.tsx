import { cn } from "@/lib/utils";
import { LayoutDashboard } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="col-span-2 bg-slate-100 h-screen sticky top-0 left-0 overflow-auto p-4 lg:p-5 font-inter">
      <nav className="flex flex-col gap-5">
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) =>
            cn(
              "p-3 rounded-sm text-dark-blue transition-all bg-red-300 flex items-center gap-2",
              {
                "bg-red-600 text-white": isActive,
              }
            )
          }
        >
          <LayoutDashboard className=" shrink-0" />
          <span className="truncate">Dashboard</span>{" "}
        </NavLink>
        <NavLink
          to="/admin/event-items"
          className={({ isActive }) =>
            cn(
              "p-3 rounded-sm text-dark-blue transition-all bg-red-300 flex items-center gap-2",
              {
                "bg-red-600 text-white": isActive,
              }
            )
          }
        >
          <LayoutDashboard className=" shrink-0" />
          <span className="truncate">Event Management</span>{" "}
        </NavLink>
        <NavLink
          to="/admin/recent-events"
          className={({ isActive }) =>
            cn(
              "p-3 rounded-sm text-dark-blue transition-all bg-red-300 flex items-center gap-2",
              {
                "bg-red-600 text-white": isActive,
              }
            )
          }
        >
          <LayoutDashboard className=" shrink-0" />
          <span className="truncate">Recent Events</span>{" "}
        </NavLink>
        <NavLink
          to="/admin/services"
          className={({ isActive }) =>
            cn(
              "p-3 rounded-sm text-dark-blue transition-all bg-red-300 flex items-center gap-2",
              {
                "bg-red-600 text-white": isActive,
              }
            )
          }
        >
          <LayoutDashboard className=" shrink-0" />
          <span className="truncate">Services Management</span>{" "}
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            cn(
              "p-3 rounded-sm text-dark-blue transition-all bg-red-300 flex items-center gap-2",
              {
                "bg-red-600 text-white": isActive,
              }
            )
          }
        >
          <LayoutDashboard className=" shrink-0" />
          <span className="truncate">Home</span>{" "}
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;

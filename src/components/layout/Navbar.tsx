import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <header className="h-12 py-12">
      <nav className="h-full w-full max-w-[1300px] px-5 mx-auto flex justify-between items-center sticky top-0">
        <NavLink to="/">
          <span className="text-[32px] text-black font-bold font-roboto">
            Event <span className="text-[#0B63E5]">360</span>
          </span>
        </NavLink>
        <ul className="space-x-4 hidden md:block">
          <NavLink
            // className="font-roboto text-[16px] font-medium leading-[150%]"
            className={({ isActive }) =>
              cn(
                "font-roboto text-[16px] font-medium leading-[150%] px-3 py-1 rounded",
                {
                  "bg-red-400 text-white": isActive,
                }
              )
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              cn(
                "font-roboto text-[16px] font-medium leading-[150%] px-3 py-1 rounded",
                {
                  "bg-red-400 text-white": isActive,
                }
              )
            }
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              cn(
                "font-roboto text-[16px] font-medium leading-[150%] px-3 py-1 rounded",
                {
                  "bg-red-400 text-white": isActive,
                }
              )
            }
            to="/admin/dashboard"
          >
            Contact
          </NavLink>
        </ul>

        {/* menu button for mobile  */}
        <button className="text-black block md:hidden" onClick={handleOpen}>
          {open ? <X className=" w-7 h-7 " /> : <Menu className=" w-7 h-7 " />}
        </button>
      </nav>
      {
        <ul
          className={`w-full py-10 mt-[80px]  text-center bg-slate-100 flex
           md:hidden flex-col gap-5 absolute transition duration-1000 ease-in-out ${
             open ? "top-0" : "-top-[400px]"
           }`}
        >
          <NavLink
            onClick={handleOpen}
            // className="font-roboto text-[20px] font-medium leading-[150%] tracking-wider"
            className={({ isActive }) =>
              cn(
                "font-roboto text-[20px] font-medium leading-[150%] tracking-wider",
                {
                  "bg-red-400 text-white": isActive,
                }
              )
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            onClick={handleOpen}
            className={({ isActive }) =>
              cn(
                "font-roboto text-[20px] font-medium leading-[150%] tracking-wider",
                {
                  "bg-red-400 text-white": isActive,
                }
              )
            }
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            onClick={handleOpen}
            className={({ isActive }) =>
              cn(
                "font-roboto text-[20px] font-medium leading-[150%] tracking-wider",
                {
                  "bg-red-400 text-white": isActive,
                }
              )
            }
            to="/contact"
          >
            Contact
          </NavLink>
        </ul>
      }
    </header>
  );
};

export default Navbar;

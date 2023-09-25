import { NavLink } from "react-router-dom";
import LogoImage from "../LogoImage/LogoImage";

const Navbar = () => {
  return (
    <div className="pt-5">
      <nav className="grid grid-cols-2 gap-20">
        <LogoImage></LogoImage>
        <ul className="grid grid-cols-3 w-5/6 p-5 text-xl text-center">
          {/* Home button */}
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-500 underline" : ""
              }
            >
              Home
            </NavLink>
            
          </li>
          {/* Donation button */}
          <li>
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-500 underline" : ""
              }
            >
              Donation
            </NavLink>
            
          </li>
          {/* statistics button */}
          <li>
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-500 underline" : ""
              }
            >
              Statistics
            </NavLink>
            
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

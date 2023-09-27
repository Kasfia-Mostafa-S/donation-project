import { NavLink } from "react-router-dom";
import LogoImage from "../LogoImage/LogoImage";

const Navbar = () => {
  return (
    <div className="pt-5">
      <nav className="grid grid-rows-2 lg:grid-cols-2 ">
        <div>
        <LogoImage></LogoImage>
        </div>
        <div>
        <ul className="grid grid-cols-1 lg:grid-cols-3 w-5/6 p-5 text-xl text-center">
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
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

import React, { useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
// import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
//   const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleLogOut = () => {
//     logOut().catch((err) => console.error("Logout Error:", err));
//   };

  return (
    <div className="navbar bg-black text-white shadow-md sticky px-8 top-0 z-50">
      <div className="navbar-start flex items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-teal-400">
          Crowdcube
        </Link>
        {/* Hamburger Menu */}
        <button
          className="btn btn-ghost lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Center Links */}
      <div
        className={`navbar-center lg:flex ${isMenuOpen ? "block" : "hidden"} lg:block`}
      >
        <ul className="menu menu-horizontal lg:flex flex-col lg:flex-row px-1 lg:px-0">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-cyan-500 font-bold"
                  : "text-gray-300 hover:text-cyan-500"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/campaigns"
              className={({ isActive }) =>
                isActive
                  ? "text-cyan-500 font-bold"
                  : "text-gray-300 hover:text-cyan-500"
              }
            >
              All Campaigns
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/addCampaign"
              className={({ isActive }) =>
                isActive
                  ? "text-cyan-500 font-bold"
                  : "text-gray-300 hover:text-cyan-500"
              }
            >
              Add Campaign
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "text-cyan-500 font-bold"
                  : "text-gray-300 hover:text-cyan-500"
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myDonations"
              className={({ isActive }) =>
                isActive
                  ? "text-cyan-500 font-bold"
                  : "text-gray-300 hover:text-cyan-500"
              }
            >
              My Donations
            </NavLink>
          </li>
        </ul>
      </div>

      {/* User Section */}
      <div className="navbar-end flex items-center gap-4">
        {/* {user && user.email ? (
          <>
            <div className="flex items-center gap-2">
              <img
                src={user.photoURL || "https://via.placeholder.com/40"}
                alt="Profile"
                className="w-10 h-10 rounded-full border"
              />
              <span className="hidden lg:inline-block font-medium text-gray-300">
                {user.displayName || "User"}
              </span>
            </div>
            <button
              onClick={handleLogOut}
              className="btn bg-teal-500 text-white font-semibold hover:bg-teal-600 border-none shadow-md hover:shadow-lg transition-all duration-300"
            >
              Log Out
            </button>
          </>
        ) : (
          <NavLink to="/login">
            <button className="btn bg-teal-500 text-white font-semibold hover:bg-teal-600 border-none shadow-md hover:shadow-lg transition-all duration-300">
              Login
            </button>
          </NavLink>
        )} */}
        <NavLink><button>Login</button></NavLink>


      </div>
    </div>
  );
};

export default Navbar;

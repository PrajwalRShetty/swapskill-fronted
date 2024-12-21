import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const UserNavbar = () => {
  const { user, logout } = useContext(AuthContext);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 
  const [isNavDropdownOpen, setIsNavDropdownOpen] = useState(false); 
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 550); 

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 550);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="bg-blue-500 shadow-md px-2 py-2 flex items-center justify-between m-4 rounded-lg">
      {/* Left Section - Logo */}
      <div className="flex items-center space-x-2">
        <img
          src="https://via.placeholder.com/40"
          alt="App Logo"
          className="w-8 h-8 object-cover rounded-full"
        />
        <span className="text-xl font-bold text-gray-900">SwapSkill</span>
      </div>

      {/* Center Section - Nav Links */}
      {!isMobileView && (
        <div className="flex items-center space-x-6">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? "text-gray-900 font-bold" : "text-white hover:text-gray-900"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "text-gray-900 font-bold" : "text-white hover:text-gray-900"
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/connect"
            className={({ isActive }) =>
              isActive ? "text-gray-900 font-bold" : "text-white hover:text-gray-900"
            }
          >
            Connect
          </NavLink>
          {user?.role === "student" && (
            <NavLink
              to="/eduReels"
              className={({ isActive }) =>
                isActive ? "text-gray-900 font-bold" : "text-white hover:text-gray-900"
              }
            >
              EduReels
            </NavLink>
          )}
        </div>
      )}

      {/* Mobile Navigation Dropdown */}
      {isMobileView && (
        <div>
          <button
            onClick={() => setIsNavDropdownOpen(!isNavDropdownOpen)}
            className="text-white focus:outline-none"
          >
            <span className="text-2xl right-2 justify-end">☰</span>
          </button>
          {isNavDropdownOpen && (
            <div className="absolute top-16 left-2 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive ? "block px-4 py-2 text-blue-500 bg-gray-200" : "block px-4 py-2 text-blue-500 hover:bg-gray-100"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive ? "block px-4 py-2 text-blue-500 bg-gray-200" : "block px-4 py-2 text-blue-500 hover:bg-gray-100"
                }
              >
                Projects
              </NavLink>
              <NavLink
                to="/connect"
                className={({ isActive }) =>
                  isActive ? "block px-4 py-2 text-blue-500 bg-gray-200" : "block px-4 py-2 text-blue-500 hover:bg-gray-100"
                }
              >
                Connect
              </NavLink>
              <NavLink
                to="/eduReels"
                className={({ isActive }) =>
                  isActive ? "block px-4 py-2 text-blue-500 bg-gray-200" : "block px-4 py-2 text-blue-500 hover:bg-gray-100"
                }
              >
                EduReels
              </NavLink>
            </div>
          )}
        </div>
      )}

      {/* Right Section - Profile Menu */}
      <div className="relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Toggling the profile menu
          className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center"
        >
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="w-full h-full object-cover rounded-full"
          />
        </button>

        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-md shadow-lg">
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive ? "block px-4 py-2 text-blue-500 bg-gray-200" : "block px-4 py-2 text-blue-500 hover:bg-gray-100"
              }
            >
              Profile
            </NavLink>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? "block px-4 py-2 text-blue-500 bg-gray-200" : "block px-4 py-2 text-blue-500 hover:bg-gray-100"
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                isActive ? "block px-4 py-2 text-blue-500 bg-gray-200" : "block px-4 py-2 text-blue-500 hover:bg-gray-100"
              }
            >
              Settings
            </NavLink>
            <NavLink
              className="block px-4 py-2 text-red-600 hover:bg-gray-100"
              onClick={logout}
            >
              Logout
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default UserNavbar;
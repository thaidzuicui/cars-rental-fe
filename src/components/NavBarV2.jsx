import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import { lightModeIcon, darkModeIcon } from "../assets/svg-icons";
import { FaSignOutAlt } from "react-icons/fa";

const NavBarV2 = () => {
  const TABS = [
    { title: "Home", path: "/" },
    { title: "Search", path: "/search" },
    { title: "Profile", path: "/profile" },
  ];
  const location = useLocation();
  const navigate = useNavigate();
  const user = {
    avatar:
      "https://i.pinimg.com/236x/af/7f/d3/af7fd34075ee8540937e7349f280c3ca.jpg",
    full_name: "John Doe",
    username: "johndoe",
  };
  // const user = null;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSignOut = () => {
    // Add your sign-out logic here
    navigate("/login");
  };

  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark" || false
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <>
      <div className="fixed z-40 w-screen bg-white pl-[3.125rem] pr-[3.75rem] dark:border-b-gray850 dark:bg-gray900 border-b">
        <nav className="flex h-[6.25rem] items-center justify-between mx-auto max-w-[82.5rem]">
          <NavLink to="/" className="font-semibold text-blue500 text-3xl">
            TRANSFORM
          </NavLink>
          <div className="flex items-center">
            {TABS.map((tab) => (
              <NavLink key={tab.path} to={tab.path} className="hover-effect">
                <p
                  className={`${
                    location.pathname === tab.path
                      ? "text-blue-500"
                      : "text-gray700 dark:text-white200"
                  } mr-7 font-medium  flex`}
                >
                  {tab.title}
                </p>
              </NavLink>
            ))}
            {user ? (
              <div className="relative flex">
                <img
                  src={user.avatar}
                  alt={user.full_name}
                  className="h-[2.3rem] w-[2.3rem] rounded-full hover-effect cursor-pointer"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                />
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-[3rem] w-64 bg-white dark:bg-gray800 border border-gray300 dark:border-gray700 rounded-lg shadow-lg">
                    <div className="flex items-center px-4 py-3">
                      <img
                        src={user.avatar}
                        alt={user.full_name}
                        className="h-12 w-12 rounded-full mr-3"
                      />
                      <div>
                        <p className="text-sm font-semibold text-gray900 dark:text-white">
                          {user.full_name}
                        </p>
                        <p className="text-xs text-gray500 dark:text-gray400">
                          @{user.username}
                        </p>
                      </div>
                    </div>
                    <hr className="border-gray300 dark:border-gray700" />
                    <button
                      className="flex items-center w-full px-4 py-2 text-left text-sm text-red-500 hover:bg-gray100 dark:hover:bg-gray700"
                      onClick={handleSignOut}
                    >
                      <FaSignOutAlt className="mr-3" /> Sign out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                className="hover-effect hidden h-[2.75rem] w-[6.8rem] items-center justify-center rounded bg-blue500 font-semibold text-white md:flex"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </button>
            )}

            <span className="flex mx-1 w-[2.25rem] rotate-90 border-t border-blue-50 dark:border-gray850"></span>
            <img
              src={isDarkMode ? darkModeIcon : lightModeIcon}
              alt="lightmodeicon"
              className="hover-effect cursor-pointer"
              onClick={() => setIsDarkMode(!isDarkMode)}
            />
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBarV2;

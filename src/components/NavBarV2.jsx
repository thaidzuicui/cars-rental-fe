import React from "react";
import { useNavigate, useLocation, NavLink } from "react-router-dom";

function NavBarV2() {
  const TABS = [
    { title: "Home", path: "/" },
    { title: "Search", path: "/search" },
    { title: "Profile", path: "/profile" },
  ];
  const location = useLocation();
  const navigate = useNavigate();
  // const user = {
  //   avatar:
  //     "https://i.pinimg.com/236x/af/7f/d3/af7fd34075ee8540937e7349f280c3ca.jpg",
  //   full_name: "John Doe",
  //   username: "johndoe",
  // };
  const user = null;
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
            <button
              className="hover-effect hidden h-[2.75rem] w-[6.8rem] items-center justify-center rounded bg-blue500 font-semibold text-white md:flex"
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavBarV2;

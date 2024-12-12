import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import NavBarV2 from "./components/NavBarV2";
import { Toaster } from "./components/ui/toaster";
import Register from "./pages/Register";

function App() {
  const Layout = () => (
    <>
      <NavBarV2 />
      <Outlet />
    </>
  );

  const router = createBrowserRouter(
    [
      {
        element: <Layout />,
        children: [
          {
            path: "/",
            element: <Homepage />,
          },
          {
            path: "/search",
            element: <Search />,
          },
          {
            path: "/profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
    {
      future: {
        v7_relativeSplatPath: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_skipActionErrorRevalidation: true,
      },
    }
  );
  return (
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  );
}

export default App;

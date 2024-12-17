import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useNavigate,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import NavBarV2 from "./components/NavBarV2";
import Register from "./pages/Register";
import { getToken } from "./lib/utils";
import { useEffect } from "react";
import Footer from "./components/Footer";

function PrivateRoute({ element }) {
  const navigate = useNavigate();
  const hasToken = getToken();

  useEffect(() => {
    if (!hasToken) {
      navigate("/login");
    }
  }, [hasToken, navigate]); // Chạy lại khi `hasToken` thay đổi

  if (!hasToken) {
    return null; // Nếu không có token, không render element
  }

  return element; // Nếu có token, render element
}

function App() {
  const Layout = () => (
    <>
      <NavBarV2 />
      <Outlet />
      <Footer />
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
            element: <PrivateRoute element={<Search />} />,
          },
          {
            path: "/profile",
            element: <PrivateRoute element={<Profile />} />,
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

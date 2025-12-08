import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";

// Pages
import Home from "../pages/public/Home";
import Login from "../pages/public/Login";
import RegisterHR from "../pages/public/RegisterHR";
import RegisterEmployee from "../pages/public/RegisterEmployee";
import NotFound from "../pages/public/NotFound";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <NotFound />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/login", element: <Login /> },
            { path: "/register-hr", element: <RegisterHR /> },
            { path: "/register-employee", element: <RegisterEmployee /> },
        ],
    },
]);

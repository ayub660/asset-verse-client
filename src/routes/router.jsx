import React from "react";
import { createBrowserRouter } from "react-router-dom";

// Layouts
import MainLayout from "../components/layout/MainLayout";
import DashboardLayout from "../components/layout/DashboardLayout";

// Public Pages
import Home from "../pages/public/Home";
import LoginPage from "../pages/public/Login";          // নাম পরিবর্তন
import RegisterHR from "../pages/public/RegisterHR";
import RegisterEmployee from "../pages/public/RegisterEmployee";
import NotFound from "../pages/public/NotFound";

// HR Pages
import HRDashboard from "../pages/hr/Dashboard";
import HRAssets from "../pages/hr/Assets";
import HRRequests from "../pages/hr/Requests";
import HREmployees from "../pages/hr/Employees";       // নাম পরিবর্তন
import HRUpgrade from "../pages/hr/Upgrade";

// Employee Pages
import MyAssets from "../pages/employee/MyAssets";
import RequestAsset from "../pages/employee/RequestAsset";
import Team from "../pages/employee/Team";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: "login", element: <LoginPage /> },
            { path: "register-hr", element: <RegisterHR /> },
            { path: "register-employee", element: <RegisterEmployee /> },
        ],
    },
    {
        path: "/hr",
        element: <DashboardLayout />,
        children: [
            { index: true, element: <HRDashboard /> },
            { path: "assets", element: <HRAssets /> },
            { path: "requests", element: <HRRequests /> },
            { path: "employees", element: <HREmployees /> },
            { path: "upgrade", element: <HRUpgrade /> },
        ],
    },
    {
        path: "/employee",
        element: <DashboardLayout />,
        children: [
            { index: true, element: <MyAssets /> },
            { path: "request", element: <RequestAsset /> },
            { path: "team", element: <Team /> },
        ],
    },
    { path: "*", element: <NotFound /> },
]);

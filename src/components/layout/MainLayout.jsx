import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">
                <Outlet />
            </main>
        </div>
    );
};

export default MainLayout;

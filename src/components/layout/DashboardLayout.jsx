import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar"; // Optional if you want top navbar
import Footer from "../common/Footer"; // Optional if you want footer

const DashboardLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1 p-4">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default DashboardLayout;

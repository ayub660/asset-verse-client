import React from "react";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm p-4">
            <a className="btn btn-ghost text-xl">AssetVerse</a>
            <div className="flex-1"></div>
            <div className="flex gap-4">
                <a className="btn btn-ghost">Login</a>
                <a className="btn btn-primary">Register</a>
            </div>
        </div>
    );
};

export default Navbar;

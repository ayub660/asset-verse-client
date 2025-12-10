// src/components/common/Navbar.jsx
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
    const { user, role, logout } = useAuth();

    const activeClass = "text-primary font-semibold";

    return (
        <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-gray-800">
                AssetVerse
            </Link>

            {/* Public Links - centered */}
            {!user && (
                <div className="flex gap-6 mx-auto">
                    <NavLink
                        to="/"
                        className={({ isActive }) => (isActive ? activeClass : "text-gray-600")}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/register-employee"
                        className={({ isActive }) => (isActive ? activeClass : "text-gray-600")}
                    >
                        Join as Employee
                    </NavLink>
                    <NavLink
                        to="/register-hr"
                        className={({ isActive }) => (isActive ? activeClass : "text-gray-600")}
                    >
                        Join as HR
                    </NavLink>
                </div>
            )}

            {/* Login / User Dropdown */}
            <div className="ml-auto">
                {!user ? (
                    <Link
                        to="/login"
                        className="btn btn-primary btn-sm"
                    >
                        Login
                    </Link>
                ) : (
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="cursor-pointer flex items-center gap-2">
                            {user.photoURL ? (
                                <img src={user.photoURL} alt="User" className="w-8 h-8 rounded-full" />
                            ) : (
                                <FaUserCircle className="w-8 h-8 text-gray-500" />
                            )}
                            <span className="ml-1">{role === "hr" ? "HR" : "Employee"}</span>
                        </label>
                        <ul
                            tabIndex={0}
                            className="dropdown-content menu p-2 shadow bg-white rounded-box w-52 mt-2"
                        >
                            {role === "employee" && (
                                <>
                                    <li>
                                        <Link to="/employee/my-assets">My Assets</Link>
                                    </li>
                                    <li>
                                        <Link to="/employee/team">My Team</Link>
                                    </li>
                                    <li>
                                        <Link to="/employee/request">Request Asset</Link>
                                    </li>
                                </>
                            )}
                            {role === "hr" && (
                                <>
                                    <li>
                                        <Link to="/hr">Asset List</Link>
                                    </li>
                                    <li>
                                        <Link to="/hr/add-asset">Add Asset</Link>
                                    </li>
                                    <li>
                                        <Link to="/hr/requests">All Requests</Link>
                                    </li>
                                    <li>
                                        <Link to="/hr/employees">Employee List</Link>
                                    </li>
                                </>
                            )}
                            <li>
                                <Link to="/profile">Profile</Link>
                            </li>
                            <li>
                                <button onClick={logout}>Logout</button>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;

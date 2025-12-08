import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">

                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="text-2xl font-bold text-indigo-600">
                            AssetVerse
                        </Link>
                    </div>

                    {/* Center Menu */}
                    <div className="hidden lg:flex lg:space-x-8">
                        <Link to="/" className="text-gray-700 hover:text-indigo-600">Home</Link>
                        <Link to="/about" className="text-gray-700 hover:text-indigo-600">About</Link>
                        <Link to="/features" className="text-gray-700 hover:text-indigo-600">Features</Link>
                        <Link to="/packages" className="text-gray-700 hover:text-indigo-600">Packages</Link>
                    </div>

                    {/* Right Auth Buttons */}
                    <div className="hidden lg:flex lg:items-center lg:space-x-4">
                        <Link to="/login" className="btn btn-outline btn-sm">Login</Link>

                        {/* Register Dropdown */}
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-primary btn-sm">
                                Register
                            </label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-48 mt-2">
                                <li>
                                    <Link to="/register-hr" className="text-gray-700 hover:text-indigo-600">Register HR</Link>
                                </li>
                                <li>
                                    <Link to="/register-employee" className="text-gray-700 hover:text-indigo-600">Register Employee</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex lg:hidden">
                        <label htmlFor="mobile-menu" className="btn btn-ghost p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </label>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <input type="checkbox" id="mobile-menu" className="hidden" />
            <div className="lg:hidden" id="mobile-menu-dropdown">
                <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-md">
                    <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">Home</Link>
                    <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">About</Link>
                    <Link to="/features" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">Features</Link>
                    <Link to="/packages" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">Packages</Link>
                    <Link to="/login" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">Login</Link>
                    <Link to="/register-hr" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">Register HR</Link>
                    <Link to="/register-employee" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">Register Employee</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

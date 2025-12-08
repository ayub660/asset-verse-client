// src/pages/public/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../../assets/images/hero.png";
import feature1 from "../../assets/images/feature1.png";
import feature2 from "../../assets/images/feature2.png";
import feature3 from "../../assets/images/feature3.png";
import feature4 from "../../assets/images/feature4.png";

const Home = () => {
    return (
        <div className="font-poppins">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
                <div className="max-w-7xl mx-auto px-4 py-20 flex flex-col lg:flex-row items-center justify-between">
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                            Welcome to AssetVerse 🚀
                        </h1>
                        <p className="mb-6 text-lg">
                            Professional Asset Management System for HR & Employees.
                        </p>
                        <div className="space-x-4">
                            <Link
                                to="/login"
                                className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-indigo-600 transition"
                            >
                                Login
                            </Link>
                            <Link
                                to="/register-hr"
                                className="btn btn-primary btn-lg"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                    <div className="lg:w-1/2 mt-10 lg:mt-0">
                        <img src={heroImg} alt="Hero" className="rounded-lg shadow-lg" />
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-10">Features</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                            <img src={feature1} alt="Feature 1" className="mx-auto mb-4 h-20" />
                            <h3 className="font-semibold mb-2">Easy Asset Tracking</h3>
                            <p className="text-gray-500">Track all assets with real-time updates.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                            <img src={feature2} alt="Feature 2" className="mx-auto mb-4 h-20" />
                            <h3 className="font-semibold mb-2">Requests Management</h3>
                            <p className="text-gray-500">Handle requests quickly and efficiently.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                            <img src={feature3} alt="Feature 3" className="mx-auto mb-4 h-20" />
                            <h3 className="font-semibold mb-2">Team Collaboration</h3>
                            <p className="text-gray-500">Work seamlessly with your team members.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                            <img src={feature4} alt="Feature 4" className="mx-auto mb-4 h-20" />
                            <h3 className="font-semibold mb-2">Upgrade Packages</h3>
                            <p className="text-gray-500">Easily upgrade for premium features.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* About / CTA Section */}
            <section className="py-20 bg-indigo-600 text-white">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Why AssetVerse?</h2>
                    <p className="mb-6 text-lg">
                        We simplify asset management, improve team collaboration, and ensure smooth HR operations.
                    </p>
                    <Link
                        to="/register-hr"
                        className="btn btn-primary btn-lg"
                    >
                        Start Your Journey
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;

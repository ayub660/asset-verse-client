// src/pages/public/RegisterEmployee.jsx
import React from "react";

const RegisterEmployee = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-3xl font-bold mb-6">Register as Employee</h1>
            <form className="w-full max-w-md bg-white p-8 rounded shadow">
                <input
                    type="text"
                    placeholder="Full Name"
                    className="input input-bordered w-full mb-4"
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="input input-bordered w-full mb-4"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="input input-bordered w-full mb-4"
                />
                <input
                    type="date"
                    placeholder="Date of Birth"
                    className="input input-bordered w-full mb-6"
                />
                <button className="btn btn-primary w-full">Register</button>
            </form>
        </div>
    );
};

export default RegisterEmployee; // ✅ default export

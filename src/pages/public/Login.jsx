// src/pages/public/Login.jsx
import React, { useState } from "react";
import { useAuth } from "../../context/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const { loginWithEmail, loginWithGoogle, resetPassword } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleEmailLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await loginWithEmail(email, password);
            navigate("/"); // Redirect after login
        } catch (err) {
            alert(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        setLoading(true);
        try {
            await loginWithGoogle();
            navigate("/");
        } catch (err) {
            alert(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleForgotPassword = async () => {
        if (!email) return alert("Please enter your email to reset password");
        try {
            await resetPassword(email);
            alert("Password reset email sent!");
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-indigo-100 p-4">
            <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md">
                <h1 className="text-3xl font-bold text-indigo-600 mb-6 text-center">
                    Login to AssetVerse
                </h1>

                <form onSubmit={handleEmailLogin} className="flex flex-col gap-4">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input input-bordered w-full focus:ring-2 focus:ring-indigo-400"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="input input-bordered w-full focus:ring-2 focus:ring-indigo-400"
                        required
                    />
                    <button
                        type="submit"
                        className={`btn btn-primary w-full ${loading ? "loading" : ""}`}
                    >
                        Login
                    </button>
                </form>

                <button
                    onClick={handleGoogleLogin}
                    className="btn btn-outline w-full mt-4"
                >
                    Login with Google
                </button>

                <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
                    <button
                        onClick={handleForgotPassword}
                        className="hover:underline"
                    >
                        Forgot Password?
                    </button>
                    <Link to="/register-employee" className="hover:underline">
                        Register as Employee
                    </Link>
                </div>

                <div className="mt-2 text-center text-sm text-gray-500">
                    <Link to="/register-hr" className="hover:underline">
                        Register as HR
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;

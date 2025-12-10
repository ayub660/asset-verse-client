// src/pages/public/Login.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";

const Login = () => {
    const { loginWithEmail, loginWithGoogle } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleEmailLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await loginWithEmail(email, password);
            alert("Login Successful!");
            navigate("/"); // Redirect after login
        } catch (error) {
            alert(error.message);
        }
        setLoading(false);
    };

    const handleGoogleLogin = async () => {
        setLoading(true);
        try {
            await loginWithGoogle();
            alert("Google Login Successful!");
            navigate("/"); // Redirect after login
        } catch (error) {
            alert(error.message);
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-50 to-purple-50">
            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">Welcome Back!</h2>

                <form onSubmit={handleEmailLogin} className="flex flex-col gap-4">
                    <input
                        type="email"
                        placeholder="Email"
                        className="input input-bordered w-full"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="input input-bordered w-full"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button
                        type="submit"
                        className={`btn btn-primary w-full ${loading ? "loading" : ""}`}
                        disabled={loading}
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>

                <div className="divider">OR</div>

                <button
                    onClick={handleGoogleLogin}
                    className="btn btn-outline w-full flex justify-center items-center gap-2"
                    disabled={loading}
                >
                    <img
                        src="/assets/icons/google.png"
                        alt="Google"
                        className="w-6 h-6"
                    />
                    {loading ? "Signing in..." : "Login with Google"}
                </button>

                <p className="text-center text-gray-500 mt-4">
                    Don't have an account?{" "}
                    <Link to="/register-employee" className="text-indigo-600 font-medium hover:underline">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;

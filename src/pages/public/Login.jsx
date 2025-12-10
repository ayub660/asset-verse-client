import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [roleSelect, setRoleSelect] = useState("employee");
    const { loginWithEmail, loginWithGoogle } = useAuth();
    const navigate = useNavigate();

    const handleEmailLogin = async (e) => {
        e.preventDefault();
        try {
            await loginWithEmail(email, password, roleSelect);
            if (roleSelect === "hr") navigate("/hr");
            else navigate("/employee");
        } catch (error) {
            console.log(error.message);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            await loginWithGoogle(roleSelect);
            if (roleSelect === "hr") navigate("/hr");
            else navigate("/employee");
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form onSubmit={handleEmailLogin} className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-bold mb-4">Login</h2>

                <label className="block mb-2">Role</label>
                <select className="mb-4 w-full border p-2 rounded" value={roleSelect} onChange={e => setRoleSelect(e.target.value)}>
                    <option value="employee">Employee</option>
                    <option value="hr">HR</option>
                </select>

                <label className="block mb-2">Email</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="mb-4 w-full border p-2 rounded" required />

                <label className="block mb-2">Password</label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="mb-4 w-full border p-2 rounded" required />

                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded mb-2">Login</button>

                <button type="button" onClick={handleGoogleLogin} className="w-full bg-red-500 text-white py-2 rounded">Login with Google</button>
            </form>
        </div>
    );
};

export default Login;

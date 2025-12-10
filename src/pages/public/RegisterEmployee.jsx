import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";

const RegisterEmployee = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [profileImage, setProfileImage] = useState("");
    const { registerWithEmail } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await registerWithEmail(name, email, password, profileImage, "employee");
            navigate("/employee");
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-bold mb-4">Register as Employee</h2>

                <label className="block mb-2">Full Name</label>
                <input type="text" value={name} onChange={e => setName(e.target.value)} className="mb-4 w-full border p-2 rounded" required />

                <label className="block mb-2">Email</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="mb-4 w-full border p-2 rounded" required />

                <label className="block mb-2">Password</label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="mb-4 w-full border p-2 rounded" required />

                <label className="block mb-2">Profile Image URL</label>
                <input type="text" value={profileImage} onChange={e => setProfileImage(e.target.value)} className="mb-4 w-full border p-2 rounded" />

                <button type="submit" className="w-full bg-green-600 text-white py-2 rounded">Register</button>
            </form>
        </div>
    );
};

export default RegisterEmployee;

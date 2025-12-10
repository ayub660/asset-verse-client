// src/context/AuthProvider.jsx
import React, { createContext, useContext, useState, useEffect } from "react";
import { auth, googleProvider } from "../services/firebase.config";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
    onAuthStateChanged
} from "firebase/auth";
import Swal from "sweetalert2";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [role, setRole] = useState(null); // "employee" or "hr"
    const [loading, setLoading] = useState(true);

    const registerWithEmail = async (name, email, password, profileImage, selectedRole) => {
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(res.user, { displayName: name, photoURL: profileImage });
            setUser(res.user);
            setRole(selectedRole);
            Swal.fire("Success", "Registration successful!", "success");
        } catch (err) {
            Swal.fire("Error", err.message, "error");
        }
    };

    const loginWithEmail = async (email, password, selectedRole) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setRole(selectedRole);
            Swal.fire("Success", "Login successful!", "success");
        } catch (err) {
            Swal.fire("Error", err.message, "error");
        }
    };

    const loginWithGoogle = async (selectedRole) => {
        try {
            const res = await signInWithPopup(auth, googleProvider);
            setUser(res.user);
            setRole(selectedRole);
            Swal.fire("Success", "Login with Google successful!", "success");
        } catch (err) {
            Swal.fire("Error", err.message, "error");
        }
    };

    const logout = async () => {
        await signOut(auth);
        setUser(null);
        setRole(null);
        Swal.fire("Success", "Logged out successfully", "success");
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider
            value={{ user, role, loading, registerWithEmail, loginWithEmail, loginWithGoogle, logout, setRole }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

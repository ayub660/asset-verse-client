import React, { createContext, useContext, useState, useEffect } from "react";
import { auth, googleProvider } from "../services/firebase.config";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
    updateProfile
} from "firebase/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [role, setRole] = useState(null);
    const [loading, setLoading] = useState(true);

    const registerWithEmail = async (name, email, password, profileImage, userRole) => {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(res.user, { displayName: name, photoURL: profileImage });
        setUser(res.user);
        setRole(userRole);
        localStorage.setItem("userRole", userRole);
    };

    const loginWithEmail = async (email, password) => {
        const res = await signInWithEmailAndPassword(auth, email, password);
        setUser(res.user);
        const savedRole = localStorage.getItem("userRole");
        setRole(savedRole);
    };

    const loginWithGoogle = async (selectedRole) => {
        const res = await signInWithPopup(auth, googleProvider);
        setUser(res.user);
        setRole(selectedRole);
        localStorage.setItem("userRole", selectedRole);
    };

    const logout = () => {
        signOut(auth);
        setUser(null);
        setRole(null);
        localStorage.removeItem("userRole");
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            if (currentUser) {
                const savedRole = localStorage.getItem("userRole");
                setRole(savedRole || null);
            } else {
                setRole(null);
            }
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user, role, loading, registerWithEmail, loginWithEmail, loginWithGoogle, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

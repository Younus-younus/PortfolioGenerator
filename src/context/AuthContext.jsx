import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        return !!localStorage.getItem("authToken");
    });

    const login = (token) => {
        localStorage.setItem("authToken", token);
        setIsLoggedIn(true);
    };

    const logout = () => {
        localStorage.removeItem("authToken");
        setIsLoggedIn(false);
    };

    useEffect(() => {
        // Sync state with localStorage in case of manual token changes
        const token = localStorage.getItem("authToken");
        setIsLoggedIn(!!token);
    }, []);

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

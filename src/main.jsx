import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import './index.css'
const root = ReactDOM.createRoot(document.getElementById("root")); 
root.render(
    <React.StrictMode>
        <AuthProvider>
        <BrowserRouter future={{ v7_relativeSplatPath: true }} basename="/younus-younus.github.io/">
                <App />
            </BrowserRouter>
        </AuthProvider>
    </React.StrictMode>
);

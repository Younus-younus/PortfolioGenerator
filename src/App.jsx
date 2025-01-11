import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import AuthorPortfolio from './components/AuthorPortfolio'
import NewPortfolio from './components/NewPortfolio';
import Login from "./components/Login";
import Signup from "./components/Signup"
import Portfolios from './components/Portfolios';
import PortfolioDetails from "./components/PortflioDetails";

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/portfolios" element={<Portfolios />} /> {/* Change path */}
                <Route path="/author-portfolio" element={<AuthorPortfolio />} />
                <Route path="/new-portfolio" element={<NewPortfolio />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/portfolio/:id" element={<PortfolioDetails />} />
            </Routes>
        </>
    );
}

export default App;
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const NavBar = () => (
    <nav>
        <ul className="nav">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/user">User</Link>
            </li>
        </ul>
    </nav>
);

export default NavBar;

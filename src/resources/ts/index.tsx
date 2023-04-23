import React from "react";
import ReactDOM from "react-dom";
import About from "./components/About";
import NavBar from "./components/NavBar";
import User from "./components/User";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <NavBar />
            Home
            <Routes>
                <Route path="/" />
                <Route path="/about" element={<About />} />
                <Route path="/user" element={<User />} />
            </Routes>
        </BrowserRouter>
    );
};

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavList = styled.li`
    font-size: 1.5em;
    text-align: center;
    margin: 0 10px;
`;

const NavBar = () => (
    <nav>
        <ul className="nav">
            <NavList>
                <Link to="/">Home</Link>
            </NavList>
            <NavList>
                <Link to="/about">About</Link>
            </NavList>
            <NavList>
                <Link to="/user">User</Link>
            </NavList>
        </ul>
    </nav>
);

export default NavBar;

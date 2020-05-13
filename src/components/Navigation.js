import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Navigation = () => (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            {/*links.length &&
                links.map((link) => (
                    <li>
                        <Link to={link}>{link}</Link>
                    </li>
                ))*/}
        </ul>
    </nav>
);

export default Navigation;

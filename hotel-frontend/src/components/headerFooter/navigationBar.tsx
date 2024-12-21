import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../../styles/headerFooter.css";

const Header: React.FC = () => {
    const location = useLocation();

    return (
    <header className="header">
        <nav>
            <h1 className="title">Hotel</h1>
            <ul id="navbar">
                <li>
                    <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link>
                </li>
            </ul>
            <div id="mobile">
                <i className="fa fa-bars"></i>
            </div>
        </nav>
    </header>
);
};

export default Header;

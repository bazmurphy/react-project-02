import React from "react";
import reactLogo from "../assets/react.svg"

function Navbar() {
    return (
        <nav className="nav-container">
            <div className="nav-left-side">
                <img className="nav-logo" src={reactLogo} alt="" />
                <h3 className="nav-h3">ReactFacts</h3>
            </div>
            <h4 className="nav-h4">React Course - Project 1</h4>
        </nav>
    );
}

export default Navbar;
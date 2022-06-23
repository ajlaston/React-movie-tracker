import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import MobileNav from "./MobileNav";

function Navbar() {
    return (
        <div className="navbar">

            <div className="web-nav">

                <div className="logo">
                    <h1>Finish</h1>
                </div>
                
                <div className="web-nav-link-container">
                    <Link className="web-nav-links" to="/">Home</Link>
                    <Link className="web-nav-links" to="/watched">Finished</Link>
                    <Link className="web-nav-links" to="/Explore">Explore</Link>
                </div>

            </div>

            <div className="mobile-nav">
                <MobileNav />
            </div>

        </div>
    )
}

export default Navbar;
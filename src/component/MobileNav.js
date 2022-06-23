import React from "react";
import { Link } from "react-router-dom";
import "./MobileNav.css";

function MobileNav() {

    const [navBtn, setNavBtn] = React.useState("☰");
    const [navClass, setNavClass] = React.useState("hidden-nav");

    const toggleNav = () => {
        setNavClass(prev=> prev === "hidden-nav" ? "show-nav" : "hidden-nav");
        setNavBtn(prev=> prev === "☰" ? "×" : "☰");
    }

    const handleNavBtn = (e) => {
        e.preventDefault();

        const state = {
            "×" : {
                execute(){
                    toggleNav();
                }
            },

            "☰" : {
                execute(){
                    toggleNav();
                }
            }
        }

        state[navBtn].execute(); 
    }

    return (
        <div className="mobile-nav-container">

            <div className="mobile-logo">
                <h2>Finish</h2>
                <button onClick={handleNavBtn}>{navBtn}</button>
            </div>

            <div className={`${navClass}`}>
                <Link onClick={toggleNav} className="mobile-nav-link" to="/">Home</Link>
                <Link onClick={toggleNav} className="mobile-nav-link" to="/watched">Finished</Link>
                <Link onClick={toggleNav} className="mobile-nav-link" to="/explore">Explore</Link>
            </div>

        </div>
    )
}

export default MobileNav;
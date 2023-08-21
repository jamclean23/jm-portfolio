// Hamburger menu component

// ====== IMPORTS ======

// React
import React, { useContext } from "react";

// Context
import { AppContext } from "../../../App";

// Css
import './HamburgerMenu.css';


// ====== COMPONENT ======

function HamburgerMenu () {
    
    // FUNCTIONS

    
    // RENDER

    return (
        <nav className="HamburgerMenu fadeIn">
                <a className="navLink"><span className="navLinkSlashes">// </span><span className="navLinkText">Projects</span></a>
                <a className="navLink"><span className="navLinkSlashes">// </span><span className="navLinkText">About</span></a>
                <a className="navLink"><span className="navLinkSlashes">// </span><span className="navLinkText">Contact</span></a>
                <a className="navLink"><span className="navLinkSlashes">// </span><span className="navLinkText">Resumé</span></a>
        </nav>
    );
}


// ====== EXPORTS ======

export default HamburgerMenu;
// Hamburger menu component

// ====== IMPORTS ======

// React
import React, { useContext } from "react";

// Context
import { AppContext } from "../../../App";

// Css
import './HamburgerMenu.css';

// Functions
import { handleNavLinkClick } from "../Header";


// ====== COMPONENT ======

function HamburgerMenu (props) {
    
    // FUNCTIONS
    
    // RENDER

    return (
        <nav className="HamburgerMenu fadeIn">
                <a className="navLink" onClick={props.handleNavLinkClick.bind(this, 'Home')}><span className="navLinkSlashes">//</span><span className="navLinkText">Home</span></a>
                <a className="navLink" onClick={props.handleNavLinkClick.bind(this, 'Projects')}><span className="navLinkSlashes">//</span><span className="navLinkText">Projects</span></a>
                <a className="navLink" onClick={props.handleNavLinkClick.bind(this, 'About')}><span className="navLinkSlashes">//</span><span className="navLinkText">About</span></a>
                <a className="navLink" onClick={props.handleNavLinkClick.bind(this, 'Contact')}><span className="navLinkSlashes">//</span><span className="navLinkText">Contact</span></a>
                <a className="navLink" onClick={props.handleNavLinkClick.bind(this, 'Resume')}><span className="navLinkSlashes">//</span><span className="navLinkText">Resumé</span></a>
        </nav>
    );
}


// ====== EXPORTS ======

export default HamburgerMenu;
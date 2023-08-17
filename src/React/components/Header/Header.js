// Header component

// ====== IMPORTS ======

// React
import React from "react";

// Css
import './Header.css';


// ====== COMPONENT ======

function Header () {
    // RENDER
    
    return (
        <header className="Header">
            <span className="jmdev">jmdev</span>
            <nav className="navBar expanded">
                <a className="navLink"><span className="navLinkSlashes">// </span><span className="navLinkText">Projects</span></a>
                <a className="navLink"><span className="navLinkSlashes">// </span><span className="navLinkText">About</span></a>
                <a className="navLink"><span className="navLinkSlashes">// </span><span className="navLinkText">Contact</span></a>
                <a className="navLink"><span className="navLinkSlashes">// </span><span className="navLinkText">Resumé</span></a>
            </nav>
            <button className="hamburger">☰</button>

        </header>
    );
}

// ====== EXPORT ======

export default Header;
// Header component

// ====== IMPORTS ======

// React
import React, { useState, useEffect } from "react";

// Css
import './Header.css';

// Components
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";


// ====== COMPONENT ======

function Header () {
    
    // VARIABLES
    
    const [shouldShowHamburgerMenu, setShouldShowHamburgerMenu] = useState(false);


    // LISTENERS
    
    useEffect(() => {
        window.addEventListener('click', handleWindowClick);
        window.addEventListener('transitionend', transitionEnd);

        return () => {
            window.removeEventListener('click', handleWindowClick);
            window.removeEventListener('transitionend', transitionEnd);
        }
    }, []);

    // FUNCTIONS

    function handleWindowClick (event) {
        const hamburgerBtn = document.querySelector('.hamburger');
        const navLink = document.querySelector('.navLink');

        if (event.srcElement === hamburgerBtn && !(hamburgerBtn.classList.contains('menuShown'))) {
            showHamburger();
        } else if (event.srcElement === hamburgerBtn && (hamburgerBtn.classList.contains('menuShown'))) {
            hideHamburger();
        }

        if (
            hamburgerBtn.classList.contains('menuShown') && (!(hamburgerBtn.contains(event.srcElement))) || 
            event.srcElement.parentElement && event.srcElement.parentElement.classList.contains('navLink')
            ) {
            hideHamburger();
        }
    }

    function transitionEnd (event) {
        
        // Hides hamburger menu after transition
        if (event.srcElement === document.querySelector('.hamburger') && !(event.srcElement.classList.contains('menuShown'))) {
            setShouldShowHamburgerMenu(false);
        }
    }

    function showHamburger () {
        const hamburgerBtn = document.querySelector('.hamburger');

        setShouldShowHamburgerMenu(true);
        hamburgerBtn.classList.add('menuShown');
    }

    function hideHamburger () {
        const hamburgerBtn = document.querySelector('.hamburger');

        hamburgerBtn.classList.remove('menuShown');
        document.querySelector('.HamburgerMenu').classList.remove('fadeIn');
    }

    // RENDER
    
    return (
        <header className="Header">
            <button className="jmdev">jm_dev</button>
            <nav className="navBar expanded">
                <a className="navLink"><span className="navLinkSlashes">//</span><span className="navLinkText">Projects</span></a>
                <a className="navLink"><span className="navLinkSlashes">//</span><span className="navLinkText">About</span></a>
                <a className="navLink"><span className="navLinkSlashes">//</span><span className="navLinkText">Contact</span></a>
                <a className="navLink"><span className="navLinkSlashes">//</span><span className="navLinkText">Resumé</span></a>
            </nav>
            <button className="hamburger">
                ☰
                {shouldShowHamburgerMenu
                    ? <HamburgerMenu/>
                    : ''
                }
            </button>

        </header>
    );
}

// ====== EXPORT ======

export default Header;
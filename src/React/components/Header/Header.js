// Header component

// ====== IMPORTS ======

// React
import React, { useState, useEffect, useRef } from "react";

// Css
import './Header.css';

// Components
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";

// Functions
import uniqid from 'uniqid';

// ====== COMPONENT ======

function Header () {
    
    // VARIABLES
    
    const [shouldShowHamburgerMenu, setShouldShowHamburgerMenu] = useState(false);
    const jmdevHovered = useRef(false);
    const [spinners, setSpinners] = useState([]);
    const spinnersRef = useRef([]);


    // LISTENERS

    useEffect(() => {
        spinnersRef.current = spinners;
    }, [spinners]);

    // On Mount
    useEffect(() => {
        handleLoad();

        // Hover effects for jmdev button
        const jmdev = document.querySelector('.jmdev');
        jmdev.addEventListener('mouseover', handleJmdevHover);
        jmdev.addEventListener('mouseout', handleJmdevHoverOut);

        // Click events from app
        window.addEventListener('click', handleWindowClick);

        
        window.addEventListener('transitionend', transitionEnd);

        window.addEventListener('resize', handleResize);
        window.addEventListener('animationend', handleAnimationEnd);

        handleHeaderLoad();
    }, []);

    // FUNCTIONS
    function handleAnimationEnd (event) {
        handleNavBarAnimationEnd(event);
        handleHamburgerAnimationEnd(event);
    }
    
    function handleHamburgerAnimationEnd (event) {
        const hamburger = document.querySelector('.hamburger');
        const nav = document.querySelector('.navBar');
    
    
        switch (event.animationName) {
            case 'hamburger-fade-out':
                hamburger.classList.add('hidden');
                nav.classList.remove('hidden');
                nav.classList.remove('retracted');
                nav.classList.add('expanded');
                break;
        }
    }
    
    function handleNavBarAnimationEnd (event) {
    
        const nav = document.querySelector('.navBar');
        const hamburger = document.querySelector('.hamburger');
    
        switch (event.animationName) {
            case 'expanding':
                break;
            case 'retracting':
                nav.classList.add('hidden');
                hamburger.classList.remove('hidden');
                break;
        }
    }
    
    function handleLoad () {
        const nav = document.querySelector('.navBar');
        const hamburger = document.querySelector('.hamburger');
    
        // Handle NavBar
        if (window.innerWidth < 950) {
            nav.classList.add('hidden');
            nav.classList.add('retracted');
            nav.classList.remove('expanded');
            hamburger.classList.remove('hidden');
        } else {
            hamburger.classList.add('hidden');
        }
    }
    
    function handleResize () {
    
        // handle hamburger
        const nav = document.querySelector('.navBar');
        const hamburger = document.querySelector('.hamburger');
        
        if (window.innerWidth < 950) {
            hamburger.classList.remove('fadeOut');
            nav.classList.remove('expanded');
            nav.classList.add('retracted');
        } else {
            hamburger.classList.add('fadeOut');
        }
    }
    
    function reportHeightToCss () {
        const root = document.querySelector(':root');
        const Header = document.querySelector('.Header');
        root.style.setProperty('--header-height', getComputedStyle(Header).height);
    }

    function generateSpinners (counter = 0) {
        if (jmdevHovered.current) {
            if (!(counter % Math.floor((Math.random()*10)+5))) {
                addSpinner();
            }
            counter++;
            requestAnimationFrame(generateSpinners.bind(this, counter));
        }
    }
    
    function assignSpinnerValsAfterDelay (id, delay = 20) {
        return new Promise((resolve) => {
            setTimeout(timerDone.bind(this, id), delay);

            function timerDone (id) { 
                const spinnersDom = document.querySelectorAll('.spinner');
                let spinner;

                spinnersDom.forEach((spinnerDom) => {
                    if (spinnerDom.getAttribute('data-id') === id) {
                        spinner = spinnerDom;
                    }
                });

                if (spinner) {
                    spinner.style.top = (Math.random() * 100) + 40 + 'px';
                    spinner.style.left = (Math.random() * 400) - 200 + 'px';
                    spinner.style.opacity = 0;
                }
                resolve();
            }
        });
    }

    function removeSpinnerAfterDelay (id, delay = 3000) {
        return new Promise((resolve) => {
            setTimeout(timerDone.bind(this, id), delay);

            function timerDone (id) {
                removeSpinnerById(id);
                resolve();
            }
        });
    }

    function removeSpinnerById(id) {
        let newSpinnersArray = [];

        spinnersRef.current.forEach((spinner) => {
            if (!(spinner.props['data-id'] === id)) {
                newSpinnersArray.push(spinner);
            }
        });

        setSpinners([...newSpinnersArray]);
    }

    async function addSpinner () {
        const spinnerKey = uniqid();
        setSpinners((oldArray) => [...oldArray, <div 
                                                    style={{
                                                        animation: (Math.random()*6)+.2 + 's linear infinite spin'
                                                    }}
                                                    className="spinner" 
                                                    data-id={spinnerKey}
                                                    key={spinnerKey}
                                                >|</div>]);
        await assignSpinnerValsAfterDelay(spinnerKey);
        await removeSpinnerAfterDelay(spinnerKey);
    }

    function handleJmdevHover (event) {
        jmdevHovered.current = true;
        generateSpinners();
    }

    function handleJmdevHoverOut (event) {
        jmdevHovered.current = false;
    }

    function handleWindowClick (event) {
        const hamburgerBtn = document.querySelector('.hamburger');

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
        const hamburgerMenu = document.querySelector('.HamburgerMenu');

        if (hamburgerBtn.classList) {
            hamburgerBtn.classList.remove('menuShown');

            if (hamburgerMenu) {
                document.querySelector('.HamburgerMenu').classList.remove('fadeIn');
            }
        }
    }

    function handleHeaderLoad () {
        reportHeightToCss();
        window.addEventListener('resize', reportHeightToCss);
    }

    function handleNavLinkClick (toElementClass) {
        const element = document.querySelector('.' + toElementClass);
        if (element) {

            window.scroll({
                top: element.offsetTop,
                behavior: "smooth"
            })
        }
            
    }
    
    // RENDER
    
    return (
        <header className="Header">
            <button className="jmdev">
                jm_dev
                {spinners}
            </button>
            <nav className="navBar expanded">
                <a className="navLink" onClick={handleNavLinkClick.bind(this, 'Projects')}><span className="navLinkSlashes">//</span><span className="navLinkText">Projects</span></a>
                <a className="navLink" onClick={handleNavLinkClick.bind(this, 'About')}><span className="navLinkSlashes">//</span><span className="navLinkText">About</span></a>
                <a className="navLink" onClick={handleNavLinkClick.bind(this, 'Contact')}><span className="navLinkSlashes">//</span><span className="navLinkText">Contact</span></a>
                <a className="navLink" onClick={handleNavLinkClick.bind(this, 'Resume')}><span className="navLinkSlashes">//</span><span className="navLinkText">Resumé</span></a>
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
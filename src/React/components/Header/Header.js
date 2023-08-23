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

    useEffect(() => {
        const jmdev = document.querySelector('.jmdev');
        jmdev.addEventListener('mouseover', handleJmdevHover);
        jmdev.addEventListener('mouseout', handleJmdevHoverOut);


        window.addEventListener('click', handleWindowClick);
        window.addEventListener('transitionend', transitionEnd);

        return () => {
            jmdev.addEventListener('mouseover', handleJmdevHover);
            window.removeEventListener('click', handleWindowClick);
            window.removeEventListener('transitionend', transitionEnd);
        }
    }, []);

    // FUNCTIONS

    function generateSpinners (counter = 0) {
        if (jmdevHovered.current) {
            if (!(counter % Math.floor((Math.random()*20)+10))) {
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
                    console.log(spinnerDom.getAttribute('data-id'));
                    if (spinnerDom.getAttribute('data-id') === id) {
                        spinner = spinnerDom;
                    }
                });

                if (spinner) {
                    console.log('assigning spinner');
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
            } else {
                console.log('Deleting spinner: ', id);
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

        hamburgerBtn.classList.remove('menuShown');
        document.querySelector('.HamburgerMenu').classList.remove('fadeIn');
    }

    // RENDER
    
    return (
        <header className="Header">
            <button className="jmdev">
                jm_dev
                {spinners}
            </button>
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
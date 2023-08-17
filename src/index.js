// Entry point


// ====== IMPORTS ======

// Styling
import css from './styles.css';

// React
import React from 'react';
import { createRoot } from 'react-dom/client';

// Main React App
import { App } from './React/App.js';


// ====== LISTENERS ======

window.addEventListener('load', handleLoad);
window.addEventListener('resize', handleResize);
window.addEventListener('animationend', handleAnimationEnd);
window.addEventListener('animationstart', handleAnimationStart);



// ====== FUNCTIONS ======

function handleAnimationEnd (event) {
    handleNavBarAnimationEnd(event);
    handleHamburgerAnimationEnd(event);
}

function handleAnimationStart (event) {
    handleNavBarAnimationStart(event);
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


    }
}

function handleNavBarAnimationStart (event) {

    const nav = document.querySelector('.navBar');
    const hamburger = document.querySelector('.hamburger');

    switch (event.animationName) {
        case 'expanding':
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
    if (window.innerWidth < 600) {
        nav.classList.add('hidden');
        hamburger.classList.remove('hidden');
    } else {
        hamburger.classList.add('hidden');
    }
}

function handleResize () {

    // handle hamburger
    const nav = document.querySelector('.navBar');
    const hamburger = document.querySelector('.hamburger');
    
    if (window.innerWidth < 600) {
        hamburger.classList.remove('fadeOut');
        nav.classList.remove('expanded');
        nav.classList.add('retracted');
    } else {
        hamburger.classList.add('fadeOut');
    }
}

// ====== RENDER ======

const reactRoot = createRoot(document.querySelector('#root'));

reactRoot.render(<App/>);
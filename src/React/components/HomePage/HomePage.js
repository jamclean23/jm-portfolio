// Home page component

// ====== IMPORTS ======

// React
import React, { useState, useEffect } from 'react';

// Css
import './HomePage.css';

// Components
import Header from '../Header/Header';
import Landing from './Landing/Landing.js';
import Projects from './Projects/Projects.js';
import About from './About/About';
import Contact from './Contact/Contact';

// Images
import portrait from '../../../assets/images/portrait.jpg';

// ====== DEFINITION ======

function HomePage () {
    
    // FUNCTIONS

    const [test, setTest] = useState('');

    // LISTENERS

    // FUNCTIONS

    function updateTest () {

        setTest(document.querySelector('.navBar').classList);
        requestAnimationFrame(updateTest)
    }

    // RENDER

    return (
    <div className='HomePage'>
        <Header />
        <main>
            <Landing />
            <About />
            <Projects />
            <Contact />
            {/* <button onLoad={updateTest} >{test}</button> */}
        </main>
    </div>    
    );
}

// ====== EXPORTS ======

export {
    HomePage
}
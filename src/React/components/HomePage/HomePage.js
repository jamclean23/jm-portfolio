// Home page component

// ====== IMPORTS ======

// React
import React, { useEffect } from 'react';

// Css
import './HomePage.css';

// Components
import Header from '../Header/Header';
import Landing from './Landing/Landing.js';

// Images
import portrait from '../../../assets/images/portrait.jpg';

// ====== DEFINITION ======

function HomePage () {
    
    // FUNCTIONS


    // LISTENERS


    // RENDER

    return (
    <div className='HomePage'>
        <Header />
        <main>
            <Landing />
        </main>
    </div>    
    );
}

// ====== EXPORTS ======

export {
    HomePage
}
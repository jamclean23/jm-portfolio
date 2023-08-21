// Main app


// ====== IMPORTS ======

// React
import React, { useEffect, createContext, useState, useRef } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage/HomePage.js';

// ====== GLOBAL VARS ======

const AppContext = createContext();


// ====== COMPONENT ======

function App (props) {

    //  VARIABLES

    const [hamburgerShown, setHamburgerShown] = useState(false);
    const appClickEvent = useRef();

    // LISTENERS

    window.addEventListener('animationend', animationEnd);


    // FUNCTIONS

    function animationEnd (event) {
        switch (event.animationName) {
            case 'hamburger-fade-out':
                setHamburgerShown(false);
                break;
            case 'hamburger-fade-in':
                setHamburgerShown(true);
                break;
        }

    }

    // RENDER

    return (
        <main className='App'>
            <AppContext.Provider value={{
                appClickEvent
                }}>
                <HashRouter>
                    <Routes>
                        <Route path='/' element={<HomePage/>}/>
                    </Routes>
                </HashRouter>
            </AppContext.Provider>
        </main>
    );
}


// ====== EXPORTS ======

export {
    App, AppContext
}
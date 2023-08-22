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
    const lastScrollValue = useRef(0);
    const [scrollDirection, setScrollDirection] = useState();

    // LISTENERS

    useEffect(() => {
        window.addEventListener('animationend', handleAnimationEnd);
        window.addEventListener('scroll', handleScroll);
    }, []);
    
    useEffect(() => {
        if (scrollDirection) {
            // console.log(scrollDirection);
        }
        }, [scrollDirection]);


    // FUNCTIONS

    function handleScroll (event) {
        if (window.scrollY > lastScrollValue.current) {
            handleScrollDown();
            setScrollDirection('down');
        } else if (window.scrollY < lastScrollValue.current) {
            handleScrollUp();
            setScrollDirection('up');
        }
        lastScrollValue.current = window.scrollY;
    }

    function handleScrollUp () {
        showHeader();
    }

    function showHeader () {
        const Header = document.querySelector('.Header');
        Header.classList.remove('hidden'); 
    }

    function handleScrollDown () {
        hideHeader();
    }

    function hideHeader () {
        const Header = document.querySelector('.Header');
        Header.classList.add('hidden'); 
    }

    function handleAnimationEnd (event) {
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
        <div className='App'>
            <AppContext.Provider value={{
                appClickEvent
                }}>
                <HashRouter>
                    <Routes>
                        <Route path='/' element={<HomePage/>}/>
                    </Routes>
                </HashRouter>
            </AppContext.Provider>
        </div>
    );
}


// ====== EXPORTS ======

export {
    App, AppContext
}
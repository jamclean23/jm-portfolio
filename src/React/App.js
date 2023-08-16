// Main app


// ====== IMPORTS ======

// React
import React, {useEffect, createContext} from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { HomePage }  from './components/HomePage.js';


// ====== GLOBAL VARS ======

const AppContext = createContext();


// ====== FUNCTIONS ======




// ====== COMPONENT ======

function App () {

    // RENDER

    return (
        <AppContext.Provider>
            <HashRouter>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                </Routes>
            </HashRouter>
        </AppContext.Provider>
    );
}


// ====== EXPORTS ======

export {
    App
}
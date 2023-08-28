// Entry point


// ====== IMPORTS ======

// Styling
import './styles.css';

// React
import React from 'react';
import { createRoot } from 'react-dom/client';

// Main React App
import { App } from './React/App.js';

// Initialize Css window dimensions updater
(() => {
    const root = document.querySelector(':root');

    root.style.setProperty('--window-width', document.body.clientWidth + 'px');
    window.addEventListener('resize', (event) => {
        root.style.setProperty('--window-width', document.body.clientWidth + 'px');
    });
})();

// ====== RENDER ======

const reactRoot = createRoot(document.querySelector('#root'));

reactRoot.render(<App />);
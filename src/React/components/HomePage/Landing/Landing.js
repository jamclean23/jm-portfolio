// Landing page component

// ====== IMPORTS ======

// React
import React, { useEffect, useState } from "react";

// Css
import './Landing.css';

// Images
import portrait from '../../../../assets/images/portrait.jpg';
import cssIcon from '../../../../assets/icons/css.png';
import electronIcon from '../../../../assets/icons/electron.png';
import firebaseIcon from '../../../../assets/icons/firebase.png';
import htmlIcon from '../../../../assets/icons/html.png';
import jsIcon from '../../../../assets/icons/javascript.png';
import nodeJsIcon from '../../../../assets/icons/nodejs.png';
import pythonIcon from '../../../../assets/icons/python.png';
import reactIcon from '../../../../assets/icons/react.png';
import webpackIcon from '../../../../assets/icons/webpack.png';


// ====== COMPONENT ======

function Landing () {

    // VARIABLES
    
    const [orbitIconOffsets, setOrbitIconsOffsets] = useState([]);


    // LISTENERS

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
    }, []);

    useEffect(() => {
        console.log(orbitIconOffsets);
    }, [orbitIconOffsets]);


    // FUNCTIONS
    
    function initIcons () {

        const iconsLayers = document.querySelector('.iconsLayer');
        const iconsLayersWidth = +getComputedStyle(iconsLayers).width.split('px')[0];

        let positionsArray = [];
        let diameter = iconsLayersWidth/2;

        for (let i = 0; i < 9; i++){
            let x = Math.sin((360/9*i) * (Math.PI/180))*diameter + iconsLayersWidth/2;
            let y = Math.cos((360/9*i) * (Math.PI/180))*diameter + iconsLayersWidth/2;
            positionsArray.push({
                top: x,
                left: y
            })
        }

        setOrbitIconsOffsets(positionsArray);
    }

    function handleIconsLayerLoad () {
        initIcons();
    }

    function handleWindowResize () {
        console.log('resizing');
        initIcons();
    }
    

    // RENDER
    return (
        <section className="Landing">
            <aside className="welcomeText">
                Hi, I'm Jesse McLean.
            </aside>
            <div className="imgWrapper">
                <img className='portrait' src={portrait} alt='A picture of Jesse McLean in thought'/>
                <div onLoad={handleIconsLayerLoad} className="iconsLayer">
                    <img 
                        className="orbitIcon" 
                        style={{
                            top: orbitIconOffsets.length ? orbitIconOffsets[0].top + 'px' : '0',
                            left: orbitIconOffsets.length ? orbitIconOffsets[0].left + 'px' : '0'
                        }} 
                        src={cssIcon} 
                        alt='css icon'
                        />
                    <img 
                        className="orbitIcon" 
                        style={{
                            top: orbitIconOffsets.length ? orbitIconOffsets[1].top + 'px' : '0',
                            left: orbitIconOffsets.length ? orbitIconOffsets[1].left + 'px' : '0'
                        }} 
                        src={electronIcon} 
                        alt='electron icon'
                    />
                    <img 
                        className="orbitIcon" 
                        style={{
                            top: orbitIconOffsets.length ? orbitIconOffsets[2].top + 'px' : '0',
                            left: orbitIconOffsets.length ? orbitIconOffsets[2].left + 'px' : '0'
                        }} 
                        src={firebaseIcon} 
                        alt='firebase icon'
                    />
                    <img 
                        className="orbitIcon" 
                        style={{
                            top: orbitIconOffsets.length ? orbitIconOffsets[3].top + 'px' : '0',
                            left: orbitIconOffsets.length ? orbitIconOffsets[3].left + 'px' : '0'
                        }} 
                        src={htmlIcon} 
                        alt='html icon'
                    />
                    <img 
                        className="orbitIcon" 
                        style={{
                            top: orbitIconOffsets.length ? orbitIconOffsets[4].top + 'px' : '0',
                            left: orbitIconOffsets.length ? orbitIconOffsets[4].left + 'px' : '0'
                        }} 
                        src={jsIcon} 
                        alt='javascript icon'
                    />
                    <img 
                        className="orbitIcon" 
                        style={{
                            top: orbitIconOffsets.length ? orbitIconOffsets[5].top + 'px' : '0',
                            left: orbitIconOffsets.length ? orbitIconOffsets[5].left + 'px' : '0'
                        }} 
                        src={nodeJsIcon} 
                        alt='nodejs icon'
                    />
                    <img 
                        className="orbitIcon" 
                        style={{
                            top: orbitIconOffsets.length ? orbitIconOffsets[6].top + 'px' : '0',
                            left: orbitIconOffsets.length ? orbitIconOffsets[6].left + 'px' : '0'
                        }} 
                        src={pythonIcon} 
                        alt='python icon'
                    />
                    <img 
                        className="orbitIcon" 
                        style={{
                            top: orbitIconOffsets.length ? orbitIconOffsets[7].top + 'px' : '0',
                            left: orbitIconOffsets.length ? orbitIconOffsets[7].left + 'px' : '0'
                        }} 
                        src={reactIcon} 
                        alt='react icon'
                    />
                    <img 
                        className="orbitIcon" 
                        style={{
                            top: orbitIconOffsets.length ? orbitIconOffsets[8].top + 'px' : '0',
                            left: orbitIconOffsets.length ? orbitIconOffsets[8].left + 'px' : '0'
                        }} 
                        src={webpackIcon} 
                        alt='webpack icon'
                    />
                </div>
            </div>
            <aside className="aboutText">
                I'm a web developer with a passion for learning and exploration.
            </aside>
        </section>
    );
}


// ====== EXPORTS ======

export default Landing;
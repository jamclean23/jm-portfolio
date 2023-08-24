// Landing page component

// ====== IMPORTS ======

// React
import React, { useEffect, useState, useRef } from "react";

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
    const [nameContents, setNameContents] = useState('');

    const name = 'Jesse McLean'

    const iconsLayerLoadCount = useRef(0);


    // LISTENERS

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
    }, []);


    // FUNCTIONS
    
    function initIcons () {

        const iconsLayers = document.querySelector('.iconsLayer');
        const iconsLayersWidth = +getComputedStyle(iconsLayers).width.split('px')[0];

        const portrait = document.querySelector('.portrait');
        const portraitHeight = +getComputedStyle(portrait).height.split('px')[0];

        let positionsArray = [];

        let diameterOffset = 50;

        if (window.innerWidth > 1500) {
            diameterOffset += 50;
        }

        if (window.innerWidth > 2550) {
            diameterOffset += 50;
        }

        let diameter = portraitHeight/2 + diameterOffset;

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

    async function typeName () {
        console.log('typing name');
        await typeNextLetter();

        function typeNextLetter (iterator = 0) {
            return new Promise((resolve) => {
                setTimeout(timeDone, (Math.random()*300) + 100);

                async function timeDone () {
                    console.log(name[iterator]);
                    setNameContents((oldContents) => oldContents + name[iterator]);
                    if (iterator < name.length -1) {
                        await typeNextLetter(iterator + 1);
                        resolve();
                    } else {
                        const typeCursor = document.querySelector('.typeCursor');
                        typeCursor.classList.remove('animating');
                        resolve();
                    }
                }
            });
        }
    }

    async function changeOpacityAfterDelay (cssClass, newOpacityPercent, delay = 500) {

        await (() => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const element = document.querySelector('.' + cssClass);
                    element.style.opacity = newOpacityPercent;
                    resolve();
                }, delay)
            });
        })()

    }   

    async function addClassAfterDelay (classOfElement, newClass, delay = 500) {

        await (() => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const element = document.querySelector('.' + classOfElement);
                    element.classList.add(newClass);
                    resolve()
                }, delay);
            });
        })()

    }

    function handleIconsLayerLoad () {
        if (!iconsLayerLoadCount.current) {
            iconsLayerLoadCount.current = 1
            console.log('icons layer loaded');
            initIcons();
            changeOpacityAfterDelay('iconsLayer', '100%', 1000);
            addClassAfterDelay('typeCursor', 'animating', 1000);
            addClassAfterDelay('aboutText', 'animating', 3000);
            typeName();
        }

    }

    function handleWindowResize () {
        initIcons();
    }
    
    function handlePortraitLoad () {
        changeOpacityAfterDelay('portrait', '100%', 100);
    }

    // RENDER
    return (
        <section className="Landing">
            <aside className="nameAside">
                <p className="name">
                    {nameContents}
                    <span className="typeCursor">|</span>
                </p>
            </aside>
            <div className="imgWrapper">
                <img className='portrait' onLoad={handlePortraitLoad} src={portrait} alt='A picture of Jesse McLean in thought'/>
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
            <aside className="aboutAside">
                <p className="aboutText">
                    A web developer with a passion for learning and exploration.
                </p>
            </aside>
        </section>
    );
}


// ====== EXPORTS ======

export default Landing;
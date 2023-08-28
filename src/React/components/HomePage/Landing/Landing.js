// Landing page component

// ====== IMPORTS ======

// React
import React, { useEffect, useState, useRef } from "react";

// Css
import './Landing.css';

// Images
import portrait from '../../../../assets/images/portrait.jpg';
import cssIcon from '../../../../assets/icons/css.png';
import electronIcon from '../../../../assets/icons/electron_white.png';
import firebaseIcon from '../../../../assets/icons/firebase.png';
import htmlIcon from '../../../../assets/icons/html.png';
import jsIcon from '../../../../assets/icons/javascript.png';
import nodeJsIcon from '../../../../assets/icons/nodejs_white.png';
import pythonIcon from '../../../../assets/icons/python.png';
import reactIcon from '../../../../assets/icons/react.png';
import webpackIcon from '../../../../assets/icons/webpack_white.png';


// ====== COMPONENT ======

function Landing () {

    // VARIABLES
    
    const [orbitIconOffsets, setOrbitIconsOffsets] = useState([]);
    const [firstNameContents, setFirstNameContents] = useState('');
    const [lastNameContents, setLastNameContents] = useState('');
    const mouseX = useRef(0);
    const mouseY = useRef(0);

    const firstName = 'Jesse ';
    const lastName = 'McLean';

    const iconsLayerLoadCount = useRef(0);


    // LISTENERS

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        window.addEventListener('mousemove', handleMouseMove);

        updateOrbitIcons();
    }, []);


    // FUNCTIONS
    
    function updateOrbitIcons() {

        const icons = document.querySelectorAll('.iconImg');


        icons.forEach((icon) => {
            const iconRect = icon.getBoundingClientRect();
            const mouseOffsetX = Math.floor(mouseX.current - (iconRect.x + (iconRect.width/2)));
            const mouseOffsetY = Math.floor(mouseY.current - (iconRect.y + (iconRect.height/2)));
            const rotateDegreesObj = scaleMouseOffsetsToDegrees(mouseOffsetX, mouseOffsetY, 30);

            icon.style.transform = `perspective(25px) rotateY(${rotateDegreesObj.x}deg) rotateX(${-rotateDegreesObj.y}deg)`;
            
        });

        requestAnimationFrame(updateOrbitIcons);

        function scaleMouseOffsetsToDegrees (mouseOffsetX, mouseOffsetY, maxDegrees = 20) {
            if (mouseOffsetX > window.innerWidth/2) {
                mouseOffsetX = window.innerWidth/2;
            } else if (mouseOffsetX < -window.innerWidth/2) {
                mouseOffsetX = -window.innerWidth/2;
            }

            if (mouseOffsetY > window.innerHeight/2) {
                mouseOffsetY = window.innerHeight/2;
            } else if (mouseOffsetY < -window.innerHeight/2) {
                mouseOffsetY = -window.innerHeight/2;
            }

            return {
                x: (mouseOffsetX / (window.innerWidth/2)) * maxDegrees,
                y: (mouseOffsetY / (window.innerHeight/2)) * maxDegrees
            };
        }
    }

    function handleMouseMove (event) {
        mouseX.current = event.clientX;
        mouseY.current = event.clientY;
    }

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

    async function typeWord (word, stateSetterFirst, stateSetterSecond) {

        const typeCursor = document.querySelector('.typeCursor');
        typeCursor.classList.add('animating');
        await typeNextLetter(word, stateSetterFirst);

        typeCursor.classList.add('animating');
        await typeNextLetter(lastName, stateSetterSecond);

        const firstName = document.querySelector('.firstName');
        firstName.classList.add('done');

        

        function typeNextLetter (word, stateSetter, iterator = 0) {
            return new Promise((resolve) => {
                setTimeout(timeDone, (Math.random()*300) + 100);

                async function timeDone () {
                    stateSetter((oldContents) => oldContents + word[iterator]);
                    if (iterator < word.length -1) {
                        await typeNextLetter(word, stateSetter, iterator + 1);
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
            initIcons();
            typeWord(firstName, setFirstNameContents, setLastNameContents);
            changeOpacityAfterDelay('iconsLayer', '100%', 1000);
            addClassAfterDelay('aboutText', 'animating', 3000);
        }

    }

    function handleWindowResize () {
        initIcons();
    }
    
    function handlePortraitLoad () {
        initIcons();
        changeOpacityAfterDelay('portrait', '100%', 100);
    }

    // RENDER
    return (
        <section className="Landing">
            <aside className="nameAside">
                <p className="name">
                    <span className="firstName">
                        {firstNameContents}
                    </span>
                    
                    <span className="lastName">
                        {lastNameContents}
                    </span>
                    <span className="typeCursor">|</span>
                </p>
            </aside>
            <div className="imgWrapper">
                <img className='portrait' onLoad={handlePortraitLoad} src={portrait} alt='A picture of Jesse McLean in thought'/>
                <div onLoad={handleIconsLayerLoad} className="iconsLayer">
                    <div 
                        className="orbitIcon"
                        style={{
                            top: orbitIconOffsets.length ? orbitIconOffsets[0].top + 'px' : '0',
                            left: orbitIconOffsets.length ? orbitIconOffsets[0].left + 'px' : '0'
                        }} 
                    >
                        <img 
                            className="iconImg"
                            src={cssIcon} 
                            alt='css icon'
                        />
                    </div>
                    <div
                        className="orbitIcon" 
                        style={{
                            top: orbitIconOffsets.length ? orbitIconOffsets[1].top + 'px' : '0',
                            left: orbitIconOffsets.length ? orbitIconOffsets[1].left + 'px' : '0'
                        }}
                    >

                    <img 
                        className="iconImg"
                        src={electronIcon} 
                        alt='electron icon'
                        />
                    </div>

                    <div
                        className="orbitIcon" 
                        style={{
                            top: orbitIconOffsets.length ? orbitIconOffsets[2].top + 'px' : '0',
                            left: orbitIconOffsets.length ? orbitIconOffsets[2].left + 'px' : '0'
                        }}
                    >
                        <img 
                            className="iconImg" 
                            src={firebaseIcon} 
                            alt='firebase icon'
                        />
                    </div>

                    <div
                        className="orbitIcon" 
                        style={{
                            top: orbitIconOffsets.length ? orbitIconOffsets[3].top + 'px' : '0',
                            left: orbitIconOffsets.length ? orbitIconOffsets[3].left + 'px' : '0'
                        }}
                    >
                        <img 
                            className="iconImg" 
                            src={htmlIcon} 
                            alt='html icon'
                        />
                    </div>

                    <div
                        className="orbitIcon" 
                        style={{
                            top: orbitIconOffsets.length ? orbitIconOffsets[4].top + 'px' : '0',
                            left: orbitIconOffsets.length ? orbitIconOffsets[4].left + 'px' : '0'
                        }}
                    >
                        <img 
                            className="iconImg" 
                            src={jsIcon} 
                            alt='javascript icon'
                        />
                    </div>

                    <div
                        className="orbitIcon" 
                        style={{
                            top: orbitIconOffsets.length ? orbitIconOffsets[5].top + 'px' : '0',
                            left: orbitIconOffsets.length ? orbitIconOffsets[5].left + 'px' : '0'
                        }}
                    >
                        <img 
                            className="iconImg" 
                            src={nodeJsIcon} 
                            alt='nodejs icon'
                        />
                    </div>

                    
                    <div
                        className="orbitIcon" 
                        style={{
                            top: orbitIconOffsets.length ? orbitIconOffsets[6].top + 'px' : '0',
                            left: orbitIconOffsets.length ? orbitIconOffsets[6].left + 'px' : '0'
                        }}
                    >
                        <img 
                            className="iconImg" 
                            src={pythonIcon} 
                            alt='python icon'
                        />
                    </div>


                    <div
                        className="orbitIcon" 
                        style={{
                            top: orbitIconOffsets.length ? orbitIconOffsets[7].top + 'px' : '0',
                            left: orbitIconOffsets.length ? orbitIconOffsets[7].left + 'px' : '0'
                        }}
                    >
                        <img 
                            className="iconImg" 
                            src={reactIcon} 
                            alt='react icon'
                        />
                    </div>

                    <div
                        className="orbitIcon" 
                        style={{
                            top: orbitIconOffsets.length ? orbitIconOffsets[8].top + 'px' : '0',
                            left: orbitIconOffsets.length ? orbitIconOffsets[8].left + 'px' : '0'
                        }}
                    >
                    <img 
                        className="iconImg" 
                        src={webpackIcon} 
                        alt='webpack icon'
                    />
                    </div>
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
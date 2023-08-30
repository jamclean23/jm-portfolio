// Component for displaying individual project

// ====== IMPORTS ======

// React
import React, { useEffect, useContext, useState, useRef } from "react";

// Css
import './Project.css';

// Context
import { AppContext } from "../../../../App";


// ====== COMPONENT ======

function Project (props) {

    // Variables

    const wasAnimating = useRef(false);
    const convertRemToPx = useContext(AppContext).convertRemToPx;

    // Listeners

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

    }, []);


    // Function

    function handleResize () {
        animateImages();
    }

    function handleScroll (event) {
        animateImages();
    }

    function animateImages () {

        const Project = document.querySelector('.Project.' + props.project);
        const leftImgWrapper = document.querySelector('.Project.' + props.project + ' .leftImgWrapper');
        const rightImgWrapper = document.querySelector('.Project.' + props.project + ' .rightImgWrapper');
        
        if (window.innerWidth > 950) {

            
            let offSetY = -(Project.offsetTop - window.scrollY);
            let range = 400;
            let threshold = 200;
            let ratioOffset = 0;
            
            if (offSetY < -threshold) {
                ratioOffset = (offSetY + threshold) / range;
            }
                        
            leftImgWrapper.style.transform = `perspective(2000px) translate(${ratioOffset*100}%, 0) rotateY(${-ratioOffset * .1}turn)`;
            leftImgWrapper.style.opacity = 1 - Math.abs(ratioOffset);
            
            rightImgWrapper.style.transform = `perspective(2000px) translate(${-ratioOffset*100}%, 0) rotateY(${ratioOffset * .1}turn)`;
            rightImgWrapper.style.opacity = 1 - Math.abs(ratioOffset);

            wasAnimating.current = true;
        } else {
            if (wasAnimating.current) {
                resetImageAnimation();
            }
        } 

            
            
    }

    function resetImageAnimation () {   

        const leftImgWrapper = document.querySelector('.Project.' + props.project + ' .leftImgWrapper');
        const rightImgWrapper = document.querySelector('.Project.' + props.project + ' .rightImgWrapper');

        leftImgWrapper.style.transform = '';
        leftImgWrapper.style.opacity = '';
        
        rightImgWrapper.style.transform = '';
        rightImgWrapper.style.opacity = '';

        wasAnimating.current = false;
    }
        

    // Render

    return (
        <article className={"Project " + props.project}>

            <h3 className="projectHeader">
                {(() => {
                        switch(props.project) {
                            case 'idThatTree':
                                return 'Tree Id Quiz';
                            case 'wheresWaldo':
                                return 'Where\'s Waldo';
                            case 'whamazonLime':
                                return 'E-commerce Site';
                            case 'minecraftModInstaller':
                                return 'Windows Mod Installer';
                        }
                    })()
                }
            </h3>
            
            <div className="imgsWrapper">
                    <div className={"imgWrapper leftImgWrapper " + props.images[0].layout}>
                        <img src={props.images[0].src} className="leftImg"/>
                    </div>

                    <div className={"imgWrapper centerImgWrapper " + props.images[0].layout}>
                        <img src={props.images[1].src} className="centerImg"/>
                    </div>

                    <div className={"imgWrapper rightImgWrapper "  + props.images[0].layout}>
                        <img src={props.images[2].src} className="rightImg"/>
                    </div>
                    <button className="leftBtn">&lt;</button>
                    <button className="rightBtn">&gt;</button>

            </div>

        </article>
    );
}


// ====== COMPONENT ======

export default Project;
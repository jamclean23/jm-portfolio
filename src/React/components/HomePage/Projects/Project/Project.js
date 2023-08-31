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
    const [selectedImgIndex, setSelectedImgIndex] = useState(1);

    // Listeners

    // Did mount
    useEffect(() => {
        // Listeners
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        // Used for indicators
        updateImgIndex();
    }, []);


    // Function

    function updateImgIndex () {
        setSelectedImgIndex(getDisplayedImg().indexInArray);
    }

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
        
    function handleBtnClick (direction) {
        const imgsWrappersArray = getImgWrappersArray();
        const displayedImg = getDisplayedImg();
        const leftImg = document.querySelector('.Project.' + props.project + ' .imgWrapper.left');
        const rightImg = document.querySelector('.Project.' + props.project + ' .imgWrapper.right');


        if (imgsWrappersArray.length > 1 && displayedImg.imgWrapper) {
            

            if (direction === 'left') {

                scrollCarouselLeft(displayedImg, leftImg, rightImg);

            } else if (direction === 'right') {

                scrollCarouselRight(displayedImg, leftImg, rightImg);

            }
            
            updateImgIndex();
            
        }

        
    }

    function scrollCarouselLeft (displayedImg, leftImg, rightImg) {
        
                // Centered to left
                displayedImg.imgWrapper.classList.add('left');
                displayedImg.imgWrapper.classList.remove('center');

                // No transition for the crossing wrapper
                const lastAcross = document.querySelector('.Project.'+ props.project +' .imgWrapper.across');
                if (lastAcross) {
                    lastAcross.classList.remove('across');
                }

                // Left to right
                leftImg.classList.remove('left');
                leftImg.classList.add('across');
                leftImg.classList.add('right');

                // Right to center
                rightImg.classList.remove('right');
                rightImg.classList.add('center');
    }

    function scrollCarouselRight (displayedImg, leftImg, rightImg) {
                    // Centered to right
                    displayedImg.imgWrapper.classList.add('right');
                    displayedImg.imgWrapper.classList.remove('center');
    
                    // No transition for the crossing wrapper
                    const lastAcross = document.querySelector('.Project.' + props.project +  ' .imgWrapper.across');
                    if (lastAcross) {
                        lastAcross.classList.remove('across');
                    }
    
                    // Right to left
                    rightImg.classList.remove('right');
                    rightImg.classList.add('across');
                    rightImg.classList.add('left');
    
                    // Left to center
                    leftImg.classList.remove('left');
                    leftImg.classList.add('center');
    }

    function getDisplayedImg () {
        const imgWrappers = getImgWrappersArray();

        let displayedImg;
        let displayedImgIndex;

        imgWrappers.forEach((imgWrapper, index) => {
            if (imgWrapper.classList.contains('center')) {
                displayedImg = imgWrapper;
                displayedImgIndex = index;
            }
        });

        return {
            imgWrapper: displayedImg,
            indexInArray: displayedImgIndex
        };
    }

    function getImgWrappersArray () {
        return document.querySelectorAll('.Project.' + props.project + ' .imgWrapper');
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
                    <div className={"imgWrapper leftImgWrapper center " + props.images[0].layout}>
                        <img src={props.images[0].src} alt='Image of application' className="leftImg"/>
                    </div>

                    <div className={"imgWrapper centerImgWrapper right " + props.images[0].layout}>
                        <img src={props.images[1].src} alt='Image of application' className="centerImg"/>
                    </div>

                    <div className={"imgWrapper rightImgWrapper left "  + props.images[0].layout}>
                        <img src={props.images[2].src} alt='Image of application' className="rightImg"/>
                    </div>
                    <button onClick={handleBtnClick.bind(this, 'left')} className="leftBtn">&lt;</button>
                    <button onClick={handleBtnClick.bind(this, 'right')} className="rightBtn">&gt;</button>
            </div>

            <div className="indicatorWrapper">
                <div className="indicatorBox">

                    <button 
                        className={"indicator" + (selectedImgIndex === 1 ? ' selected' : '')}
                    ></button>

                    <button
                        className={"indicator" + (selectedImgIndex === 0 ? ' selected' : '')}
                    ></button>

                    <button 
                        className={"indicator" + (selectedImgIndex === 2 ? ' selected' : '')}
                    ></button>

                </div>
            </div>

        </article>
    );
}


// ====== COMPONENT ======

export default Project;
// Component for displaying individual project

// ====== IMPORTS ======

// React
import React, { useEffect, useContext } from "react";

// Css
import './Project.css';

// Context
import { AppContext } from "../../../../App";


// ====== COMPONENT ======

function Project (props) {

    // Variables

    const convertRemToPx = useContext(AppContext).convertRemToPx;

    // Listeners

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, []);


    // Function

    function handleScroll (event) {
        console.clear();
        console.log('Current Scroll:', window.scrollY);

        const Project = document.querySelector('.Project.' + props.project);
        console.log('Project Position:', Project.offsetTop);

        animateImages();
    }

    function animateImages () {
        const Project = document.querySelector('.Project.' + props.project);
        const leftImgWrapper = document.querySelector('.Project.' + props.project + ' .leftImgWrapper');
        const rightImgWrapper = document.querySelector('.Project.' + props.project + ' .rightImgWrapper');
        
        let offSetY = -(Project.offsetTop - window.scrollY);
        let range = 400;
        let threshold = 200;
        let ratioOffset = 0;

        if (offSetY < -threshold) {
            ratioOffset = (offSetY + threshold) / range;
        }
        
        console.log('Offset Y: ', offSetY);

        console.log('Ratio offset: ', ratioOffset);

        leftImgWrapper.style.transform = `perspective(1000px) translate(${ratioOffset*100}%, 0) rotateY(${-ratioOffset * .1}turn)`;
        leftImgWrapper.style.opacity = 1 - Math.abs(ratioOffset);

        rightImgWrapper.style.transform = `perspective(2000px) translate(${-ratioOffset*100}%, 0) rotateY(${ratioOffset * .1}turn)`;
        rightImgWrapper.style.opacity = 1 - Math.abs(ratioOffset);



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
                    <div className="imgWrapper leftImgWrapper">
                        <img src={props.images[0]} className="leftImg"/>
                    </div>

                    <div className="imgWrapper centerImgWrapper">
                        <img src={props.images[1]} className="centerImg"/>
                    </div>

                    <div className="imgWrapper rightImgWrapper">
                        <img src={props.images[2]} className="rightImg"/>
                    </div>
            </div>

        </article>
    );
}


// ====== COMPONENT ======

export default Project;
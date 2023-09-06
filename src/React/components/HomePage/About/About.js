// About section component


// ====== IMPORTS ======

// React
import React, { useEffect } from "react";

// Css
import './About.css';

// Images
import workPic from '../../../../assets/images/setup.jpg';
import recPic from '../../../../assets/images/mountains.jpg';


// ====== COMPONENT ======

function About () {
    // Listeners

    // On mount
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, []);

    // Functions

    function handleScroll (event) {
        animateImgsOpacity();
    }   

    function animateImgsOpacity () {

        const AboutDom = document.querySelector('.About');
        const imgs = document.querySelectorAll('.About img');
        const THRESHOLD = 300;
        let offset = AboutDom.offsetTop - window.scrollY;

        // Clamp to range
        if (offset < 0) {
            offset = 0;
        }

        if (offset > THRESHOLD) {
            offset = THRESHOLD;
        }

        // Convert to ratio and invert
        offset = 1 - (offset / THRESHOLD);


        imgs.forEach((img) => {
            img.style.opacity = offset;
        });
    }

    // RENDER

    return (
        <section className="About">
            <h2>// About</h2>
            <div className="contentWrapper">

                <div className="imgWrapper left">
                    <img src={workPic}/>
                </div>

                <article className="text">
                    <p>Hi, I'm <span className="accent">Jesse McLean.</span></p>
                    <br/>
                    <p>I'm a <span className="accent">fullstack developer</span> who enjoys finding creative solutions to complex problems.</p>
                    <br/>
                    <p>When I'm not building <span className="accent">websites</span> or <span className="accent">desktop apps</span>, you'll find me exploring the Blue Ridge mountains, or at home with a good book.</p>
                </article>

                <div className="imgWrapper right">
                    <img src={recPic}/>
                </div>
            </div>
        </section>
    );
}


// ====== EXPORTS ======

export default About;
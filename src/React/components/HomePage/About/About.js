// About section component


// ====== IMPORTS ======

// React
import React from "react";

// Css
import './About.css';

// Images
import workPic from '../../../../assets/images/setup.jpg';
import recPic from '../../../../assets/images/mountains.jpg';


// ====== COMPONENT ======

function About () {


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
// Landing page component

// ====== IMPORTS ======

// React
import React from "react";

// Css
import './Landing.css';

// Images
import portrait from '../../../../assets/images/portrait.jpg';


// ====== COMPONENT ======

function Landing () {
    // RENDER
    return (
        <section className="Landing">
            <aside className="welcomeText">
                Hi, I'm Jesse McLean
            </aside>
            <div className="imgWrapper">
                <img className='portrait' src={portrait} alt='A picture of Jesse McLean in thought'/>
            </div>
            <aside className="aboutText">
                A web developer with a passion for learning and exploration.
            </aside>
        </section>
    );
}


// ====== EXPORTS ======

export default Landing;
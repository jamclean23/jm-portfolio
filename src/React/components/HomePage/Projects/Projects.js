// Component for displaying projects pages


// ====== IMPORTS ======

// React
import React from "react";

// Css
import './Projects.css';

// Components
import Project from "./Project/Project.js";

// ====== COMPONENT ======

function Projects () {
    // RENDER
    return (<section className="Projects">
        <h2>// Projects</h2>
        <Project project='idThatTree' />
        <Project project='wheresWaldo' />
        <Project project='whamazonLime' />
        <Project project='minecraftModInstaller' />
    </section>);
}


// ====== EXPORTS ======

export default Projects;
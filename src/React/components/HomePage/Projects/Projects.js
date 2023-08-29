// Component for displaying projects pages


// ====== IMPORTS ======

// React
import React from "react";

// Css
import './Projects.css';

// Components
import Project from "./Project/Project.js";

// Images
import treeImg1 from '../../../../assets/images/id_that_tree/treeImg1.png';
import treeImg2 from '../../../../assets/images/id_that_tree/treeImg2.png';
import treeImg3 from '../../../../assets/images/id_that_tree/treeImg3.png';

import waldoImg1 from '../../../../assets/images/wheres-waldo/wheresWaldo1.png';
import waldoImg2 from '../../../../assets/images/wheres-waldo/wheresWaldo3.png';
import waldoImg3 from '../../../../assets/images/wheres-waldo/wheresWaldo2.png';

// ====== COMPONENT ======

function Projects () {
    // RENDER
    return (<section className="Projects">
        <h2>// Projects</h2>
        <Project project='idThatTree' images={[treeImg1, treeImg2, treeImg3]} imageOrientation={'mobile'}/>
        <Project project='wheresWaldo' images={[waldoImg1, waldoImg2, waldoImg3]} imageOrientation={'mobile'}/>
        <Project project='whamazonLime' images={[treeImg1, treeImg2, treeImg3]} imageOrientation={'desktop'}/>
        <Project project='minecraftModInstaller' images={[treeImg1, treeImg2, treeImg3]} imageOrientation={'desktop'}/>
    </section>);
}


// ====== EXPORTS ======

export default Projects;
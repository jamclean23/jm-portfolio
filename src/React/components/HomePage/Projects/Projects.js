// Component for displaying projects pages


// ====== IMPORTS ======

// React
import React from "react";

// Css
import './Projects.css';

// Components
import Project from "./Project/Project.js";

// Images
import treeImg1 from '../../../../assets/images/id-that-tree/treeImg1.png';
import treeImg2 from '../../../../assets/images/id-that-tree/treeImg2.png';
import treeImg3 from '../../../../assets/images/id-that-tree/treeImg3.png';

import waldoImg1 from '../../../../assets/images/wheres-waldo/wheresWaldo1.png';
import waldoImg2 from '../../../../assets/images/wheres-waldo/wheresWaldo3.png';
import waldoImg3 from '../../../../assets/images/wheres-waldo/wheresWaldo2.png';

import limeImg1 from '../../../../assets/images/whamazon-lime/limeImg1.png';
import limeImg2 from '../../../../assets/images/whamazon-lime/limeImg2.png';
import limeImg3 from '../../../../assets/images/whamazon-lime/limeImg3.png';

import minecraftImg1 from '../../../../assets/images/minecraft-mod-installer/minecraftImg1.png';
import minecraftImg2 from '../../../../assets/images/minecraft-mod-installer/minecraftImg2.png';
import minecraftImg3 from '../../../../assets/images/minecraft-mod-installer/minecraftImg3.png';



// ====== COMPONENT ======

function Projects () {
    // RENDER
    return (<section className="Projects">

        <h2>// Projects</h2>

        <Project 
            project='idThatTree' 
            images={[
                        {
                            src: treeImg1, 
                            layout: 'mobile'
                        }, 
                        {
                            src: treeImg2, 
                            layout: 'mobile'
                        }, 
                        {
                            src: treeImg3, 
                            layout: 'mobile'
                        }
                    ]} 
        />

        <Project 
            project='wheresWaldo' 
            images={[
                        {
                            src: waldoImg1,
                            layout: 'mobile'
                        },
                        {
                            src: waldoImg2,
                            layout: 'mobile' 
                        },
                        {
                            src: waldoImg3,
                            layout: 'mobile'
                        }
                    ]}
        />

        <Project 
            project='whamazonLime' 
            mode={'desktopImgs'}
            images={[
                        {
                            src: limeImg1,
                            layout: 'desktop'
                        },
                        { 
                            src: limeImg2,
                            layout: 'desktop'
                        }, 
                        {
                            src: limeImg3,
                            layout: 'desktop'
                        }
                    ]}
        />

        <Project 
            project='minecraftModInstaller' 
            mode={'desktopImgs'}
            images={[
                {
                    src: minecraftImg1,
                    layout: 'desktop'
                }, 
                {
                    src: minecraftImg2, 
                    layout: 'desktop'
                },
                {
                    src: minecraftImg3,
                    layout: 'desktop'
                }
            ]}
        />
    </section>);
}


// ====== EXPORTS ======

export default Projects;
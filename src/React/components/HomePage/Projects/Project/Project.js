// Component for displaying individual project

// ====== IMPORTS ======

// React
import React from "react";

// Css
import './Project.css';


// ====== COMPONENT ======

function Project (props) {
    // Render

    return (
        <article className="Project">
            <h3 className="projectHeader">
                {(() => {
                        switch(props.project) {
                            case 'idThatTree':
                                return 'Tree Id App';
                            case 'wheresWaldo':
                                return 'Where\'s Waldo';
                            case 'whamazonLime':
                                return 'E-commerce Site';
                            case 'minecraftModInstaller':
                                return 'Pc Mod Installer';
                        }
                    })()
                }
            </h3>            
        </article>
    );
}


// ====== COMPONENT ======

export default Project;
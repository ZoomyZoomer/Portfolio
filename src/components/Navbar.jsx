import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHatWizard } from '@fortawesome/free-solid-svg-icons'


function Navbar() {
    

  return (

        <div className="nav_wrapper">

            <section id="navflex" className="navflex">
                
                <div className="navleftflex">
                    <FontAwesomeIcon id="img" icon={faHatWizard} size = '4x' color = '#EEEEEE'/>
                    <a href="#Home"> KAMIL WISNIEWSKI </a>
                </div>

                <div className="middleflex">

                </div>

                <div className="navrightflex">

                    <div id="aboutBlock">
                        <a id="navAbout" href="#About">ABOUT</a>
                    </div>
                    <div id="goalsBlock">
                        <a id="navGoals" href="#Goals">GOALS</a>
                    </div>
                    <div id="experienceBlock">
                        <a id="navExperience" href="#Experience">EXPERIENCE</a>
                    </div>
                    <div id="projectsBlock">
                        <a id="navProjects" href="#Projects">PROJECTS</a>
                    </div>
                    <div id="contactBlock">
                         <a id="navContact" href="#Contact">CONTACT</a>
                    </div>
                    
                    
                    
                    
                    
                </div>
                
            </section>

        </div>

  )
}

export default Navbar
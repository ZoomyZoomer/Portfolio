import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHatWizard } from '@fortawesome/free-solid-svg-icons'


function Navbar() {
    

  return (

        <div className="nav_wrapper">

            <section className="navflex">
                
                <div className="navleftflex">
                    <FontAwesomeIcon id="img" icon={faHatWizard} size = '4x' color = '#EEEEEE'/>
                    <a href="#Home"> KAMIL WISNIEWSKI </a>
                </div>

                <div className="middleflex">

                </div>

                <div className="navrightflex">
                    <a id="navAbout" href="#About">ABOUT</a>
                    <a id="navGoals" href="#Goals">GOALS</a>
                    <a id="navExperience" href="#Experience">EXPERIENCE</a>
                    <a id="navProjects" href="#Projects">PROJECTS</a>
                    <a id="navContact" href="#Contact">CONTACT</a>
                </div>
                
            </section>

        </div>

  )
}

export default Navbar
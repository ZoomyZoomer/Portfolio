import React from 'react';


function Navbar() {
    

  return (

        <div className="nav_wrapper">

            <section className="navflex">
                
                <div className="navleftflex">
                    <img src="icon.png"></img>
                    <a href="#Home"> KAMIL WISNIEWSKI </a>
                </div>

                <div className="middleflex">

                </div>

                <div className="navrightflex">
                    <a id="navAbout" href="#About">ABOUT</a>
                    <a id="navGoals" href="#Goals">GOALS</a>
                    <a id="navExperience" href="#Experience">EXPERIENCE</a>
                    <a id="navProjects" href="#Projects">PROJECTS</a>
                    <img src="info.png"></img>
                </div>
                
            </section>

        </div>

  )
}

export default Navbar
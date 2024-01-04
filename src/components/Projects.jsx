import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function Display({setShowDis}){

  document.getElementById("entireContainer").classList.add("shadow");
  document.getElementById("projectContainer").classList.add("shadow");

  document.body.style.overflow = "hidden";

  function closeAll(){
    setShowDis(false);
    document.body.style.overflow = "visible";
    document.getElementById("entireContainer").classList.remove("shadow");
    document.getElementById("projectContainer").classList.remove("shadow");
  }
  

  return (
    <div id="displayBox" className="displayBox">
      <div className="displayHeadingGrid">
          <div className="miniHeadingGrid">
            <p>Better Malloc</p>
            <FontAwesomeIcon onClick={() => closeAll()} id="XIcon" icon={faXmark} color = '#b1b1b1' size="lg"/>
          </div>
          
          <h6>C Program</h6>
      </div>
      

    </div>
  )
}


function Projects() {

  const [showDis, setShowDis] = useState(false);



  return (
    <div id="based">
      {showDis && <Display setShowDis={setShowDis}/> }
    <section id="projectContainer" className="projectContainer">

        <div className="projectHeadingFlex">
            <p>SOME OF MY PROJECTS</p>
        </div>
        <div className="projectHeadingFlex">
            <a className="shake" href="https://github.com/ZoomyZoomer">&#40;more soon&#41;</a>
        </div>

        <div className="projectGrid">

            <div className="project">
                <img id='y'onClick={() => setShowDis(true)}src="coding2_icon.png"></img>
                <h1 id='y'onClick={() => setShowDis(true)}>Better Malloc</h1>
            </div>
            <div className="project">
                <img id='y'onClick={() => setShowDis(true)}src="coding2_icon.png"></img>
                <h1 id='y'onClick={() => setShowDis(true)}>Linux Shell</h1>
            </div>
            <div className="project">
                <img id='y'onClick={() => setShowDis(true)}src="coding2_icon.png"></img>
                <h1 id='y'onClick={() => setShowDis(true)}>Directory File Scanner</h1>
            </div>
            <div className="projectTemp"> 
            </div>
            <div className="project">
                <img id='y'onClick={() => setShowDis(true)}src="bracket_icon.png"></img>
                <h1 id='y'onClick={() => setShowDis(true)}>Pathfinder</h1>
            </div>

        </div>
    </section>
    </div>
  )
}


/*<div onMouseEnter={() => handleHover(true)} onMouseLeave={() => handleHover(false)} className="projectFrame">
                  <div id="Wrapper1" className="textWrapper">
                    <p id='t1' className="novis">BetterMalloc</p>
                    <img id='i1' className="novis"src="coding_icon.png"></img>
                  </div>
                  
                </div>*/

export default Projects;
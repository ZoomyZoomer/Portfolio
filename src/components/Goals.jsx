import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSuitcase } from '@fortawesome/free-solid-svg-icons'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'

function Goals() {

  const toggleClass = () => {
    var element2 = document.getElementById("present1");
    element2.parentNode.removeChild(element2);

    var element3 = document.getElementById("hold1");
    element3.parentNode.removeChild(element3);

    var element = document.getElementById("circle1");
    element.classList.add("transparent");
  };


  const toggleClass2 = () => {
    var element2 = document.getElementById("present2");
    element2.parentNode.removeChild(element2);

    var element3 = document.getElementById("hold2");
    element3.parentNode.removeChild(element3);

    var element = document.getElementById("circle2");
    element.classList.add("transparent");
  };


  const toggleClass3 = () => {
    var element2 = document.getElementById("present3");
    element2.parentNode.removeChild(element2);

    var element3 = document.getElementById("hold3");
    element3.parentNode.removeChild(element3);

    var element = document.getElementById("circle3");
    element.classList.add("transparent");
  };


  return (
    <section className="goalsWrapper">
      
        <div className="goalsHeadingFlex">
              <p>What I'm looking to accomplish</p>
          </div>
        <div className="goalsImageFlex">

            <div className="circle"><FontAwesomeIcon id="img" icon={faSuitcase} size = '4x' color = '#333'/></div>
            <div className="circle"><FontAwesomeIcon id="img" icon={faLaptopCode} size = '4x' color = '#333'/></div>
            <div className="circle"><FontAwesomeIcon id="img" icon={faCode} size = '4x' color = '#333'/></div>
          
          
        </div>
      <div className="wrap">

          <div className="goalsTitle">
              <div>
                <h4>CAREER</h4>
                </div>
              <div>
                <h4>INDUSTRY</h4>
                </div>
              <div>
                <h4>EXPERIENCE</h4>
                </div>
          </div>

          <div className="desc">

              <desc> Having a good career isn't just a job that pays well.  It's about the journey
                that takes you there, built on a foundation  of a desire for discovery and knowledge.
                I aspire to take on a journey of my own in the realm of Software Engineering where every step I take
                is in pursuit to better myself.
              </desc>

              <desc>Industrial practices greatly differ from those that you learn in University classes.
                Whether it's keeping up with trendy frameworks or designing applications with full-stack technology, 
                I'm eager to learn what it takes to keep up in the modern tech-realm.
              </desc>

              <desc>Throughout my coursework and personal projects that I've persued over the years, 
                I've come to be familiar with various languages, libraries, and frameworks; however, I know 
                that there's a lot more out there. Whether it's Front-End or Back-End programming, I'm always eager 
                to learn about different components and more efficient programming techniques.
              </desc>

          </div>

      </div>

    </section>

/*

<div className="goalsSection">
  
  <desc>Having a good career isn't just a job that pays well.  It's about the journey
    that takes you there, built on a foundation  of a desire for discovery and knowledge.
    I aspire to take on a journey of my own in the realm of Software Engineering where every step I take
    is in pursuit to better myself.
  </desc>
</div>
<div className="goalsSection">
  
  
  <desc>Industrial practices greatly differ from those that you learn in University classes.
    Whether it's keeping up with trendy frameworks or designing applications with full-stack technology, 
    I'm eager to learn what it takes to keep up in the modern tech-realm.
  </desc>
</div>
<div className="goalsSection">
  
  
  <desc>Throughout my coursework and personal projects that I've persued over the years, 
    I've come to be familiar with various languages, libraries, and frameworks; however, I know 
    that there's a lot more out there. Whether it's Front-End or Back-End programming, I'm always eager 
    to learn about different components and more efficient programming techniques.


  </desc>*/
  )
}

export default Goals
import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUniversity } from '@fortawesome/free-solid-svg-icons'
import { faPaintBrush} from '@fortawesome/free-solid-svg-icons'
import { faGift} from '@fortawesome/free-solid-svg-icons'

function TLDR(){

   return (
          <div className="TLDRBigFlex">
            <div id="myFlex">
              <div id="TLDR" className='TLDRcontainer'>
                <p>TL;DR?</p>
                <div className="TLDRflex">
                    <div>
                    <FontAwesomeIcon icon={faUniversity} size = '4x' color = '#333'/>
                      <p>Rutgers Uni</p>
                    </div>
                    <div>
                    <FontAwesomeIcon icon={faPaintBrush} size = '4x' color = '#333'/>
                    <p>Digital Artist</p>
                    </div>
                </div>
              </div>
            </div>
            

          </div>
          
           )

}

function removePresent({setVisible}) {

  var element = document.getElementById("present");

    var ele = document.getElementById("present");
    ele.classList.remove("present");
    ele.classList.add("presentOpen");

    setTimeout(letAnimate, 1000);

      function letAnimate(){
        setVisible(true);
        element.parentNode.removeChild(element);
      }
      
      


}


function About() {

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.getElementById("aboutFlex").classList.add("fullOpacity"); // Add your animation class here
        }
      });
    });
    
    const element = document.getElementById("aboutParagraph");
    if (element) {
      observer.observe(element);
    }

    // Don't forget to disconnect the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);
 

  
  return (

    <section id="aboutFlex" className="aboutFlex">

        <div className="aboutGrid">

          <div>

            <h5 id="aboutHeader">A LITTLE BIT ABOUT ME</h5>
            <img id="pfpimage" src="pfp_circle.png"></img>
            <p id="aboutParagraph">Hey! My name is Kamil and I’m currently a third year student at <br></br> 
                <a href="https://www.rutgers.edu/">Rutgers-New Brunswick</a> pursuing a Bachelor’s degree in Computer Science.
                I’ve been developing a passion for both Front-End and Back-End design as I encounter new libraries and frameworks with every project I pursue. 
                I aspire towards a career that'll allow me to channel my curiosity of software development by contributing to redefining projects.
                <br></br>
                <br></br>
                Apart from coding, I like playing strategy games and making digital art :&#41;
            </p>
            <div className="presentContainer">
              <FontAwesomeIcon id="present" className="present" onClick={() => removePresent({setVisible})} icon={faGift} size = '4x' color = '#333'/>
            </div>
            {visible && <TLDR />}


          </div>

            

        </div>
        

    </section>

  )
}

export default About
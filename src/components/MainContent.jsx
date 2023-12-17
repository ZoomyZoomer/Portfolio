import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'


function MainContent() {

  const storeScroll = () => {
    document.documentElement.dataset.scroll = window.scrollY;
};

// Listen for new scroll events
document.addEventListener('scroll', storeScroll);

// Update scroll position for first time
storeScroll();

  return (

      <div className="main_container">

            <div className="mainText">
              <h1>HI, I'M KAMIL</h1>
              <p>Aspiring Software Engineer</p>
              <div>
              <a href="#About">
              <FontAwesomeIcon icon={faChevronDown} size = '3x' color = '#c7c7c7'/>
              </a>
              </div>
              
              
                

              
            </div> 

          <div className="welcome">


            <div className="welcome_dim">
            
            </div>

            
          </div>
          

      </div>

  )
}

export default MainContent
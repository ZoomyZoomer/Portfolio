import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'


function MainContent() {

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animateTopWelcome');
        }
      });
    });
    
    const element = document.getElementById("topWelcome");
    if (element) {
      observer.observe(element);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Second observer

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animateBottomWelcome');
        }
      });
    });
    
    const element = document.getElementById("bottomWelcome");
    if (element) {
      observer.observe(element);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Scroll

  const storeScroll = () => {
    document.documentElement.dataset.scroll = window.scrollY;
};

document.addEventListener('scroll', storeScroll);


storeScroll();

  return (

      <section className="main_container">

            <div className="mainText">
              <h1 id="topWelcome">HI, I'M KAMIL</h1>
              <p id="bottomWelcome">Aspiring Software Engineer</p>
              <div>
                <a href="#About">
                  <FontAwesomeIcon icon={faChevronDown} size = '3x' color = '#c7c7c7'/>
                </a>
              </div>
            
      
            </div> 

          <div className="welcome">


            <div className="welcome_dim"></div>

            
          </div>
          

      </section>

  )
}

export default MainContent
import React, {useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSuitcase } from '@fortawesome/free-solid-svg-icons'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'

function Goals() {

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.getElementById("desc").classList.add("fullOpacity");
          document.getElementById("desc2").classList.add("fullOpacity");
          document.getElementById("desc3").classList.add("fullOpacity");
        }
      });
    });
    
    const element = document.getElementById("desc");
    if (element) {
      observer.observe(element);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // 2nd Observer

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.getElementById("goalsImage").classList.add("fullOpacityDelay");
          document.getElementById("goalsImage2").classList.add("fullOpacityDelay");
          document.getElementById("goalsImage3").classList.add("fullOpacityDelay");
        }
      });
    });
    
    const element = document.getElementById("desc");
    if (element) {
      observer.observe(element);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // 3rd Observer

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.getElementById("titles").classList.add("fullOpacity");
          document.getElementById("titles").classList.add("moveTextLeft");
          document.getElementById("titles2").classList.add("fullOpacityDelay");
          document.getElementById("titles3").classList.add("fullOpacity");
          document.getElementById("titles3").classList.add("moveTextRight");
        }
      });
    });
    
    const element = document.getElementById("desc");
    if (element) {
      observer.observe(element);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  //More Observers

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.getElementById("img1").classList.add("spinImage1");
        }
      });
    });
    
    const element = document.getElementById("desc");
    if (element) {
      observer.observe(element);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.getElementById("img2").classList.add("spinImage2");
        }
      });
    });
    
    const element = document.getElementById("desc");
    if (element) {
      observer.observe(element);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.getElementById("img3").classList.add("spinImage3");
        }
      });
    });
    
    const element = document.getElementById("desc");
    if (element) {
      observer.observe(element);
    }

    return () => {
      observer.disconnect();
    };
  }, []);


  return (
    <section className="goalsWrapper">
      
        <div className="goalsHeadingFlex">
              <p>What I'm looking to accomplish</p>
          </div>
      <div className="bigFlexGoals">

        <div id="career" className="goalsGridWrapper">
          <div id="goalsImage" className="goalsImageFlex">
              <div className="circle"><FontAwesomeIcon id ="img1" className="img" icon={faSuitcase} size = '4x' color = '#333'/></div>
          </div>
          <div id="titles" className="goalsTitle">
              <div>
                <h4>CAREER</h4>
              </div>
          </div>
          <div id="desc" className="desc">
              <desc> Having a good career isn't just a job that pays well.  It's about the journey
                that takes you there, built on a foundation  of a desire for discovery and knowledge.
                I aspire to take on a journey of my own in the realm of Software Engineering where every step I take
                is in pursuit to better myself.
              </desc>
          </div>
          </div>

          <div id="industry" className="goalsGridWrapper">
          <div id="goalsImage2" className="goalsImageFlex">
              <div className="circle"><FontAwesomeIcon id ="img2" className="img" icon={faLaptopCode} size = '4x' color = '#333'/></div>
          </div>
          <div id="titles2" className="goalsTitle">
              <div>
                <h4>INDUSTRY</h4>
              </div>
          </div>
          <div id="desc2" className="desc">
            <desc>Industrial practices greatly differ from those that you learn in University classes.
                Whether it's keeping up with trendy frameworks or designing applications with full-stack technology, 
                I'm eager to learn what it takes to keep up in the modern tech-realm.
            </desc>
          </div>
        </div>

        <div id="experience" className="goalsGridWrapper">
          <div id="goalsImage3" className="goalsImageFlex">
          <div className="circle"><FontAwesomeIcon id ="img3" className="img" icon={faCode} size = '4x' color = '#333'/></div>
          </div>
          <div id="titles3" className="goalsTitle">
              <div>
                <h4>EXPERIENCE</h4>
              </div>
          </div>
          <div id="desc3" className="desc">
              <desc>Throughout my coursework and personal projects that I've persued over the years, 
                  I've come to be familiar with various languages, libraries, and frameworks; however, I know 
                  that there's a lot more out there. Whether it's Front-End or Back-End programming, I'm always eager 
                  to learn about different components and more efficient programming techniques.
              </desc>
          </div>
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
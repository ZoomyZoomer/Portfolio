import React, { useEffect } from 'react'



function Contact() {



    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              document.getElementById("mail").classList.add('animateMail'); 
            }
          });
        });
        
        const element = document.getElementById("mail");
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
              document.getElementById("mailButton").classList.add('animateMailButton'); 
            }
          });
        });
        
        const element = document.getElementById("mailButton");
        if (element) {
          observer.observe(element);
        }
    
        
        return () => {
          observer.disconnect();
        };
      }, []);

  return (
    <section id="contactGridWrap" className="contactGridWrap">
        <div id="mailFlex" className="contactFlex">
            <img id="mail" src="mail.png"></img>
        </div>
        <div className="contactFlex">
            <p>Let's Get In Touch!</p>
        </div>
        <div className="contactFlex">
            <h6>I'm always looking for internship opportunities <br></br> and projects to work on!</h6>
        </div>
        <div className="contactFlex">
            <a href="mailto: kcw90@scarletmail.rutgers.edu"><button id="mailButton">Say Hi</button></a>
        </div>
    </section>
  )
}

export default Contact
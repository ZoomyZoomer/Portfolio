import React, { useEffect } from 'react'



function Contact() {



    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animateMail'); // Add your animation class here
            }
          });
        });
        
        const element = document.getElementById("mail");
        if (element) {
          observer.observe(element);
        }
    
        // Don't forget to disconnect the observer when the component unmounts
        return () => {
          observer.disconnect();
        };
      }, []);

  return (
    <section className="contactGridWrap">
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
            <a href="mailto: realisticallyspeaking101@gmail.com"><button>Say Hi</button></a>
        </div>
    </section>
  )
}

export default Contact
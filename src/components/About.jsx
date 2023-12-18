import React from 'react'

function About() {
  return (

    <section className="aboutFlex">

        <div className="aboutGrid">

          <div>

            <h5>A LITTLE BIT ABOUT ME</h5>
            <img src="pfp_circle.png"></img>
            <p>Hey! My name is Kamil and I’m currently a third year student at <br></br> 
                <a href="https://www.rutgers.edu/">Rutgers-New Brunswick</a> pursuing a Bachelor’s degree in Computer Science.
                I’ve been developing a passion for both Front-End and Back-End design as I encounter new libraries and frameworks with every project I pursue. 
                I aspire towards a career that'll allow me to channel my curiosity of software development by contributing to redefining projects.
                <br></br>
                <br></br>
                Apart from coding, I like playing strategy games and making digital art :&#41;
            </p>
            <div className="TLDRcontainer">
              <p>TL;DR?</p>
              <div className="TLDRflex">
                  <div>
                    <img src="cap_icon.png"></img>
                    <p>Rutgers Uni</p>
                  </div>
                  <div>
                  <img src="paint_icon.png"></img>
                  <p>Digital Artist</p>
                  </div>
              </div>
            </div>


          </div>

            

        </div>
        

    </section>

  )
}

export default About
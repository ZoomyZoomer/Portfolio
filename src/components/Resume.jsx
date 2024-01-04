import React, {useState} from 'react'

function Resume() {

  const [copy, setCopy] = useState("Get A Copy");
  const [count, setCount] = useState(0);

  function nextCopy(){

    if (count <= 2){
      count == 0 ? setCopy(prevCopy => "Another Copy?") : 
      count == 1 ? setCopy(prevCopy => "I didn't know my resume was THAT good") :
      setCopy(prevCopy => "Alright buddy, paper doesn't grow on trees");

      setCount(prevCount => prevCount + 1);
    } else {
      document.getElementById("resumeButton").classList.add("noclick");
      setCopy(prevCopy => "No :)");
    }
    

  }

  return (
    <section className="resumeContainer">
      <div className="horizontalBar"></div>

       <div className="resumeBG">
        
       </div>
       <div className="resumeFlex">
            <a href="resume.pdf" download><button id="resumeButton" onClick={() => nextCopy()}>{copy}</button> </a>
       </div>
       <div className="resumeFlex">
            <p>CHECK OUT MY RESUME :&#41;</p>
       </div>
       <div className="horizontalBar"></div>
        
    </section>
  )
}

export default Resume
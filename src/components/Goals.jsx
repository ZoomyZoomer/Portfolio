import React from 'react'

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
      
        <div className="goalsHeadingFlex"><p>What I'm looking to accomplish</p></div>
        <div className="goalsImageFlex">
        </div>

    </section>
  )
}

export default Goals
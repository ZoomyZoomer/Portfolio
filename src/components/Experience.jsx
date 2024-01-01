import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

function Experience() {

    

    const [text, setText] = useState("LANGUAGES");

    const [text2, setText2] = useState("COLLEGE COURSES");

    const [slide, setSlide] = useState(0);

    


    function recolor(e) {
        document.getElementById(e.target.id).classList.remove("grayscale");
    }

    var child1 = React.createElement("a", {href: "https://en.wikipedia.org/wiki/HTML"}, React.createElement("img", {id:"circle1Image", className:"grayscale", src:"html_logo.png"}));
    var child2 = React.createElement("a", {href: "https://en.wikipedia.org/wiki/JavaScript"}, React.createElement("img", {id:"circle2Image", className:"grayscale", src:"javascript_logo.png"}));
    var child3 = React.createElement("a", {href: "https://en.wikipedia.org/wiki/C_(programming_language)"}, React.createElement("img", {id:"circle3Image", className:"grayscale", src:"c_logo.png"}));
    var child4 = React.createElement("a", {href: "https://en.wikipedia.org/wiki/CSS"}, React.createElement("img", {id:"circle4Image", className:"grayscale", src:"css_logo.png"}));
    var child5 = React.createElement("a", {href: "https://en.wikipedia.org/wiki/Java_(programming_language)"}, React.createElement("img", {id:"circle5Image", className:"grayscale", src:"java_logo.png"}));

    const [img1, setImg1] = useState(child1);
    const [img2, setImg2] = useState(child2);
    const [img3, setImg3] = useState(child3);
    const [img4, setImg4] = useState(child4);
    const [img5, setImg5] = useState(child5);

    function nextSlide2(){

    }


    function nextSlide() {
        slide != 2 ? setSlide(prevSlide => prevSlide + 1) : setSlide(prevSlide => 0);

        var circle1 = document.getElementById("c1");
        var circle2 = document.getElementById("c2");
        var circle3 = document.getElementById("c3");
        var circle4 = document.getElementById("c4");
        var circle5 = document.getElementById("c5");
    

        switch(slide){
            case 0:
                setText(prevText => "SYSTEMS AND LIBRARIES");
                setImg1(prevImg1 => React.createElement("a", {href: "https://en.wikipedia.org/wiki/Babylon.js"}, React.createElement("img", {id:"circle1Image", className:"grayscale fadeImage", src:"babylon_icon.png"})));
                setImg2(prevImg2 => React.createElement("a", {href: "https://en.wikipedia.org/wiki/Linux"}, React.createElement("img", {id:"circle2Image", className:"grayscale fadeImage", src:"linux_icon.png"})));
                setImg3(prevImg3 => React.createElement("a", {href: "https://fontawesome.com/"}, React.createElement("img", {id:"circle3Image", className:"grayscale fadeImage", src:"fontawesome_icon.png"})));
                setImg4(prevImg4 => React.createElement("a", {href: "https://jquery.com/"}, React.createElement("img", {id:"circle4Image", className:"grayscale fadeImage", src:"jquery_icon.png"})));
                setImg5(prevImg5 => React.createElement("a", {href: "https://react.dev/"}, React.createElement("img", {id:"circle5Image", className:"grayscale fadeImage", src:"React_icon.png"})));
                circle1.classList.remove("circle1");
                circle1.classList.add("circle1-1Anim");
                circle2.classList.remove("circle2");
                circle2.classList.add("circle2-1Anim");
                circle3.classList.remove("circle3");
                circle3.classList.add("circle3-1Anim");
                circle4.classList.remove("circle4");
                circle4.classList.add("circle4-1Anim");
                circle5.classList.remove("circle5");
                circle5.classList.add("circle5-1Anim");
                document.getElementById("rightArrow").classList.add("inactive");


                setTimeout(letAnimate1, 999);

            

                function letAnimate1(){
                    circle1.classList.remove("circle1-1Anim");
                    circle1.classList.add("circle1-1");
                    circle2.classList.remove("circle2-1Anim");
                    circle2.classList.add("circle2-1");
                    circle3.classList.remove("circle3-1Anim");
                    circle3.classList.add("circle3-1");
                    circle4.classList.remove("circle4-1Anim");
                    circle4.classList.add("circle4-1");
                    circle5.classList.remove("circle5-1Anim");
                    circle5.classList.add("circle5-1");
                    document.getElementById("rightArrow").classList.remove("inactive");
                }
                break;
            case 1:
                setText(prevText => "SOFTWARE AND APPLICATIONS");
                setImg1(prevImg1 => React.createElement("a", {href: "https://www.adobe.com/products/photoshop.html"}, React.createElement("img", {id:"circle1Image", className:"grayscale fadeImage", src:"photoshop_icon.png"})));
                setImg2(prevImg2 => React.createElement("a", {href: "https://github.com/ZoomyZoomer"}, React.createElement("img", {id:"circle2Image", className:"grayscale fadeImage", src:"github_icon.png"})));
                setImg3(prevImg3 => React.createElement("a", {href: "https://eclipseide.org/"}, React.createElement("img", {id:"circle3Image", className:"grayscale fadeImage", src:"eclipse_icon.png"})));
                setImg4(prevImg4 => React.createElement("a", {href: "https://www.clipstudio.net/en/"}, React.createElement("img", {id:"circle4Image", className:"grayscale fadeImage", src:"clipstudiopaint_icon.png"})));
                setImg5(prevImg5 => React.createElement("a", {href: "https://code.visualstudio.com/"}, React.createElement("img", {id:"circle5Image", className:"grayscale fadeImage", src:"visualstudio_icon.png"})));
                circle1.classList.remove("circle1-1");
                circle1.classList.add("circle1-2Anim");
                circle2.classList.remove("circle2-1");
                circle2.classList.add("circle2-2Anim");
                circle3.classList.remove("circle3-1");
                circle3.classList.add("circle3-2Anim");
                circle4.classList.remove("circle4-1");
                circle4.classList.add("circle4-2Anim");
                circle5.classList.remove("circle5-1");
                circle5.classList.add("circle5-2Anim");
                document.getElementById("rightArrow").classList.add("inactive");

                setTimeout(letAnimate2, 999);

                function letAnimate2(){
                    circle1.classList.remove("circle1-2Anim");
                    circle1.classList.add("circle1-2");
                    circle2.classList.remove("circle2-2Anim");
                    circle2.classList.add("circle2-2");
                    circle3.classList.remove("circle3-2Anim");
                    circle3.classList.add("circle3-2");
                    circle4.classList.remove("circle4-2Anim");
                    circle4.classList.add("circle4-2");
                    circle5.classList.remove("circle5-2Anim");
                    circle5.classList.add("circle5-2");
                    document.getElementById("rightArrow").classList.remove("inactive");
                }
                break;
            case 2:
                setText(prevText => "LANGUAGES");
                setImg1(prevImg1 => React.createElement("a", {href: "https://en.wikipedia.org/wiki/HTML"}, React.createElement("img", {id:"circle1Image", className:"grayscale", src:"html_logo.png"})));
                setImg2(prevImg2 => React.createElement("a", {href: "https://en.wikipedia.org/wiki/JavaScript"}, React.createElement("img", {id:"circle2Image", className:"grayscale", src:"javascript_logo.png"})));
                setImg3(prevImg3 => React.createElement("a", {href: "https://en.wikipedia.org/wiki/C_(programming_language)"}, React.createElement("img", {id:"circle3Image", className:"grayscale", src:"c_logo.png"})));
                setImg4(prevImg4 => React.createElement("a", {href: "https://en.wikipedia.org/wiki/CSS"}, React.createElement("img", {id:"circle4Image", className:"grayscale", src:"css_logo.png"})));
                setImg5(prevImg5 => React.createElement("a", {href: "https://en.wikipedia.org/wiki/Java_(programming_language)"}, React.createElement("img", {id:"circle5Image", className:"grayscale", src:"java_logo.png"})));
                circle1.classList.remove("circle1-2");
                circle1.classList.add("circle1Anim");
                circle2.classList.remove("circle2-2");
                circle2.classList.add("circle2Anim");
                circle3.classList.remove("circle3-2");
                circle3.classList.add("circle3Anim");
                circle4.classList.remove("circle4-2");
                circle4.classList.add("circle4Anim");
                circle5.classList.remove("circle5-2");
                circle5.classList.add("circle5Anim");
                document.getElementById("rightArrow").classList.add("inactive");

                setTimeout(letAnimate3, 999);

                function letAnimate3(){
                    circle1.classList.remove("circle1Anim");
                    circle1.classList.add("circle1");
                    circle2.classList.remove("circle2Anim");
                    circle2.classList.add("circle2");
                    circle3.classList.remove("circle3Anim");
                    circle3.classList.add("circle3");
                    circle4.classList.remove("circle4Anim");
                    circle4.classList.add("circle4");
                    circle5.classList.remove("circle5Anim");
                    circle5.classList.add("circle5");   
                    document.getElementById("rightArrow").classList.remove("inactive");
                }
                break;

            
        }
    }
    
  return (
    <section className="expContainer">
        <div className="expHeadingGrid">
            <div className="expHeader">
                <h1>EXPERIENCE</h1>
            </div>
            <div className="expHeader">
                <p>Throughout my personal projects and classwork, I've used various
                     <br></br> languages, libraries, and applications.</p>
            </div>
        </div>
        <div className="sliderRelative">
            <div className="sliderGrid">
                <div>
                    <div>
                        <p>{text}</p>
                        <FontAwesomeIcon id="rightArrow" onClick={() => nextSlide()} icon={faCaretRight} size = '3x' color = 'rgb(30, 48, 80)'/>
                    </div>
                    
                </div>

                <div className="griddy">
                    <div className="display">
                        {React.createElement("div", {className: "circle1", id: "c1"}, img1)}
                        {React.createElement("div", {className: "circle2", id: "c2"}, img2)}
                        {React.createElement("div", {className: "circle3", id: "c3"}, img3)}
                        {React.createElement("div", {className: "circle4", id: "c4"}, img4)}
                        {React.createElement("div", {className: "circle5", id: "c5"}, img5)}
                    </div>
                    <div className="border"></div>
                    <div className="rightDisplay">
                        <p>{text2}</p>
                        <div className="miniflex">
                            <a href="https://www.cs.rutgers.edu/academics/undergraduate/course-synopses/course-details/01-198-211-computer-architecture">COMPUTER ARCHITECTURE</a>
                            <a href="https://www.cs.rutgers.edu/academics/undergraduate/course-synopses/course-details/01-198-112-data-structures">DATA STRUCTURES</a>
                        </div>
                        <div className="miniflex">
                            <a href="https://www.cs.rutgers.edu/academics/undergraduate/course-synopses/course-details/01-198-214-systems-programming">SYSTEMS PROGRAMMING</a>
                            <a href="https://www.cs.rutgers.edu/academics/undergraduate/course-synopses/course-details/01-198-206-introduction-to-discrete-structures-ii">DISCRETE STRUCTURES I-II</a>
                        </div>
                        <div className="miniflex">
                            <a href="https://www.cs.rutgers.edu/academics/undergraduate/course-synopses/course-details/01-198-314-principles-of-programming-languages">PRINCIPLES OF PROGRAMMING LANGUAGES</a>
                            <a href="https://www.cs.rutgers.edu/academics/undergraduate/course-synopses/course-details/01-198-344-design-and-analysis-of-computer-algorithms">COMPUTER ALGORITHMS</a>
                        </div>
                        <div className="miniflex">
                            <a href="https://www.cs.rutgers.edu/academics/undergraduate/course-synopses/course-details/01-198-416-operating-systems-design">OPERATING SYSTEMS DESIGN</a>
                            <a href="https://www.cs.rutgers.edu/academics/undergraduate/course-synopses/course-details/01-198-213-software-methodology">SOFTWARE METHODOLOGY</a>
                        </div>
                        
                    </div>
                </div>
                

            </div>
        </div>


    </section>
  )
}

export default Experience
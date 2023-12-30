import React, {useState} from 'react'

function Experience() {

    const [text, setText] = useState("PROGRAMMING LANGUAGES");

    const [slide, setSlide] = useState(0);


    function nextSlide() {
        slide != 2 ? setSlide(prevSlide => prevSlide + 1) : setSlide(prevSlide => 0);

        var circle1 = document.getElementById("c1");
        var circle2 = document.getElementById("c2");
        var circle3 = document.getElementById("c3");
        var circle4 = document.getElementById("c4");
        var circle5 = document.getElementById("c5");

        switch(slide){
            case 0:
                setText(prevText => "LIBRARIES");
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
                }
                break;
            case 1:
                setText(prevText => "IDEs");
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
                }
                break;
            case 2:
                setText(prevText => "PROGRAMMING LANGUAGES");
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
                     <br></br> languages, libraries, and IDEs.</p>
            </div>
        </div>
        <div className="sliderRelative">
            <div className="sliderGrid">
                <div>
                    <p>{text}</p>
                    <button id="b1" onClick={() => nextSlide()}></button>
                    <button id="b2" onClick={() => nextSlide()}></button>
                    <button id="b3" onClick={() => nextSlide()}></button>
                </div>


                <div className="display">
                    <div id="c1" className="circle1"></div>
                    <div id="c2" className="circle2"></div>
                    <div id="c3" className="circle3"></div>
                    <div id="c4" className="circle4"></div>
                    <div id="c5" className="circle5"></div>
                </div>

            </div>
        </div>


    </section>
  )
}

export default Experience
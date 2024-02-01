import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'

let currProj = "";

function setProj(id){
  currProj = id;
}

function Tag(props){
  return(
  <div className="tagFlex">
      <p>{props.Name}</p>
  </div>
  )
}

function Display(props){

  document.getElementById("entireContainer").classList.add("shadow");
  document.getElementById("projectContainer").classList.add("shadow");

  document.body.style.overflow = "hidden";

  function closeAll(){
    document.body.style.overflow = "visible";
    document.body.style.overflowX = "hidden";
    document.getElementById("entireContainer").classList.remove("shadow");
    document.getElementById("projectContainer").classList.remove("shadow");

    setTimeout(() => letAnimate, 200);

    function letAnimate(){}

    props.function(false);
   
    
  }
  

  return (
    <div id="displayBoxFlex">
      <div id="displayBox" className="displayBox">
        <div className="displayHeadingGrid">
            <div className="miniHeadingGrid">
              <p>{props.title}</p>
              <FontAwesomeIcon onClick={() => closeAll()} id="XIcon" icon={faXmark} color = '#b1b1b1' size="lg"/>
            </div>
            
            <h6>{props.subTitle}</h6>
        </div>
        <div className="displayFlex">
            <p>{props.description}<br></br><br></br>{props.description2}<br></br><br></br>{props.description3}
            </p>
        </div>
        <div className="displayFlex">
            <Tag Name={props.tag1}/>
            <Tag Name={props.tag2} />
            <Tag Name={props.tag3} />
            <Tag Name={props.tag4} />  
        </div>
        <div className="displayFooterFlex">
          <div className="displayFooter">
            <p>Looking For More?</p>
          </div>
          <div id="buttons" className="displayFooter">
              {props.ReadMe}
              {props.GitRepository}
          </div>
        </div>
        

      </div>
    </div>
  )
}


function Projects() {

  const [showDis, setShowDis] = useState(false);

  let BMProps = {
    title: "Better Malloc",
    subTitle: "C Program",
    description: ["Located in the C Standard Library, ", <a href="https://en.cppreference.com/w/c/memory/malloc">malloc</a>, " and ", <a href="https://en.cppreference.com/w/c/memory/free">free</a>, " are responsible for allocating and deallocating memory, respectively."],
    description2: "Throughout my time spent using these functions while writing C code, I came to notice the lack of a user-error detection system. I'd frequently make mistakes such as freeing already freed pointers, or freeing data that didn't start at a pointer returned by malloc, essentially freeing random data.",
    description3: "The purpose of this project was to recreate the functionality of malloc and free, and implement user-error detection, warning the programmer that they potentially MAY have made a mistake with a malloc or free call. Such warnings can prove to be critically useful as they can help isolate specific errors within your code so you don't have to spend hours debugging.",
    tag1: "C Programming Language",
    tag2: "C Standard",
    tag3: "Git",
    tag4: "Visual Studio",
    ReadMe: [<a href="README_Malloc.txt" download><button>README</button></a>],
    GitRepository: ["OR", <a href="https://github.com/ZoomyZoomer/BetterMalloc"><button>GIT REPOSITORY</button></a>],
    function: setShowDis
  }
  
  let LSProps = {
    title: "Unix Shell",
    subTitle: "C Program",
    description: ["The ", <a href="https://en.wikipedia.org/wiki/Unix_shell">Unix Shell</a>, " is a command-line interpreter that allows the input of Linux user commands in order to perform particular tasks within your system."],
    description2: "As I was learning about different operating systems, I encountered the Linux environment, and more particullarly, its command pannel. Linux has particullar methods for interpreting commands such as through piping, '|', and through redirection, '<', or '>' which I found to be quite interesting.",
    description3: "The purpose of this project was to recreate as much of the Unix Shell as possible, through the implementation of piping, redirection, and running external commands (Ex: 'ls') all made possible through the use of child processes.",
    tag1: "C Programming Language",
    tag2: "C Standard",
    tag3: "Linux",
    tag4: "Git",
    ReadMe: [<a href="README_Shell.txt" download><button>README</button></a>],
    GitRepository: ["OR", <a href="https://github.com/ZoomyZoomer/ShellCopy"><button>GIT REPOSITORY</button></a>],
    function: setShowDis
  }

  let DFSProps = {
    title: "Directory Scanner",
    subTitle: "C Program",
    description: ["Every single PC is composed of ", <a href="https://en.wikipedia.org/wiki/Directory_(computing)">directories</a>, " or folders, each containing other types of files, such as .txt or .c files, or even completely other directories as a whole in a recursive manner."],
    description2: "As I learned about directories, and how files could be listed in a Linux environment through the use of 'ls', I wanted to see if I could use the built-in functions of Linux to help me recurisvely search directories for specific file types.",
    description3: "The purpose of this project was to create a program that would recursively search a given directory (supporting the use of wildcards, '*') for .txt files, and then create a document listing the combined word count of the words found in ALL .txt files, from greatest to lowest occurrence.",
    tag1: "C Programming Language",
    tag2: "C Standard",
    tag3: "Linux",
    tag4: "Git",
    ReadMe: [<a href="README_Scanner.txt" download><button>README</button></a>],
    GitRepository: ["OR", <a href="https://github.com/ZoomyZoomer/DirectoryFileScanner"><button>GIT REPOSITORY</button></a>],
    function: setShowDis
  }
  
  let PFProps = {
    title: "Pathfinder",
    subTitle: "Reactjs Program",
    description: [<a href="https://en.wikipedia.org/wiki/Algorithm">Algorithms</a>, " are a powerful tool the realm of computer science, enabling us programmers to find the most efficient solutions possible whilst taking space and runtime into consideration."],
    description2: "Seeing the importance of algorithms, I wanted to create way that would visualize some of the most popular search algorithms through the use of an interactive interface.",
    description3: "The purpose of this project was to create a visual environment for some popular search algorithms such as BFS, DFS, and A*. I made the project interactive through the use of Reactjs by allowing the user to drag Start and End nodes, as well as the ability to create 'blocked' nodes that prevent search movement.",
    tag1: "Javascript",
    tag2: "React",
    tag3: "Git",
    tag4: "Visual Studio",
    ReadMe: [<a href="https://zoomyzoomer.github.io/pathfinder/"><button>WEBSITE</button></a>],
    GitRepository: ["OR ", <a href="https://github.com/ZoomyZoomer/pathfinder"><button>GIT REPOSITORY</button></a>],
    function: setShowDis
  }

  let OBPProps = {
    title: "OneBitePages",
    subTitle: "MERN Stack Program",
    description: ["This program was created using the ", <a href="https://www.geeksforgeeks.org/mern-stack/">MERN Stack</a>, ", utilizing MongoDB for database management, Express for server-side routing, React for front-end UI, and Node for server-side scripting."],
    description2: "I implemented a user authentication system that is mounted with an encryption model, enalbing users to safely register, login, and edit their own public posts!",
    description3: "I had also optimized communication channels through efficient network requests to their respective endpoints, ensuring seamless data exchange.",
    tag1: "MongoDB",
    tag2: "Express",
    tag3: "React",
    tag4: "Node",
    GitRepository: [<a href="https://github.com/ZoomyZoomer/OneBitePages"><button>GIT REPOSITORY</button></a>],
    function: setShowDis
  }

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.getElementById("project1").classList.add("project1Opac"); 
          document.getElementById("project1").classList.add("fullOpacity"); 
        }
      });
    });
    
    const element = document.getElementById("project1");
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
          document.getElementById("project2").classList.add("project2Opac"); 
          document.getElementById("project2").classList.add("fullOpacity"); 
        }
      });
    });
    
    const element = document.getElementById("project2");
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
          document.getElementById("project3").classList.add("project3Opac"); 
          document.getElementById("project3").classList.add("fullOpacity"); 
        }
      });
    });
    
    const element = document.getElementById("project4");
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
          document.getElementById("project4").classList.add("project4Opac"); 
          document.getElementById("project4").classList.add("fullOpacity"); 
          document.getElementById("project5").classList.add("project4Opac"); 
          document.getElementById("project5").classList.add("fullOpacity"); 
        }
      });
    });
    
    const element = document.getElementById("project4");
    if (element) {
      observer.observe(element);
    }


    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div id="based">
      {showDis && 
      (currProj == "BM" ? <Display {...BMProps}/> :
      currProj == "LS" ? <Display {...LSProps}/> :
      currProj == "DFS" ? <Display {...DFSProps}/> :
      currProj == "PF" ? <Display {...PFProps}/> :
      <Display {...OBPProps}/>)}
    <section id="projectContainer" className="projectContainer">
        <div id="projHeadingText">
          <div className="projectHeadingFlex">
              <p>SOME OF MY PROJECTS</p>
          </div>
          <div className="projectHeadingFlex">
              <a className="shake" href="https://github.com/ZoomyZoomer">&#40;more soon&#41;</a>
          </div>
        </div>
        <div className="projectGrid">

            <div id="project1" onClick={() => {setShowDis(true); setProj("BM");}} className="project">
                <img src="coding2_icon.png"></img>
                <h1 >Better Malloc</h1>
            </div>
            <div id="project2" onClick={() => {setShowDis(true); setProj("LS");}} className="project">
                <img src="coding2_icon.png"></img>
                <h1>Unix Shell</h1>
            </div>
            <div id="project3" onClick={() => {setShowDis(true); setProj("DFS");}} className="project">
                <img src="coding2_icon.png"></img>
                <h1>Directory Scanner</h1>
            </div>
            <div id="project5" onClick={() => {setShowDis(true); setProj("OBP");}} className="project">
                <img src="bracket_icon.png"></img>
                <h1>OneBitePages</h1>
            </div>
            <div id="project4" onClick={() => {setShowDis(true); setProj("PF");}} className="project">
                <img src="bracket_icon.png"></img>
                <h1>Pathfinder</h1>
            </div>

        </div>
    </section>
    </div>
  )
}

export default Projects;
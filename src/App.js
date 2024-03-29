import React, {useEffect} from 'react'
import MainContent from './components/MainContent'
import Navbar from './components/Navbar'
import About from './components/About'
import Goals from './components/Goals'
import Experience from './components/Experience'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  
  return (
<div>
      <a id="Base"></a>
    <div id="entireContainer">
      <a id="Home"></a>
        <Navbar />
        <MainContent />
      <a id="About"></a>
        <About />
      <a id="Goals"></a>
        <Goals />
      <a id="Experience"></a>
        <Experience />
        <Resume />
        </div>
      <a id="Projects"></a>
        <Projects />
        <Contact />
        <Footer />
        <a id="Contact"></a>
    
  </div>

  )
}


export default App;

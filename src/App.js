import React from 'react'
import MainContent from './components/MainContent'
import Navbar from './components/Navbar'
import About from './components/About'
import Goals from './components/Goals'
import Experience from './components/Experience'
import Resume from './components/Resume'

function App() {
  return (

    <div>
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

  )
}


export default App;

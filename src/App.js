import React from 'react'
import MainContent from './components/MainContent'
import Navbar from './components/Navbar'
import About from './components/About'
import Goals from './components/Goals'

function App() {
  return (

    <div>
      <a id="Home"></a>
      <Navbar />
      <MainContent />
      <a id="About"></a>
      <About />
      <Goals />

    </div>

  )
}


export default App;

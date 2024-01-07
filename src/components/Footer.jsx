import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <section className="footerGridWrap">
        <div className="socialsFlex">
            <a href="#Home"><FontAwesomeIcon id="totop" icon={faCaretUp} size="2xl"/></a>
            <div id="ig" className="iconBlock">
                <img src="instagram.svg"></img>
            </div>
             <div id ="li" className="iconBlock">
                <img src="linkedin.svg"></img>
             </div>
             <div id ="sy" className="iconBlock">
                <img src="spotify.svg"></img>
             </div>
             <div id ="gh" className="iconBlock">
                <img src="github.svg"></img>
             </div>
             <div id ="dc" className="iconBlock">
                <img src="discord.svg"></img>
             </div>
             <a href="#Home"><FontAwesomeIcon id="totop" icon={faCaretUp} size="2xl"/></a>
             
             


        </div>
        <div id="tm" className="socialsFlex">
            <p>&#174; Kamil Wisniewski 2024</p>
        </div>
    </section>
  )
}

export default Footer
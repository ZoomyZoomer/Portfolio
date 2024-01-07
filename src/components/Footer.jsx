import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'

function Footer() {

    function showDiscord(){

        document.getElementById("discord").classList.remove("zeroOpacity");

    }

    function hideDiscord(){

        document.getElementById("discord").classList.add("zeroOpacity");

    }

  return (
    <section className="footerGridWrap">
        <div className="socialsFlex">
            <a href="#Home"><FontAwesomeIcon id="totop" icon={faCaretUp} size="2xl"/></a>
            <div id="ig" className="iconBlock">
                <a href="https://www.instagram.com/kamil.zoom/"><img src="instagram.svg"></img></a>
            </div>
             <div id ="li" className="iconBlock">
                <a href="https://www.linkedin.com/in/kamil-wisniewski-460b07235/"><img src="linkedin.svg"></img></a>
             </div>
             <div id ="sy" className="iconBlock">
                <a href="https://open.spotify.com/user/dppuuwuxjq88nb2s8k56t81ft"><img src="spotify.svg"></img></a>
             </div>
             <div id ="gh" className="iconBlock">
                <a href="https://github.com/ZoomyZoomer"><img src="github.svg"></img></a>
             </div>
             <div id ="dc" onMouseEnter={() => showDiscord()} onMouseLeave={() => hideDiscord()} className="iconBlock">
                <a><img src="discord.svg"></img></a>
             </div>
             <div id="discord" className={"discordInfo" + " " + "zeroOpacity"}>
                <p>wholemilky</p>
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
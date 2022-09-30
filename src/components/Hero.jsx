import React from 'react'
import Linkedin from '/src/components/svgs/Linkedin'
import Github from '/src/components/svgs/Github'

export default function Hero() {
    return (
        <div id="hero">
            <h1>Hi, I'm <span className="name">Connor Baba.</span></h1>
            <h2>A Front End Engineer.</h2>
            <p>I work with <span className="HTML">HTML</span> <span className="CSS">CSS</span> <span className="js">Javascript</span> and <span className="react">React</span> to deliver responsive web technologies that are clean, safe, and scaleable. Let's build a project!</p>
                <div className="hero-links">
                    <ul>

                        <li>
                        <a>Resume</a>
                        </li>
                        <li>
                        <a href="https://github.com/ConnorBabaCodes" target="_blank"><Github/></a>
                        </li>
                        <li>
                        <a href="https://www.linkedin.com/in/connorbaba/" target="_blank" ><Linkedin /></a>
                        </li>
                    </ul>
                </div>
        </div>
    )
}
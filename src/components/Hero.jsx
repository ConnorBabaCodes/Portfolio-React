import React from 'react'

export default function Hero() {
    return (
        <div id="hero">
            <h1>Hi, I'm <span>Connor Baba.</span></h1>
            <h2>A Front End Engineer.</h2>
            <p>I work with HTML CSS Javascript and React to deliver responsive web technologies that are clean, safe, and scaleable.</p>
                <div className="hero-links">
                    <ul>

                        <li>
                        <a>Resume</a>
                        </li>
                        <li>
                        <a href="https://github.com/ConnorBabaCodes" target="_blank"><i className="fa-brands fa-github fa-xl"></i></a>
                        </li>
                        <li>
                        <a href="https://www.linkedin.com/in/connorbaba/" target="_blank" ><i className="fa-brands fa-linkedin fa-xl"></i></a>
                        </li>
                    </ul>
                </div>
        </div>
    )
}
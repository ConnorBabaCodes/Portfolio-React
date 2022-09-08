import React from 'react'

export default function Navbar() {
    return (
        <header>
        <nav>
                <div className="home"><ul><li><a className="nav-hover" href="#">CB.</a></li></ul></div>
                <div className="nav-buttons">
                <ul>
                    <li>
                        <a className ="nav-hover" href="#projects">Projects</a>
                    </li>
                    <li>
                    <a className ="nav-hover" href="#testimonials">Testimonials</a>
                    </li>
                    <li>
                    <a className ="nav-hover" href="#contact">Contact</a>
                    </li>
                    <li>
                        Dark Mode
                    </li>
                </ul>
               
                </div>
        </nav>
        </header>
    )
}
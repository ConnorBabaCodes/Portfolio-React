import React from 'react'

export default function Footer() {
return (
    <footer>
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
                </ul>
               
                </div>
                <p className="copyright">Website built by Connor Baba © 2022</p>
    </footer>
)
}
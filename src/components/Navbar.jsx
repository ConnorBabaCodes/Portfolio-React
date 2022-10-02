import React from 'react'
import useLocalStorage from 'use-local-storage'
import Moon from '/src/components/svgs/Moon'
import Burger from '/src/components/Burger'
import Resume from '/public/Connor Baba Resume.pdf'


export default function Navbar(props) {
    


    return (
        <header>
        <nav>
                <div className="home">
                    <ul>
                        <li>
                        <a className="nav-hover" href="#">CB.</a>
                        </li>

                    </ul>
                </div>
                < Burger />
                <div className="nav-buttons">
                <ul>
                    <li className="hide">
                        <a className ="nav-hover hide" href="#projects">Projects</a>
                    </li>
                    <li className="hide">
                    <a className ="nav-hover hide" href="#testimonials">Testimonials</a>
                    </li>
                    <li className="hide">
                    <a className ="nav-hover hide" href="#contact">Contact</a>
                    </li>
                    <li>
                    <a className="hide" href={Resume} target="_blank">Resume</a>
                    </li>
                    <li className='theme-toggle' onClick={props.handleClick}>
                    <Moon />
                    </li>
                </ul>
                
               
                </div>
                <ul className="secret-moon">
                    <li className='theme-toggle' onClick={props.handleClick}>
                <Moon  />
                </li>
                </ul>
                
               
        </nav>
        </header>
    )
}
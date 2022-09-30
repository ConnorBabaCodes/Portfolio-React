import React from 'react'
import useLocalStorage from 'use-local-storage'
import Moon from '/src/components/svgs/Moon'



export default function Navbar(props) {
    


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
                    <li className='theme-toggle' onClick={props.handleClick}>
                    <Moon />
                    </li>
                </ul>
               
                </div>
        </nav>
        </header>
    )
}
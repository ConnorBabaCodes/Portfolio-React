import React from 'react'

export default function Burger() {

    const [burgerState, setBurgerState] = React.useState(false)

  function menuOnClick() {
    setBurgerState(!burgerState)
    
  }

    return (
        <>
        <div id="menu" className="burger-menu">
        <div id="menu-bar" className={burgerState ? "change" : ""} onClick={menuOnClick}>
          <div id="bar1" className="bar"></div>
          <div id="bar2" className="bar"></div>
          <div id="bar3" className="bar"></div>
        </div>
        <nav className={burgerState ? 'change burger' : 'burger'} id="nav">
          <ul>
            <li onClick={menuOnClick}><a href="#">Home</a></li>
            <li onClick={menuOnClick}><a href="#projects">Projects</a></li>
            <li onClick={menuOnClick}><a href="#testimonials">Testimonials</a></li>
            <li onClick={menuOnClick}><a href="#contact">Contact</a></li>
          </ul>
        </nav> 
      </div>
      
      <div className={burgerState ? 'menu-bg change-bg' : 'menu-bg'}id="menu-bg"></div>
              
         
          </>
    )
}
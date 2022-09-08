import React from 'react'


export default function Contact() {
    return (
        <section id="contact">
            <h1>Contact</h1>
            <h3>You can reach me at these places</h3>
            <div className="contact-container">
            
            <div className="contact-box">
                <a href="https://www.linkedin.com/in/connorbaba/" target="_blank"><i class="fa-brands fa-linkedin fa-2xl"></i></a>
                <p>Linkedin</p>
            </div>
            <div className="contact-box">
            <i class="fa-solid fa-envelope fa-2xl"></i>
                <p>connorjbaba@gmail.com</p>
            </div>


            </div>
        </section>
    )

}
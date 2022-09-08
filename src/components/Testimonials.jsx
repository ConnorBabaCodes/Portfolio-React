import React from 'react'
import Slider from '/src/components/Slider'

export default function Testimonials() {
    return (
        <section id="testimonials">
            <h1>TESTIMONIALS</h1>
            <div className="slider">
            <Slider />
            </div>
            <h3 className="upwork-pitch">Want to hire me on Upwork? <a href="https://www.upwork.com/freelancers/~01ca104bfd61f12a2f" target="_blank"><span className="upwork">click here.</span></a></h3>
            </section>
    )
}
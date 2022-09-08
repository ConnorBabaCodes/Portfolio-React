import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/bundle'

import testimonialData from '/src/assets/testimonials.js'

export default function Slider() {
  const testimonialElements = testimonialData.map(testimonial => {
    return <SwiperSlide className="slide">
    <div className="slide-content">
      <h2>{testimonial.job}</h2>
      <p className="testimonial-content">{testimonial.content}</p>
      <div className="star-container">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        </div>
    </div>
    
  </SwiperSlide>
})
   



    return (
        <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: false }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >

      {testimonialElements}
    </Swiper>
    )
}
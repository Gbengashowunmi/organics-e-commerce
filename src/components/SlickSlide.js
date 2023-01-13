import React from 'react'
import Slider from "react-slick";
import ItemCard from './ItemCard';


export default function SlickSlide() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
      };
  return (
    <div>
        <Slider {...settings}>
          <div>
            <ItemCard/>
          </div>
          <div>
          <ItemCard/>
          </div>
          <div>
          <ItemCard/>
          </div>
          <div>
          <ItemCard/>
          </div>
          <div>
          <ItemCard/>
          </div>
          <div>
          <ItemCard/>
          </div>
        </Slider>
      </div>
  )
}

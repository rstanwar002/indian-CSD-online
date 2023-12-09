import React from "react";
import Slider from "react-slick";
import "./Carousel.css"
export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay : true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
    <div className="container">
    <h1 className="carousel-head"> WHAT'S NEW</h1>
    <Slider {...settings}  >
      <div className="carousel-container">
       <img className="carousel-img" src="https://csdindia.gov.in/writereaddata/ContentImgs/65284.jpg" />
      </div>
      <div className="carousel-container">
      <img className="carousel-img" src="https://csdindia.gov.in/writereaddata/ContentImgs/87299.jpg" />
      </div>
      <div className="carousel-container">
      <img className="carousel-img" src="https://csdindia.gov.in/writereaddata/ContentImgs/90047.jpg" />
      </div>
      <div className="carousel-container">
      <img className="carousel-img" src="https://csdindia.gov.in/writereaddata/ContentImgs/45391.jpg" />
      </div>
    
    </Slider>
    </div>
  );
}
"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Info = () => {
  const settings = {
    autoplaySpeed: 3500,
    fade: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    pauseOnHover: false,
    pauseOnFocus: false,
  };

  const slides = [
    {
      id: 1,
      image: "https://example.com/image1.jpg",
      title: "Slide 1",
    },
    {
      id: 2,
      image: "https://example.com/image2.jpg",
      title: "Slide 2",
    },
    {
      id: 3,
      image: "https://example.com/image3.jpg",
      title: "Slide 3",
    },
  ];

  return (
    <Slider {...settings}>
      {slides.map((e: any) => 
            <div key={e.id}>
              {e.title}
              {e.title}
            </div>
          )}
     
    </Slider>
  );
};
export default Info;

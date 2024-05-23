"use client";
import Lottie from "lottie-web";
import { createRef, useEffect } from "react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Login.module.css";
import { FormLogin } from "./FormLogin";

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
export default function Login() {
  let animationContainer = createRef();
  let animationContainer1 = createRef();
  let animationContainer2 = createRef();
  let animationContainer3 = createRef();

  useEffect(() => {
    const anima = Lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "canvas",
      loop: true,
      autoplay: true,
      path: "/Discover/data.json",
    });
    const anima1 = Lottie.loadAnimation({
      container: animationContainer1.current,
      renderer: "canvas",
      loop: true,
      autoplay: true,
      path: "/Share/data.json",
    });
    const anima2 = Lottie.loadAnimation({
      container: animationContainer2.current,
      renderer: "canvas",
      loop: true,
      autoplay: true,
      path: "/Security/data.json",
    });
    const anima3 = Lottie.loadAnimation({
      container: animationContainer3.current,
      renderer: "canvas",
      loop: true,
      autoplay: true,
      path: "/Privacy/data.json",
    });

    return () => {
      anima.destroy();
      anima1.destroy();
      anima2.destroy();
      anima3.destroy();
    };
  });
  return (
    <div className={styles.login}>
      <div style={{paddingTop:'200px'}}>
        <Slider {...settings}>
          <div ref={animationContainer}></div>
          <div ref={animationContainer1}></div>
          <div ref={animationContainer2}></div>
          <div ref={animationContainer3}></div>
        </Slider>
      </div>
    </div>
  );
}

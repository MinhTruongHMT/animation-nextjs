"use client";
// import Lottie from "lottie-web";
import { createRef, useEffect } from "react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Login.module.css";
import animationData from "@/public/Privacy/data.json";
import Lottie from "react-lottie";

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

  // useEffect(() => {
  //   const anima = Lottie.loadAnimation({
  //     container: animationContainer.current,
  //     renderer: "svg",
  //     loop: true,
  //     autoplay: true,
  //     path: "/Discover/data.json",
  //   });
  //   const anima1 = Lottie.loadAnimation({
  //     container: animationContainer1.current,
  //     renderer: "svg",
  //     loop: true,
  //     autoplay: true,
  //     path: "/Share/data.json",
  //   });

  //   return () => {
  //     anima.destroy();
  //     anima1.destroy();

  //   };
  // });
  const defaultOptions = {
    loop: true,
    autoplay: true,
    renderer: "svg",
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
}

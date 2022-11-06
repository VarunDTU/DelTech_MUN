import Slider from "react-slick";
import React from "react";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
const Main = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <section class='text-gray-600 -z-50 w-screen' id="home" >
      <div class="mx-0 content-center">
      <Slider  {...settings}>
      <div class="relative w-full h-screen">
        <div
            class="w-full h-full bg-[url('/party1.jpg')] bg-cover bg-center blur-sm">
        </div>
        <div
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center">
            <h1 class="mt-5 text-center text-7xl text-white font-semibold drop-shadow-lg">
            DDelTech MUN Is Here With It's 12th Edition.
            </h1>
            <button class="flex mx-auto mt-16 text-white border-0 py-2 px-8 focus:outline-none bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded text-lg">
          Register Now
        </button>
        </div>
    </div>
    </Slider>
    </div>
    </section>
  );
};

export default Main;

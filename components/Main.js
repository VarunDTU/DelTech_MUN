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
    <section class='text-gray-600 -z-50' id="home" >
      <div class="mx-0 content-center">
      <Slider  {...settings}>
      <div class="w-full h-fit">
          <div class='bg-[url("/party1.jpg")] object-cover h-screen w-full bg-cover bg-center p-12'>
          <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            DELTECH MUN
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them man bun deep jianbing selfies heirloom prism
            food truck ugh squid celiac humblebrag.
          </p>
        </div>
        <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Register Now
        </button>
      </div>
          </div>
      </div>
      <div class="w-full h-fit">
          <div class='bg-[url("/party1.jpg")] object-cover h-screen w-full bg-cover bg-center p-12'>
          <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            DELTECH MUN
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them man bun deep jianbing selfies heirloom prism
            food truck ugh squid celiac humblebrag.
          </p>
        </div>
        <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Register Now
        </button>
      </div>
          </div>
      </div>
      
    </Slider>
    </div>
    </section>
  );
};

export default Main;

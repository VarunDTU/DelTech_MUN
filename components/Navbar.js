import React from "react";

const Navbar = () => {
  return (
    <header class="text-gray-600 body-font sticky top-0 backdrop-blur">
      <div class="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
        
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img class="h-8 pr-1 mx-auto" src="/deltech-logo.png"></img>
          <span class="ml-3 text-xl">DelTech MUN</span>
        </a>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a class="mr-5 hover:text-red-600">HOME</a>
          <a class="mr-5 hover:text-red-600">ABOUT</a>
          <a class="mr-5 hover:text-red-600">SPEAKERS</a>
          <a class="mr-5 hover:text-red-600">EVENTS</a>
          <a class="mr-5 hover:text-red-600">CONTACT</a>
        </nav>
        <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-red-800 hover:text-white rounded text-base mt-4 md:mt-0">
          Register Now
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;

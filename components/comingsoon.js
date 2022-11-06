import React from 'react'


const Comingsoon=()=>{
    return(
        <section className='text-gray-600 -z-50 w-screen' id="temp" >
      <div className="mx-0 my-0 content-center">
      
      <div className="relative w-full h-96">
        <div
            className="w-full h-96 bg-[url('/party2.jpg')] bg-cover bg-center blur-sm">
        </div>
        <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center">
            <h1 className="mt-5 text-center text-7xl text-white font-semibold drop-shadow-lg">
            COMING SOON...
            </h1>
            
        </div>
    </div>
   
    </div>
    </section>
    );
};
export default Comingsoon;
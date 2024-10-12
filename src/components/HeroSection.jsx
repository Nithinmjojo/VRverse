import React from 'react'
import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"


const HeroSection = () => {
  return (
   <div className="flex flex-col items-center mt-6 lg:mt-20">
    <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        VRverse build tools 
         <span className='bg-gradient-to-r from-blue-500 to-red-700 text-transparent bg-clip-text'> for developers</span>
    </h1>
    <p className='mt-10 text-lg text-center text-neutral-400 max-w-4xl'>Unleash your creativity and bring your VR visions to life with our easy-to-use development tools. Start your journey today and transform your ideas into immersive experiences!</p>
    <div className="flex justify-center my-10">
        <a href="#" className='bg-gradient-to-r from-blue-600 to-red-600 py-3 px-6 rounded-full' >Start for FREE!</a>
        <a href="" className="py-3 px-4 mx-3 rounded-full border">Documentation</a>
    </div>
    <div className='mt-10 flex justify-center'>
        <video  autoPlay loop muted className='rounded-lg w-1/2 border border-blue-300 shadow-red-500 mx-2 my-4'>
            <source src={video1} type='video/mp4'/>
            Sorry, Unfortunately your browser does not support video playback.
        </video>
        <video  autoPlay loop muted className='rounded-lg w-1/2 border border-blue-300 shadow-red-500 mx-2 my-4'>
            <source src={video2} type='video/mp4'/>
            Sorry, Unfortunately your browser does not support video playback.
        </video>
    </div>
   </div>
  )
}

export default HeroSection
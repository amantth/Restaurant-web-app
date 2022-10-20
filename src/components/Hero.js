import React from 'react'
import pic from "../assets/pic.jpg"

const Hero = () => {
  return (
      <div className='p-4 max-w-[1640px] mx-auto'>
          <div className='relative max-h-[500px]'>
          <div className=' absolute rounded-[40px] w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
              <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg-text-7xl font-bold'>The <span className='text-orange-400'>Best</span></h1>
              <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg-text-7xl font-bold'> <span className='text-orange-400'>Food </span>Delivered</h1>
        </div>
        
        <img className='max-h-[500px] w-full object-cover rounded-[40px]' src={pic} alt="" />
          </div>
     </div>
  ) 
}

export default Hero

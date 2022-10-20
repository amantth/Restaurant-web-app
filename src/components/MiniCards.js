import React from 'react'
import pizza from "../assets/pizza.jpg"

function MiniCards({name,imageUrl,p2}) {
    return (
        <div>     
      <div className='relative rounded-xl  '>
              <div className=" pb-[10px] absolute rounded-xl w-full h-full bg-black/50 text-white">
                  <p className='font-bold text-2xl px-2 pt-4'>{name}</p>
                  <p className='px-2'>{p2}</p>
                  <button className="border-white bg-white text-black mx-2 absolute bottom-4 justify-center">Order Now</button>
              </div>
              <img src={imageUrl} className="max-h-[160px] md:max-h-[200px] w-full rounded-xl object-cover" alt="" />
            </div>
            </div>
  )
}

export default MiniCards

import React from 'react'
import MiniCards from './MiniCards'
import pizza from "../assets/pizza.jpg"
import pic from "../assets/pic.jpg"
import chicken from "../assets/chicken.jpg"


function Card() {
  return (
    <div className=' max-w-[1640px] mx-auto py-12 grid md:grid-cols-3 gap-6 p-4'>
          {/* card */}
          <MiniCards name="Suns out BOGOG's Out" imageUrl={pizza} p2="Through 8/26" />
          <MiniCards name="New restaurants" imageUrl={pic} p2="Added Daily"/>
          <MiniCards name="We Deliver Desserts Too" imageUrl={chicken} p2="Tasty Treats " />
    </div>
  )
}

export default Card

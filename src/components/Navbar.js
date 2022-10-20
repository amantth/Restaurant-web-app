import React,{useState} from 'react'
import {AiOutlineClose,AiFillTag, AiOutlineMenu, AiOutlineSearch} from "react-icons/ai"
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs"
import { TbTruckDelivery } from "react-icons/tb"
import { FaUserFriends } from "react-icons/fa"
import { MdFavorite, MdHelp} from "react-icons/md"
import {FaWallet} from "react-icons/fa"


function Navbar() {
    const [nav,setNav]=useState(false)
  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
          <div className=' flex items-center '>
           <div onClick={()=>setNav(!nav)} className='cursor-pointer'>
             <AiOutlineMenu size={30}/> 
          </div>
          <div className='text-2xl sm:text-3xl lg:text-3xl px-1 '>
              <h1 className=''>Best <span className='font-bold'>Eats</span></h1>
          </div>
          <div className=' hidden lg:flex ml-[10px] bg-gray-200 rounded-full p-1 text-[14px]'>
              <p className='bg-black text-white rounded-full p-2'>Delivery</p>
              <p className='p-2'>PickUp</p>
          </div>
          </div> 
          {/* search input */}
          <div className='flex lg:ml-[75px] lg:w-[600px] items-center p-3 w-[200px] mx-3 sm:w-[300px] lg:w-[400px] bg-gray-300 rounded-full'>
              <div className='px-1'>
                  <AiOutlineSearch size={20} />
              </div>
              <div className='flex  justify-center items-center w-full bg-gray-300'>
                  <input placeholder='Search Food' type="text" className='border-none p-1 w-full bg-transparent text-[20px] outline-none ' />
              </div>
              
          </div>
              <button className='bg-black rounded-full text-white hidden md:flex items-center lg:mr-[100px]  py-2'>
                  <BsFillCartFill size={20} className=' mr-2 w-[40px] h-[40px] '/>Cart
          </button>
          {nav? <div className='fixed bg-black/80 top-0 left-0 z-10 w-full h-screen'>
  
          </div>: " "}
          
          {/* side drawer */}
          <div className={nav?'fixed top-0 left-0 w-[300px] duration-800 z-10 h-screen bg-white':'fixed top-0 right-[100%] w-[300px] duration-300 z-10 h-screen bg-white'}>
              <AiOutlineClose onClick={()=>setNav(!nav)} size={30} className='cursor-pointer absolute top-4 right-4' />
          <h2 className='p-4 text-2xl'>Best <span className='font-bold'>Eats</span></h2>
          
              <nav>
                  <ul className='flex flex-col p-4 text-grey-800'>
                      <li className='text-xl py-4 flex '><TbTruckDelivery size={25} className='mr-4' />Orders</li>
                      <li className='text-xl py-4 flex '><MdFavorite size={25} className='mr-4' />Favorites</li>
                      <li className='text-xl py-4 flex '><FaWallet size={25} className='mr-4' />Wallets</li>
                      <li className='text-xl py-4 flex '><MdHelp size={25} className='mr-4' />Help</li>
                      <li className='text-xl py-4 flex '><AiFillTag size={25} className='mr-4' />Promotion</li>    
                      <li className='text-xl py-4 flex '><BsFillSaveFill size={25} className='mr-4' />Best Ones</li>              
                      <li className='text-xl py-4 flex '><FaUserFriends size={25} className='mr-4' />Invite Friends</li>              
                      
                 </ul> 
          </nav>
          
          </div>
      </div>
     
  )
}

export default Navbar

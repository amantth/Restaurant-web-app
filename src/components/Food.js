import React ,{useState} from 'react'
import {data} from "../data/data"
function Food() {

    const [foods, setFoods] = useState(data)
    
    const fillterType = (catagory) => {
        setFoods(
            data.filter((item) => {
                return item.category === catagory;
            })
        )
    }

    const fillterPrice = (price) => {
        setFoods(
            data.filter((item) => {
                return item.price === price;
            })
        );
    };

    
  return (
    <div className='max-w-[1640px] m-auto py-5 px-4'>
          <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Ranked</h1>
          <div className='mb-[10px]'>
              <h1 className='font-bold text-gray-700'>Fillter Type </h1>
              <div className='flex  justify-between flex-wrap'>
                  <button onClick={()=>setFoods(data)} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white' >All</button>
                  <button onClick={()=>fillterType("burger")} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white'>Burger</button>
                  <button onClick={()=>fillterType("pizza")} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white'>Pizza</button>
                  <button onClick={()=>fillterType("salad")} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white'>Salad</button>
                  <button onClick={()=>fillterType("chicken") } className='m-1 border-orange-600   text-orange-600 hover:bg-orange-500 hover:text-white'>Chicken</button>
              </div>
          </div>
          <div>
              <h1 className='pb-1 font-bold text-gray-700'>Fillter Price</h1>
              <div className='flex justify-between max-w-[390px]'>
                  <button onClick={() => setFoods(data)} className='border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white'>All</button>
                  <button onClick={()=>fillterPrice("$")} className='border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white'>$</button>
                  <button onClick={()=>fillterPrice("$$")} className='border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white'>$$</button>
                  <button onClick={()=>fillterPrice("$$$$")}className='border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white'>$$$$</button>
                  <button onClick={()=>fillterPrice("$$")}className='border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white'>$$</button>
                  <button onClick={()=>fillterPrice("$$$")} className='border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white'>$$$</button>
              </div>
          </div>

{/* display images of foods */}
          <div className='grid mt-[20px] grid-cols-2 gap-6 pt-4 lg:grid-cols-4'>
              {foods.map((item, index) => (
                  <div key={index} className=' duration-[1200] hover:rotate-1 hover:scale-110 border shadow-lg rounded-lg lg:grid-cols-4'>
                      <img className='w-full h-[200px] rounded-lg object-cover' src={item.image} alt={item.name} />
                      <div className='p-4 px-2 flex justify-between' >
                          <p className=' font-bold'>{item.name }</p>
                          <p><span className='bg-orange-500  text-white p-2 rounded-full'>{ item.price}</span></p>
                      </div>
                   </div>
               ))} 
          </div>
          </div>
    
  )
}

export default Food

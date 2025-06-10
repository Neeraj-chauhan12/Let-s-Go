import React from 'react'
import { GiCash } from "react-icons/gi";
import { IoLocation } from "react-icons/io5";

import { IoIosLogOut } from "react-icons/io";

const Riding = () => {
  return (
    
      <>
          <div className='h-screen w-screen'>
            <div className='h-1/2  w-screen relative'>
            <div className='flex w-screen px-2 py-2 justify-between items-center absolute'>
              <h1 className='text-2xl font-bold'>Let's Go</h1>
              <IoIosLogOut className='text-3xl h-10 w-10 bg-white p-2 rounded-4xl' />
            </div>
            <img className='h-full w-full' src="https://miro.medium.com/max/1280/0*gwMx05pqII5hbfmX.gif" alt="" />
            </div>
    
            <div className='h-1/2 w-screen px-2'>
              <div className='flex justify-between items-center border-b-2 border-gray-600 py-5'>
              <img className='h-24 w-24 ' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
              <div className='text-right '>
               <h1 className='text-2xl'>Neeraj chauhan</h1>
               <h1 className='text-2xl font-bold'>UP80 FC 7217</h1>
               <h1 className='text-sm text-gray-500'>Maruti suzuki</h1>
              </div>
            </div>
    
            <div className='flex flex-row border-b-2 border-gray-600 px-3 py-2'>
              <div className='flex justify-center items-center text-3xl pr-5'>
                <IoLocation />
              </div>
              <div>
                <h1 className='text-2xl font-bold'>568/11d</h1>
                <h1>rambagh agra</h1>
              </div>
    
            </div>
    
             <div className='flex flex-row border-b-2 border-gray-600 px-3 py-2'>
              <div className='flex justify-center items-center text-3xl pr-5'>
                <GiCash />
              </div>
              <div>
                <h1 className='text-2xl font-bold'>198.56</h1>
                <h1>cash cash</h1>
              </div>
              
            </div>
              <button className='bg-green-500 rounded-2xl text-white mt-4 py-2 w-full'>Make a Payment</button>
            </div>
    
          </div>
        </>
  )
}

export default Riding

import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { GiCash } from "react-icons/gi";
import { IoLocation } from "react-icons/io5";

const ConfirmRide = (props) => {
  return (
    <>
      <div>

      <div className='flex justify-center items-center py-2'>
       <MdKeyboardArrowDown onClick={()=>{props.setConfirmride(false)}} className='text-4xl text-gray-600'/>
      </div>



       <h1 className='text-3xl font-bold'>Confirm your ride</h1>
        <div className='flex justify-center items-center mb-5 border-b-2 border-gray-500 py-4'>
             <img className='h-40 w-40' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
        </div>

        <div className='py-2 px-2 border-b-2 border-black flex flex-row'>
            <div className=' flex justify-center items-center pr-6 text-2xl'>
          <GoLocation />
        </div>
        <div>
  <h1 className='text-2xl font-bold'>546/11-A</h1>
            <h2>seeta nager rambagh agra</h2>
        </div>
          
          
        </div >

        <div className='py-2 px-2 border-b-2 border-black flex flex-row'>
            <div className=' flex justify-center items-center pr-6 text-2xl'>
               <IoLocation/>
             </div>
             <div>
           <h1 className='text-2xl font-bold'>Third wave coffee</h1>
            <h2>37th cross Rd pws Quarter 1st ,floor hsd layout agra up</h2>  
             </div>
            
            
        </div>
        <div className='py-2 px-2 border-b-2 border-black flex-row flex'>
            <div className=' flex justify-center items-center pr-6 text-2xl'>
         <GiCash/>
        </div>
            <div>
                <h1 className='text-2xl font-bold'>₹194.30</h1>
            <h2>Cash</h2>
         </div>
            
            
        </div>

        <button onClick={()=>{props.setlookingdriver(true),props.setConfirmride(false)}} className='w-full bg-green-400 rounded-2xl border-2 border-green-800 my-4 py-2 text-2xl'>Confirm ride</button>
      </div>
    </>
  )
}

export default ConfirmRide

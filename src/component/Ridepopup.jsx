import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { GiCash } from "react-icons/gi";
import { IoLocation } from "react-icons/io5";

const Ridepopup = (props) => {
  return (
    <>
          <div>
    
          <div className='flex justify-center items-center py-2'>
           <MdKeyboardArrowDown onClick={()=>{props.setridepop(false)}}  className='text-4xl text-gray-600'/>
          </div>
    
    
    
           <h1 className='text-3xl font-bold'>New ride Available</h1>
            <div className='flex justify-between items-center bg-orange-500 rounded-md py-4 px-2 my-5 text-black '>
               <div className='flex justify-center items-center gap-2  '>
              <img  className='w-12 h-12 rounded-full' src="https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp" alt="" />
              <h1 className='uppercase text-2xl'>neeraj</h1>
            </div>
            <div>
              <h1 className='text-2xl font-bold'>2.2KM</h1>
            
            </div>

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
    
            <button onClick={()=>{props.setconfirmridepop(true)}} className='w-full bg-green-400 rounded-2xl border-2 border-green-800 mt-5 py-2 text-2xl'>Confirm ride</button>
            <button onClick={()=>{props.setridepop(false)}}  className='w-full bg-gray-300  rounded-2xl border-2 border-gray-900 my-2 py-2 text-2xl'>Ignore ride</button>
          </div>
        </>
      
  )
}

export default Ridepopup

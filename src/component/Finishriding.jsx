import React from 'react'
import { GoLocation } from "react-icons/go";
import { GiCash } from "react-icons/gi";
import { IoLocation } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Finishriding = () => {
  return (
       <>
                  <div className='px-2 py-10'>
            
                  
            
                   <h1 className='text-2xl font-bold'>Finish this ride</h1>
                    <div className='flex justify-between items-center bg-white border-2 border-green-500 rounded-md mb-10 py-4 px-2 my-5 text-black '>
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
    
                  
                  
            
                    <Link to={'/captain-home'}  className=' flex w-full justify-center items-center bg-green-400 rounded-2xl border-2 border-green-800 mt-16 py-2 text-2xl'>Finish ride</Link>
                   
                  </div>
                </>
  )
}

export default Finishriding

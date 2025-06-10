import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef, useState }  from 'react'
import { IoIosLogOut } from "react-icons/io";
import { Link } from 'react-router-dom';
import Finishriding from '../component/Finishriding';



const Captainriding = (props) => {

  const [finishride,setfinishride]=useState(false)
  const finishrideref=useRef(null)

  useGSAP(function(){
    if(finishride){
    gsap.to(finishrideref.current,{
      transform:'translateY(0)'
    })
  }else{
    gsap.to(finishrideref.current,{
        transform:'translateY(100%)'
    })
  }
  },[finishride])

  return (
    <>
    <div className='h-screen w-screen'>
       <div className='h-[85vh] w-screen relative'>
                <div className='flex w-screen px-2 py-2 justify-between items-center absolute'>
                              <h1 className='text-2xl font-bold'>Let's Go</h1>
                              <IoIosLogOut className='text-3xl h-10 w-10 bg-white p-2 rounded-4xl' />
                  </div>
                  <img className='h-full' src="https://miro.medium.com/max/1280/0*gwMx05pqII5hbfmX.gif" alt="" />
                </div>
        
      <div className='h-[15vh] w-screen flex justify-around items-center bg-yellow-200 '>
        <h1 className='font-bold '>4 KM away</h1>
        <button onClick={()=>{setfinishride(true)}} className='bg-green-500 py-2 px-10 rounded '>Complete ride</button>

      </div>

   <div ref={finishrideref} className='w-full px-3 bottom-0 translate-y-full bg-white fixed z-10  py-3'>
               <Finishriding />
           </div>

    </div>
      
    </>
  )
}

export default Captainriding

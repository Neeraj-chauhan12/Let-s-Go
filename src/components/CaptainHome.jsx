import React, { useRef, useState } from 'react'

import { MdHome } from "react-icons/md";
import { Link } from 'react-router-dom';
import CaptainDetail from '../component/CaptainDetail';
import { IoIosLogOut } from "react-icons/io";
import Ridepopup from '../component/Ridepopup';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ConfirmRide from '../component/ConfirmRide';
import Confirmridepopup from '../component/Confirmridepopup';



const CaptainHome = () => {

  const[ridepop,setridepop]=useState(true)
  const ridepopref=useRef(null)

  const [confirmridepop,setconfirmridepop]=useState(false)
  const confirmridepopref=useRef(null)



  useGSAP(function(){
    if(ridepop){
    gsap.to(ridepopref.current,{
      transform:'translateY(0)'
    })
  }else{
    gsap.to(ridepopref.current,{
        transform:'translateY(100%)'
    })
  }
  },[ridepop])

  //confirm ride gsap
  useGSAP(function(){
    if(confirmridepop){
    gsap.to(confirmridepopref.current,{
      transform:'translateY(0)'
    })
  }else{
    gsap.to(confirmridepopref.current,{
        transform:'translateY(100%)'
    })
  }
  },[confirmridepop])



  


  
   

  return (
    
        <>

        <div className=' h-screen w-screen'>
          <div className='h-[65vh] w-screen relative'>
          <div className='flex w-screen px-2 py-2 justify-between items-center absolute'>
                        <h1 className='text-2xl font-bold'>Let's Go</h1>
                        <IoIosLogOut className='text-3xl h-10 w-10 bg-white p-2 rounded-4xl' />
            </div>
            <img className='h-full' src="https://miro.medium.com/max/1280/0*gwMx05pqII5hbfmX.gif" alt="" />
          </div>

            <div className='flex h-[35vh] w-screen flex-col  py-2 px-5 '>
            <div className='flex justify-between items-center '>
               <div className='flex justify-center items-center gap-4 '>
              <img  className='w-12 h-12 rounded-full' src="https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp" alt="" />
              <h1 className='uppercase text-2xl'>neeraj</h1>
            </div>
            <div>
              <h1 className='text-2xl font-bold'>₹234.43</h1>
              <h1>Earned</h1>
            </div>

            </div>
           
           

            <div className='py-4 px-1 bg-gray-200 mt-7 rounded '>
              <CaptainDetail />
            </div>
          </div>


             <div ref={ridepopref} className='w-full px-3 bottom-0 translate-y-full bg-white fixed z-10  py-3'>
               <Ridepopup  setridepop={setridepop} setconfirmridepop={setconfirmridepop} />
           </div>

           <div ref={confirmridepopref} className='w-full px-3 bottom-0 translate-y-full bg-white fixed z-10  py-3'>
               <Confirmridepopup setconfirmridepop={setconfirmridepop} />
           </div>






           


        </div>
       
         
        </>
  )
}

export default CaptainHome

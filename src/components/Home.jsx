import React, { useRef, useState } from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import {useGSAP}from '@gsap/react'
import gsap from 'gsap';
import Locationsearch from './Locationsearch';
import Vehiclechoose from '../component/Vehiclechoose';
import ConfirmRide from '../component/ConfirmRide';
import Lookingfordriver from '../component/Lookingfordriver';



const Home = () => {
  const [pickup ,setpickup]=useState('');
  const[destination,setdestination]=useState('');
  const[panelopen,setpenelopen]=useState(false)
  const penelref=useRef(null)
  const panelclose=useRef(null)

  const [Vehiclepanel,setVehiclepanel]=useState(false);
  const vehiclepanelref=useRef(null)


  const [Confirmride,setConfirmride]=useState(false)
  const ConfirmRideref=useRef(null)

  const [lookingdriver,setlookingdriver]=useState(false)
   const lookingdriverref=useRef(null)





  function submithandle (e){
    e.preventDefault();
  }

  useGSAP(function(){
    if(panelopen){
    gsap.to(penelref.current,{
      height:'70%'
    })

    gsap.to(panelclose.current,{
      opacity:1
    })
  }else{
    gsap.to(penelref.current,{
      height:'0%'
    })
    gsap.to(panelclose.current,{
      opacity:0
    })
  }

  } ,[panelopen])

  useGSAP(function(){
    if(Vehiclepanel){
    gsap.to(vehiclepanelref.current,{
      transform:'translateY(0)'
    })
  }else{
    gsap.to(vehiclepanelref.current,{
        transform:'translateY(100%)'
    })
  }
  },[Vehiclepanel])


  // CONFIRM RIDE 
 useGSAP(function(){
    if(Confirmride){
    gsap.to(ConfirmRideref.current,{
      transform:'translateY(0)'
    })
  }else{
    gsap.to(ConfirmRideref.current,{
        transform:'translateY(100%)'
    })
  }
  },[Confirmride])

  //LOOKING FOR THE DRIVER
  useGSAP(function(){
    if(lookingdriver){
    gsap.to(lookingdriverref.current,{
      transform:'translateY(0)'
    })
  }else{
    gsap.to(lookingdriverref.current,{
        transform:'translateY(100%)'
    })
  }
  },[lookingdriver])

  return (
    <>
    <div className='h-screen w-screen relative overflow-hidden'>
    <div style={{backgroundImage:'url(https://miro.medium.com/max/1280/0*gwMx05pqII5hbfmX.gif)',backgroundSize:'cover', backgroundPosition:'top'}} className='h-screen w-screen'> 
    </div>
     
    <div className='h-screen w-screen flex flex-col justify-end  absolute top-0'>
{/* 
          LOCATION AND DESTINATUON */}
        <form onSubmit={(e)=>{submithandle(e)}} className='h-[30%] w-full bg-white py-3 px-5 '>
          <div className='flex justify-between py-3 text-3xl'>
               <h1 className='text-3xl font-semibold text-black mb-2'>Find location</h1>
               <h1 ref={panelclose} onClick={()=>{setpenelopen(false)}}><MdKeyboardArrowDown /> </h1>
          </div>
        
        

            <input
            //onClick={(e)=>{submithandle(e)}} 
            onClick={()=>{setpenelopen(true)}} 
            value={pickup}
            onChange={(e)=>{setpickup(e.target.value)}}
            className='py-2 px-5 text-2xl rounded mb-4 w-full bg-gray-200' 
            placeholder='Add a pick up location' 
            type="text" 
           
            
            />

            <input
             onClick={()=>{setpenelopen(true)}} 
            value={destination} 
            onChange={(e)=>{setdestination(e.target.value)}}
            className='py-2 px-5 text-2xl rounded  w-full bg-gray-200' 
            placeholder='Enter your destination' 
            type="text"
             />
         
        </form>

        {/* LOCATION PANEL */}
        <div  ref={penelref} className=' px-6 w-full  bg-white'>
           <Locationsearch  setpenelopen={setpenelopen} setVehiclepanel={setVehiclepanel} />
        </div>




         {/* CHOOSE VICHLE */}
        <div ref={vehiclepanelref} className='w-full px-3 translate-y-full bg-white fixed z-10  py-3'>
      
          <Vehiclechoose   vehiclepanelref={vehiclepanelref} setConfirmride={setConfirmride} setVehiclepanel={setVehiclepanel} />

        </div>


        {/* CONFIRM RIDE PAGE */}
         <div ref={ConfirmRideref} className='w-full px-3 translate-y-full bg-white fixed z-10  py-3'>
      
          <ConfirmRide  setlookingdriver={setlookingdriver} setVehiclepanel={setVehiclepanel} setConfirmride={setConfirmride} />

        </div>

        {/* LOOKING FOR THE DRIVER*/}
         <div ref={lookingdriverref} className='w-full px-3 translate-y-full bg-white fixed z-10  py-3'>
      
          <Lookingfordriver  />

        </div>

    </div>
    </div>
    
    
    </>
  )
}

export default Home

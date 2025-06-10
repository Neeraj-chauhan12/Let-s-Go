import React from 'react'
import { FaUserAlt } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

const Vehiclechoose = (props) => {
  return (
    <div>

            <div className='flex justify-between '>
                    <h1 className=' text-2xl font-semibold'>Choose Vichcle</h1>
                    <MdKeyboardArrowDown ref={props.vehiclepanelref}  onClick={()=>{props.setVehiclepanel(false)}} className='text-3xl' />
                  </div>
                 
                <div onClick={()=>{props.setConfirmride(true),props.setVehiclepanel(false)} }className='flex justify-between  my-5 border-2 border-gray-200 py-1 rounded-2xl px-2 active:border-2 active:border-black items-center'>
                  <img className='h-20 w-20' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
                  <div className=''>
                    <h1 className='flex gap-3 '>Let's car <span className='flex gap-1'><FaUserAlt />4</span></h1>
                    <h1>2 min away. 15:25</h1>
                    <h1>Affordable,compact rides</h1>
                  </div>
        
                  <h1>₹194.56</h1>
                </div>
                <div onClick={()=>{props.setConfirmride(true),props.setVehiclepanel(false)}} className='flex justify-between my-5 border-2 border-gray-200 py-1 rounded-2xl px-2 active:border-2 active:border-black items-center'>
                  <img className='h-14 w-20' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_637/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
                  <div className=''>
                    <h1 className='flex gap-3 '>Moto <span className='flex gap-1'><FaUserAlt />4</span></h1>
                    <h1>2 min away. 15:25</h1>
                    <h1>Affordable,compact rides</h1>
                  </div>
        
                  <h1>₹194.56</h1>
                </div>
        
                <div onClick={()=>{props.setConfirmride(true),props.setVehiclepanel(false)}} className='flex justify-between border-2 border-gray-200 my-5 py-1 rounded-2xl px-2 active:border-2 active:border-black items-center'>
                  <img className='h-20 w-20' src="https://i.pinimg.com/originals/93/c1/05/93c105244c0a3de81267a89cb13386f7.png" alt="" />
                  <div className=''>
                    <h1 className='flex gap-3 '>Premier <span className='flex gap-1'><FaUserAlt />4</span></h1>
                    <h1>2 min away. 15:25</h1>
                    <h1>Affordable,compact rides</h1>
                  </div>
        
                  <h1>₹194.56</h1>
                </div>
        
                 
                <div onClick={()=>{props.setConfirmride(true),props.setVehiclepanel(false)}} className='flex justify-between  my-5 border-2 border-gray-200 py-1 rounded-2xl px-2 active:border-2 active:border-black items-center'>
                  <img className='h-14 w-20' src="https://clipart-library.com/2023/Uber_Auto_312x208_pixels_Mobile.png" alt="" />
                  <div className=''>
                    <h1 className='flex gap-3 '>Auto <span className='flex gap-1'><FaUserAlt />4</span></h1>
                    <h1>2 min away. 15:25</h1>
                    <h1>Affordable,compact rides</h1>
                  </div>
        
                  <h1>₹194.56</h1>
                </div>
        
      
    </div>
  )
}

export default Vehiclechoose

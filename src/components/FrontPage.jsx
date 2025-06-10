import React from 'react'
import traffic from '../../public/traffic.jpg'
import { Link } from 'react-router-dom'


const FrontPage = () => {
  return (
    <>
    <div className='h-screen w-screen' style={{backgroundImage:`url(${traffic})`,backgroundSize:'cover', backgroundPosition:'top'}}>
        <h1 className='text-3xl text-white py-5 px-6 bg-black '>Let's GO</h1>

        <div className='h-36 w-full flex justify-center items-center gap-3 flex-col absolute bottom-0 bg-white text-black'>
            <h1 className='text-3xl font-bold '>Get Started with Let's Go</h1>
            <Link className='w-[90vw] text-2xl bg-black text-white flex items-center justify-center py-2 ' to="/login">Continue</Link>
        </div>

    </div>
      
    </>
  )
}

export default FrontPage

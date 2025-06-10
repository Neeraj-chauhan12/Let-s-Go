import React from 'react'
import { IoLocation } from "react-icons/io5";

const Locationsearch = (props) => {

const data=[
  "11/32c seeta nagar rambagh agra 282006",
  "11/42c seeta nagar rambagh agra 282001",
  "13/12c seeta nagar rambagh agra 282003",
  "15/45c seeta nagar rambagh agra 282007",
]

  return (
    <>
      {
        data.map(function(elem,idx){
          return(
            <div onClick={()=>{
              props.setVehiclepanel(true),
              props.setpenelopen(false)
              }} className='flex gap-4 border-2 border-gray-200 rounded-2xl py-2 px-3 active:border-black active:border-2 mt-5' key={idx}>
           <h1 className='py-1 px-2 h-10 w-10 bg-gray-100 rounded-4xl text-3xl flex justify-center items-center'><IoLocation /></h1>
           <h1>{elem}</h1>
            </div>
          )

        })
      }
    </>
  )
}

export default Locationsearch

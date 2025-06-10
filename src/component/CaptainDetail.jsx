import React from 'react'
import { MdAccessTime } from "react-icons/md";
import { MdNoteAdd } from "react-icons/md";

const CaptainDetail = (props) => {
  return (
    <>
      <div className='flex justify-center items-center gap-3'>
        <div  className='flex justify-center flex-col items-center'>
            <MdAccessTime />
          <h1 >10.4</h1>
          <h1>Hours online</h1>
        </div>
        <div className='flex justify-center flex-col items-center'>
            <MdAccessTime />
          <h1>10.4</h1>
          <h1>Hours online</h1>

        </div>
        <div className='flex justify-center flex-col items-center'>
            <MdNoteAdd />
          <h1>10.4</h1>
          <h1>Hours online</h1>

        </div>
      </div>
    </>
  )
}

export default CaptainDetail

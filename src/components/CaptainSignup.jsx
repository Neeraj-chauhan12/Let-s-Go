import React from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { MdOutlineDirectionsBike } from "react-icons/md";
import { useAuthe } from '../context/CaptainProvider';

const CaptainSignup = () => {

  const [authcaptain,setauthcaptain]=useAuthe();

    const {
          register,
          handleSubmit,
          formState: { errors },
        } = useForm();
      
       async function onSubmit(data){
          const captainsignupdata={
            name:data.name,
            email:data.email,
            password:data.password,
            vichle:data.vichle,
            vichlenumber:data.vichlenumber
          }

          await axios
          .post('http://localhost:3000/captain/signup',captainsignupdata)
          .then((response)=>{
            if (response.data) {
              alert("succesfully register");
            }
            localStorage.setItem("hack", JSON.stringify(response.data));
            setauthcaptain(response.data)
          })
          .catch((error)=>{
            if(error.response){
              alert('error',error.response.data.error)
            }
          })

          console.log(captainsignupdata)
      
        }

  return (
    <>
    <div className=' h-screen w-screen px-5 py-5 flex justify-between flex-col'>

      <form className='flex flex-col '
      onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className='text-3xl font-bold mb-5 flex flex-row gap-2'>Let's Go <MdOutlineDirectionsBike /></h1>

        <h1 className='text-2xl '>What's your name</h1>
        <input 
        required
        className='bg-gray-300 w-full mt-1  px-1 py-2 rounded  mb-5'
        type="text"  
        placeholder='email@example.com'
        {...register('name', { required: true })}
        />

        <h1 className='text-2xl '>What's your email</h1>
        <input 
        required
        className='bg-gray-300 w-full mt-1  px-1 py-2 rounded  mb-5'
        type="email"  
        placeholder='email@example.com'
        {...register('email', { required: true })}
        />

        <h1>Enter Password</h1>
        <input 
        required
        className='bg-gray-300 w-full mt-1 py-2 rounded px-1  mb-5 '
        type="password"  
        placeholder='password'
        {...register('password', { required: true })}
        />

       <h1>Vichle number</h1>
        <input 
        required
        className='bg-gray-300 w-full mt-1 py-2 rounded px-1  mb-5 '
        type="text"  
        placeholder='Vichle name...'
        {...register('vichle', { required: true })}
        />

<h1>Vichle number</h1>
        <input 
        required
        className='bg-gray-300 w-full mt-1 py-2 rounded px-1  mb-5 '
        type="text"  
        placeholder='Plate number'
        {...register('vichlenumber', { required: true })}
        />
      

        <button className='flex justify-center items-center text-white w-full bg-black rounded text-2xl py-2'>Create account</button>
        <h1 className='text-black'>Have an account? <Link className='text-blue-500' to='/captain-login'>login as captain</Link></h1>
      </form>
    

    <Link to='/signup' className='bg-orange-500 text-white flex justify-center items-center text-2xl py-2 '>Sign in as User</Link>
    
    </div>
      
    </>
  )
}

export default CaptainSignup

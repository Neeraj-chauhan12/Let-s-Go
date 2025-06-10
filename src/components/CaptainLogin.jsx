import React from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { MdOutlineDirectionsBike } from "react-icons/md";
import { useAuthe } from '../context/CaptainProvider';

const CaptainLogin = () => {

  const [authcaptain,setauthcaptain]=useAuthe();

     const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
     async function onSubmit(data){
        const logindata={
          email:data.email,
          password:data.password
        }

        await axios
        .post('http://localhost:3000/captain/login',logindata)
        .then((response)=>{
          if (response.data) {
            alert("succesfully login");
          }
          localStorage.setItem("hack", JSON.stringify(response.data));
          setauthcaptain(response.data);
    
        })
        .catch((error)=>{
          if(error.response){
            alert('error',error.response.data.error)
          }
        })
      

        //console.log(logindata)
    
      }
  return (
    <>
        <div className=' h-screen w-screen px-5 py-5 flex justify-between flex-col'>
    
          <form className='flex flex-col '
          onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className='text-3xl font-bold mb-5 flex flex-row gap-2'>Let's Go <MdOutlineDirectionsBike /> </h1>
    
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
    
            <button className='flex justify-center items-center text-white w-full bg-black rounded text-2xl py-2'>Login as Captain</button>
            <h1 className='text-black'>New here? <Link className='text-blue-500' to='/captain-signup'>Create new Account as captain</Link></h1>
          </form>
        
    
        <Link to='/signup' className='bg-green-500 text-white flex justify-center items-center text-2xl py-2 '>Sign in as User</Link>
        
        </div>
          
        </>
  )
}

export default CaptainLogin

import React from 'react'
import {Navigate, Route,Routes} from 'react-router-dom'
import FrontPage from './components/FrontPage'
import Login from './components/Login'
import Sigup from './components/Sigup'
import CaptainLogin from './components/CaptainLogin'
import CaptainSignup from './components/CaptainSignup'
import Home from './components/Home'
import { useAuth } from './context/AuthProvider'
 import { useAuthe } from './context/CaptainProvider'
import CaptainHome from './components/CaptainHome'
import Riding from './components/Riding'
import Captainriding from './components/Captainriding'




const App = () => {

  const [authcaptain,setauthcaptain]=useAuthe();
  const [authuser,setauthuser]=useAuth();
 
  

  return (
    <Routes>
      <Route path='/' element={<FrontPage />} />
      <Route path='/riding' element={<Riding />} />
      
      

     {/* // <Route path='/home' element={<Home />} /> */}
     <Route path='/home' element={authuser? <Home/> :(<Navigate to={"/login"}/>) } />
      <Route path='/login' element={authuser ? <Navigate to="/home" />:<Login />} />
      <Route path='/signup' element={authuser ? <Navigate to="/home" /> :<Sigup />} />
        <Route path='/riding' element={authuser ? <Navigate to="/riding" /> :<Sigup />} />

        <Route path='/captain-riding' element={<Captainriding />} />
      
         <Route path='/captain-riding'  element={authcaptain? <Captainriding />:(<Navigate to={"/captain-login"} />)} />
       <Route path='/captain-home'  element={authcaptain? <CaptainHome />:(<Navigate to={"/captain-login"} />)} />
      <Route path='/captain-login' element={authcaptain? <Navigate to={"/captain-home"} /> :<CaptainLogin />} />
      <Route path='/captain-signup' element={authcaptain? <Navigate to={"/captain-home"} />: <CaptainSignup />} />

    </Routes>
  )
}

export default App

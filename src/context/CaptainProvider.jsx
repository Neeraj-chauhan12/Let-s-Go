import React, { createContext, useContext, useState } from 'react'
import Cookies from 'js-cookie'



export const captaincontext=createContext()

 export const CaptainProvider = ({children}) => {

        const initialCaptainstate=Cookies.get("jwt") || localStorage.getItem("hack")
    
        const [authcaptain,setauthcaptain]=useState(initialCaptainstate ? JSON.parse(initialCaptainstate):undefined)

  return(
    <captaincontext.Provider  value={[authcaptain,setauthcaptain]}>
  {children}
    </captaincontext.Provider>
  )
}

//  export default CaptainProvider;

export const useAuthe = ()=> useContext(captaincontext);

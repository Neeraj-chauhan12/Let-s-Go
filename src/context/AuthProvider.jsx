import React, { createContext, useState } from 'react'
import Cookies from 'js-cookie'
import { useContext } from 'react';


export const authcontext=createContext();

export const AuthProvider = ({children}) => {

    const initialUserstate=Cookies.get("jwt") || localStorage.getItem("app")

    const [authuser,setauthuser]=useState(initialUserstate ? JSON.parse(initialUserstate):undefined)

  return (
    <authcontext.Provider  value={[authuser,setauthuser]}>
        {children}
    </authcontext.Provider>
  )
}

export const useAuth = ()=> useContext(authcontext);

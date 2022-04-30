import React, { useEffect } from 'react'
import { Login } from './Login'
import {  useNavigate } from 'react-router-dom';

export const Logout=({setUser,setUserName,setUserId})=> {
  
  const navigate = useNavigate();

  useEffect(()=>{
     setUser(false)
     setUserName('')
     setUserId(0)
     localStorage.removeItem('user')
     localStorage.removeItem('userName')
     localStorage.removeItem('userId')
     navigate("/");
  },[])
 
  return (
    <>
    </>
  )
}
import React, { useEffect } from 'react'
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
     localStorage.removeItem('role')
     navigate("/");
  },[])
 
  return (
    <>
    </>
  )
}
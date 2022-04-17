import React, { useEffect } from 'react'
import {Home} from './Home'

export const Logout=({setUser,categ,setUserName,setUserId,posts,setPosts})=> {
  
  useEffect(()=>{
     setUser(false)
     setUserName('')
     setUserId(0)
     localStorage.removeItem('user')
     localStorage.removeItem('userName')
     localStorage.removeItem('userId')
  },[])
 
  return (
    <>
    <Home categ={categ} posts={posts} setPosts={setPosts}/>
    </>
  )
}

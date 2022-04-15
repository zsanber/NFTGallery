import React, { useEffect, useState } from 'react';
import { BrowserRouter,Routes,Route, useForm } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import './App.css';
import {Register} from './components/Register';
import {Login} from './components/Login';
import {Forgotten} from './components/Forgotten';
import {Home} from './components/Home';
import {Upload} from './components/Upload';
import axios from 'axios';


function App() {
  const [user,setUser]=useState(true)
  const [categ,setCateg]=useState([])
  const [userName,setUserName]=useState(localStorage.getItem('userName')?localStorage['userName']:'');
  const [userId,setUserId]=useState( localStorage.getItem('userId')?localStorage['userId']:0);
  const [posts,setPosts]=useState([])

  useEffect(() => {
    fetchCateg()
  },[])

  useEffect(()=> {

    localStorage.setItem('user', user)
    localStorage.setItem('userName', userName)
    localStorage.setItem('userId', userId)

  },[user,userName, userId]);

  const fetchCateg=async () => {
    let url='/categ'
    try{
      const resp=await axios.get(url)
      console.log(resp.data)
      setCateg(resp.data)

    }catch(err){
      console.log(err)
    }
  }

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ userName ? <Home categ={categ} posts={posts} setPosts={setPosts}/>
             : <Login setUser={setUser} setUserName={setUserName} setUserId={setUserId} />} />
        <Route path="/forgotten" element={ <Forgotten /> } />
        <Route path="/register" element={ userName ? <Home categ={categ} posts={posts} setPosts={setPosts}/> : <Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/upload" element={<Upload />} />

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
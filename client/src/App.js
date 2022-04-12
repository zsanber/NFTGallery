import React, { useEffect, useState } from 'react';
import { BrowserRouter,Routes,Route, useForm } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import './App.css';
import {Register} from './components/Register';
import {Login} from './components/Login';
import {Forgotten} from './components/Forgotten';
import {Home} from './components/Home';
import axios from 'axios';


function App() {
  const [user,setUser]=useState(true)
  const [categ,setCateg]=useState([])

  useEffect(() => {
    fetchCateg()
  },[])

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
        <Route path="/" element={<Login />} />
        <Route path="/forgotten" element={ <Forgotten /> } />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
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
import {Admin} from './components/Admin/Admin';
import {Logout} from './components/Logout';
import axios from 'axios';


function App() {
  const [user,setUser]=useState(true)
  const [category,setCategory]=useState([])
  const [userName,setUserName]=useState(localStorage.getItem('userName')?localStorage['userName']:'');
  const [userId,setUserId]=useState( localStorage.getItem('userId')?localStorage['userId']:0);

  useEffect(() => {
    fetchCategory();
  }, []);

  useEffect(()=> {
    localStorage.setItem('user', user)
    localStorage.setItem('userName', userName)
    localStorage.setItem('userId', userId)
  },[user,userName, userId]);


  const fetchCategory = async () => {
    let url = "http://localhost:5000/category";
    try {
      const resp = await axios.get(url);
      console.log(resp.data);
      setCategory(resp.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
    <BrowserRouter>
      <Routes>
      {console.log(category)}
        <Route path="/" element={ userName ? <Home category={category} user={user} userName={userName}/>
             : <Login setUser={setUser} setUserName={setUserName} setUserId={setUserId} />} />
        <Route path="/forgotten" element={ <Forgotten /> } />
        <Route path="/register" element={ userName ? <Home category={category} /> : <Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/upload" element={<Upload category={category} />} />

        <Route path="/admin" element={<Admin setUser={setUser} category={category} setUserName={setUserName} setUserId={setUserId}  />} />
        <Route path="/logout" element={<Logout setUser={setUser} category={category} setUserName={setUserName} setUserId={setUserId} />} />

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
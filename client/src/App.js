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
import { NavBar } from './components/NavBar/NavBar';
import axios from 'axios';
import { ConfirmProvider } from 'material-ui-confirm';


function App() {
  const [user,setUser]=useState(true)
  const [category,setCategory]=useState([])
  const [userName,setUserName]=useState(localStorage.getItem('userName')?localStorage['userName']:'');
  const [userId,setUserId]=useState( localStorage.getItem('userId')?localStorage['userId']:0);
  const [posts,setPosts]=useState([])


  useEffect(()=> {

    localStorage.setItem('user', user)
    localStorage.setItem('userName', userName)
    localStorage.setItem('userId', userId)

  },[user,userName, userId]);

  useEffect(() => {
    fetchCategory();
  }, []);

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
    <ConfirmProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ userName ? <Home category={category} posts={posts} setPosts={setPosts}/>
             : <Login setUser={setUser} setUserName={setUserName} setUserId={setUserId} />} />
        <Route path="/forgotten" element={ <Forgotten /> } />
        <Route path="/register" element={ userName ? <Home category={category} posts={posts} setPosts={setPosts}/> : <Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/upload" element={<Upload category={category} />} />

        <Route path="/admin" element={<Admin setUser={setUser} category={category} setUserName={setUserName} setUserId={setUserId} posts={posts} setPosts={setPosts} />} />
        <Route path="/logout" element={<Logout setUser={setUser} category={category} setUserName={setUserName} setUserId={setUserId} posts={posts} setPosts={setPosts}/>} />

      </Routes>
    </BrowserRouter>
    </ConfirmProvider>
    </>
  );
}

export default App;
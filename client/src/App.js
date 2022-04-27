import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useForm } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import './App.css';
import { Register } from './components/Register';
import { Login } from './components/Login';
import { Forgotten } from './components/Forgotten';
import { Home } from './components/Home';
import { Upload } from './components/Upload';
import { Admin } from './components/Admin/Admin';
import { Logout } from './components/Logout';
import { Edit } from './components/Edit';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';

function App() {
  const [user, setUser] = useState(true)
  const [categoryList, setCategoryList] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(0)
  const [userName, setUserName] = useState(localStorage.getItem('userName') ? localStorage['userName'] : '');
  const [userId, setUserId] = useState(localStorage.getItem('userId') ? localStorage['userId'] : 0);

  useEffect(() => {
    fetchCategoryList();
  }, []);



  useEffect(() => {
    localStorage.setItem('user', user)
    localStorage.setItem('userName', userName)
    localStorage.setItem('userId', userId)

    if(!userName && window.location.pathname != '/login') {      
      //window.location = '/login';
    }
  }, [user, userName, userId]);

  const fetchCategoryList = async () => {
    let url = "http://localhost:5000/category";
    try {
      const resp = await axios.get(url);
      setCategoryList(resp.data);
    } catch (err) {
      console.log(err);
    }
  };
  console.log('Appban vagyunk: ' , userId)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home categoryList={categoryList} selectedCategory={selectedCategory} 
                                         setSelectedCategory={setSelectedCategory} userName={userName} />} />
          <Route path="/forgotten" element={<Forgotten />} />                    

          <Route path="/edit/:id" element={<Edit categoryList={categoryList} />} />
          <Route path="/upload" element={<Upload categoryList={categoryList} userId={userId} />} />
          <Route path="/admin" element={<Admin setUser={setUser} setUserName={setUserName} setUserId={setUserId} />} />

          <Route path="/login" element={userId !=0 ? <Home categoryList={categoryList} selectedCategory={selectedCategory} 
                                         setSelectedCategory={setSelectedCategory} userName={userName} /> : <Login setUser={setUser} setUserName={setUserName} setUserId={setUserId} />  } />
          <Route path="/logout" element={<Logout setUser={setUser} setUserName={setUserName} setUserId={setUserId} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
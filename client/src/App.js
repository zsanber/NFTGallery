import React, { useEffect, useState } from 'react';
import { HashRouter, Routes, Route, useForm } from 'react-router-dom';
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
  }, [user, userName, userId]);

  const fetchCategoryList = async () => {
    let url = "/category";
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
      <HashRouter>
        <Routes>
          {/*<Route path="/" element={<Home categoryList={categoryList} selectedCategory={selectedCategory} 
                                         setSelectedCategory={setSelectedCategory} userName={userName}  userId={userId} />} />*/}
          <Route path="/forgotten" element={<Forgotten />} />                    

          <Route path="/edit/:id" element={<Edit categoryList={categoryList} />} />
          <Route path="/upload" element={<Upload categoryList={categoryList} userId={userId} />} />
          <Route path="/admin" element={<Admin setUser={setUser} setUserName={setUserName} setUserId={setUserId} />} />

          <Route path="/" element={userId !=0 ? <Home categoryList={categoryList} selectedCategory={selectedCategory} 
                                         setSelectedCategory={setSelectedCategory} userName={userName}  userId={userId} /> : <Login setUser={setUser} setUserName={setUserName} setUserId={setUserId} />  } />
          <Route path="/logout" element={<Logout setUser={setUser} setUserName={setUserName} setUserId={setUserId} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
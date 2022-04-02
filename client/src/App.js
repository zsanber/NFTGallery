import React, {useState} from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import './App.css';
import {Register} from './components/Register'
import {Login} from './components/Login'
import {Forgotten} from './components/Forgotten'



function App() {
  const [user,setUser]=useState(true)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgotten" element={ <Forgotten /> } />
        <Route path="/register" element={<Register />} />


      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
import React, { useEffect, useState, useReducer } from "react";
import { NavBar } from "../NavBar/NavBar";
import {NavLink} from 'react-router-dom';
import axios from "axios";
import Moment from 'moment';
import "./Admin.css";
import "../../App.css";

export const Admin = () => {
const [list,setList]=useState([])

useEffect(()=> {
    fetchList()
},[])

const fetchList=async ()=>{
    try {
    const resp=await axios.get('/photos/admin')
    setList(resp.data)
    }catch(err){
    console.log(err)
    }
}

const handleDelete= async (item)=>{
  if (window.confirm(`Are you sure you want to delete user ${item.username}?`) == true) {
    const resp = await axios.delete(`/photos/admin/${item.iduser}`);
    fetchList();
  } else {
    console.log('Nincs törlés!')
  }
}

  return (
    <div className="homeBackground">
      <div className="container">
      <NavLink to="/" className="nav-link" aria-current="page" href="#">◀</NavLink>
        <div className="row justify-content-center">
          <div className="adminBox col-12 mt-5">
            <div className="adminContent">
                <h1 className="text-center">Users</h1>
                <table className="table table-striped text-center">
                        <thead>
                        <tr>
                            <th className="adminNav col-1" scope="col">userid</th>
                            <th className="adminNav col-2" scope="col">username</th>
                            <th className="adminNav col-2 email" scope="col">email</th>
                            <th className="adminNav col-2 createdAt" scope="col">created at</th>
                            <th className="adminNav col-2" scope="col">role</th> 
                            <th className="adminNav col-1" scope="col">delete</th> 
                        </tr>
                        </thead>
                        <tbody>
                        {list.map((item, index) => <tr key={index}>
                        <td className="align-middle">{item.iduser}</td>
                        <td className="align-middle">{item.username}</td>
                        <td className="align-middle email">{item.email}</td>
                        <td className="align-middle createdAt">{Moment(item.created_at).format('yyyy.MM.DD')}</td>
                        <td className="align-middle">{item.role}</td>
                        <td onClick={()=>handleDelete(item)} className="deleteUser text-align-center align-middle text-light bg-danger">Delete user 🗑️</td>
                        </tr>)}
                        </tbody>
                </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

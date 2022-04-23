import React, { useEffect, useState, useReducer } from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./Admin.css";
import "../../App.css";
import { NavBar } from "../NavBar/NavBar";
import { Terms } from "../Terms";

export const Admin = () => {
const [stat,setStat]=useState([])

useEffect(()=> {
    fetchStat()
},[])

const fetchStat=async ()=>{
    try {
    const resp=await axios.get('http://localhost:5000/photos/admin')
    setStat(resp.data)
    }catch(err){
    console.log(err)
    }
}

  return (
    <div className="homeBackground">
      <NavBar />
      <div className="container">
        <div className="row justify-content-center">
          <div className="adminBox col-12 mt-5">
            <div className="adminContent">
                <h1 className="text-center">Users</h1>
                <table className="table table-striped text-center">
                        <thead>
                        <tr>
                            <th className="adminNav col-1" scope="col">userid</th>
                            <th className="adminNav col-2" scope="col">username</th>
                            <th className="adminNav col-2" scope="col">email</th>
                            <th className="adminNav col-2" scope="col">created at</th>
                            <th className="adminNav col-2" scope="col">updated at</th>
                            <th className="adminNav col-2" scope="col">role</th> 
                            <th className="adminNav col-1" scope="col">delete</th> 
                        </tr>
                        </thead>
                        <tbody>
                        {stat.map((item, index) => <tr key={index}>
                        <td className="align-middle">{item.iduser}</td>
                        <td className="align-middle">{item.username}</td>
                        <td className="align-middle">{item.email}</td>
                        <td className="align-middle">{item.created_at}</td>
                        <td className="align-middle">{item.updated_at}</td>
                        <td className="align-middle">{item.role}</td>
                        <td className="text-align-center align-middle text-light bg-danger">Delete user 🗑️</td>
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

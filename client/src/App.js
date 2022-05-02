import React, { useEffect, useState } from "react";
import { HashRouter, Routes, Route, useForm } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import "./App.css";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { Forgotten } from "./components/Forgotten";
import { Home } from "./components/Home";
import { Upload } from "./components/Upload";
import { Admin } from "./components/Admin/Admin";
import { Logout } from "./components/Logout";
import { Edit } from "./components/Edit";
import {Welcome} from "./components/Welcome";
import axios from "axios";

function App() {
    const [user, setUser] = useState(true);
    const [categoryList, setCategoryList] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(0);
    const [userName, setUserName] = useState(
        localStorage.getItem("userName") ? localStorage["userName"] : ""
    );
    const [userId, setUserId] = useState(
        localStorage.getItem("userId") ? localStorage["userId"] : 0
    );
    const [role,setRole] = useState(
        localStorage.getItem("role") ? localStorage["role"] : ""
    );

    useEffect(() => {
        fetchCategoryList();
    }, []);

    useEffect(() => {
        localStorage.setItem("user", user);
        localStorage.setItem("userName", userName);
        localStorage.setItem("userId", userId);
        localStorage.setItem("role", role);
    }, [user, userName, userId, role]);

    const fetchCategoryList = async () => {
        let url = "/category";
        try {
            const resp = await axios.get(url);
            setCategoryList(resp.data);
        } catch (err) {
            console.log(err);
        }
    };
    console.log("Appban vagyunk: ", userId);
    console.log(role);
    return (
        <>
            <HashRouter>
                {categoryList && (
                    <Routes>
                        
                        <Route
                            path="/confirm/:confirmationCode"
                            element={
                                <Welcome
                                />
                            }
                        />
                        
                        <Route path="/forgotten" element={<Forgotten />} />

                        <Route
                            path="/edit/:id"
                            element={ userId != 0 && userId ? ( <Edit categoryList={categoryList} />) : ( <Login
                                setUser={setUser}
                                setUserName={setUserName}
                                setUserId={setUserId}
                            />)}
                        />
                        <Route
                            path="/upload"
                            element={
                                userId != 0 && userId ? (
                                <Upload
                                    categoryList={categoryList}
                                    userId={userId}
                                />
                                ) : (
                                    <Login
                                        setUser={setUser}
                                        setUserName={setUserName}
                                        setUserId={setUserId}
                                        setRole={setRole}
                                    />
                                )
                            }
                        />
                        <Route
                            path="/admin"
                            element={
                                userId != 0 && userId ? (
                                <Admin
                                    setUser={setUser}
                                    setUserName={setUserName}
                                    setUserId={setUserId}
                                    setRole={setRole}
                                />
                                ) : (
                                    <Login
                                        setUser={setUser}
                                        setUserName={setUserName}
                                        setUserId={setUserId}
                                        setRole={setRole}
                                    />
                                )
                            }
                        />

                        <Route
                            path="/"
                            element={
                                userId != 0 && userId ? (
                                    <Home
                                        categoryList={categoryList}
                                        selectedCategory={selectedCategory}
                                        setSelectedCategory={
                                            setSelectedCategory
                                        }
                                        userName={userName}
                                        userId={userId}
                                        role ={role}
                                    />
                                ) : (
                                    <Login
                                        setUser={setUser}
                                        setUserName={setUserName}
                                        setUserId={setUserId}
                                        setRole={setRole}
                                    />
                                )
                            }
                        />
                        <Route
                            path="/logout"
                            element={
                                <Logout
                                    setUser={setUser}
                                    setUserName={setUserName}
                                    setUserId={setUserId}
                                    setRole={setRole}
                                />
                            }
                        />
         
                        <Route path="/register" element={<Register />} />
                    </Routes>
                )}
            </HashRouter>
        </>
    );
}

export default App;

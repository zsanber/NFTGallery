import React from 'react';
import {NavLink} from 'react-router-dom';
import {SearchBar} from './SearchBar';
import myLogo from "./myLogo.png";

export const TopBar=({})=> {

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
        <div className="navbar-brand" >
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-pinterest"></i>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <img className="" src={myLogo} alt="logo" />
        <ul className="navbar-nav mx-auto">
            <li className="nav-item">
            <NavLink to="/" className="nav-link " aria-current="page" href="#">Home</NavLink>
            </li>
            
            <li className="nav-item">
            <NavLink to="/write" className="nav-link" href="#">Upload image</NavLink>
            </li>
    
            {(<li className="nav-item">
            <NavLink to="/logout" className="nav-link" href="#">Sign out</NavLink>
            </li>)}
        </ul>

        </div>
    <SearchBar placeholder="Search" />

  </div>
</nav>
</div>
  )
}

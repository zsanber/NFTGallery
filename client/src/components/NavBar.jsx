import React from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import {SearchBar} from './SearchBar/SearchBar';
import myLogo from "./myLogo.png";
import avatar from './avatar.svg'

export const NavBar=({})=> {

  return (
    <div className="navcontainer">
      <nav className="navbar navbar-expand-lg navbar-dark shadow-5-strong">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <img className="nav-myLogo" src={myLogo} alt="logo" />
          <ul className="navbar-nav leftNav mx-auto">
              <li className="nav-item ms-auto">
              <NavLink to="/upload" className="nav-link" href="#">upload image</NavLink>
              </li>
              <li className="nav-item navCategories">
              <NavLink to="/categories" className="nav-link " aria-current="page" href="#">categories</NavLink>
              </li>
          </ul>
          <ul className="navbar-nav rightNav ms-auto">
              {(<li className="nav-item nav-signout">
              <NavLink to="/signout" className="nav-link" href="#">sign out</NavLink>
              </li>)}
            
          </ul>
        <SearchBar placeholder="Search" />
        </div>
        <div>
            {<NavLink to="/settings">
            <img  className="nav-img" src={avatar} alt="" title=""/>
            </NavLink>}
        </div>
        
  </div>
</nav>
</div>
  )
}

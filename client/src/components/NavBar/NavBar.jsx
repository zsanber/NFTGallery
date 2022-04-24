import React from "react";
import { NavLink } from "react-router-dom";
import { SearchBar } from "../SearchBar/SearchBar";
import "./NavBar.css";
import myLogo from "../Images/myLogo.png";
import avatar from "../Images/avatar.svg";

export const NavBar = ({ category, setSelCategory, userName }) => {

  return (
    <div className="navcontainer">
      <nav className="navbar navbar-expand-lg navbar-dark shadow-5-strong">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <NavLink to="/home" href="#">
              <img className="nav-myLogo" src={myLogo} alt="logo" />
            </NavLink>
            <ul className="navbar-nav leftNav mx-auto">
              <li className="nav-item">
                <NavLink
                  to="/upload"
                  className="nav-link"
                  aria-current="page"
                  href="#"
                >
                  upload image
                </NavLink>
              </li>

              <li className="dropdown nav-item nav-link">
                <div className="dropbtn nav-item ">
                  categories
                  <i className="fa fa-caret-down"></i>
                </div>
                <div className="dropdown-content">
                  <a onClick={() => setSelCategory(0)}>All</a>
                  {category.category.map((item, i) => (
                    <a key={i} onClick={() => setSelCategory(item.id)}>
                      {item.name}
                    </a>
                  ))}
                </div>
              </li>
            </ul>

            <ul className="navbar-nav rightNav ms-auto">
              <li className="dropdown nav-item nav-link">
                <div className="dropbtn nav-item">
                  <img
                    className="nav-img"
                    src={avatar}
                    alt={userName}
                    title={userName}
                  />
                </div>
                <ul className="dropdown-content">
                  {
                    <li className="nav-item">
                      <NavLink to="/logout" href="#">
                        Logout
                      </NavLink>
                    </li>
                  }

                  {
                    <li className="nav-item">
                      <NavLink to="/admin" href="#">
                        admin
                      </NavLink>
                    </li>
                  }
                </ul>
              </li>
            </ul>

            <SearchBar placeholder="Search" />
          </div>
        </div>
      </nav>
    </div>
  );
};

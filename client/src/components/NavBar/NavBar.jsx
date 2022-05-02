import React from "react";
import { NavLink } from "react-router-dom";
import { SearchBar } from "../SearchBar/SearchBar";
import "./NavBar.css";
import myLogo from "../Images/myLogo.png";
import avatar from "../Images/avatar.svg";

export const NavBar = ({
  categoryList,
  selectedCategory,
  setSelectedCategory,
  userName,
  setPhotosFiltered,
  photos,
  role,
}) => {
  return (
    <div className="navcontainer">
      <nav className="navbar navbar-expand-lg">
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
            <NavLink to="/" href="#">
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
                <div className="dropbtn nav-item ">categories</div>
                <div className="dropdown-content">
                  <p
                    className="categoryoption"
                    onClick={() => setSelectedCategory(0)}
                  >
                    All
                  </p>
                  {categoryList.map((item, i) => (
                    <option
                      className="categoryoption"
                      key={i}
                      value={item}
                      onClick={() => setSelectedCategory(item.idcategorie)}
                    >
                      {item.name}
                    </option>
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
                  <li className="nav-item">
                    <NavLink to="/logout" href="#">
                      logout
                    </NavLink>
                  </li>

                  {role == "admin" && (
                    <li className="nav-item">
                      <NavLink to="/admin" href="#">
                        admin
                      </NavLink>
                    </li>
                  )}
                </ul>
              </li>
            </ul>

            <SearchBar
              placeholder="Search"
              setPhotosFiltered={setPhotosFiltered}
              photos={photos}
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

import React from "react";
import myLogo from "../Images/myLogo.png";
import {BitcoinPrice} from "../BitcoinPrice/BitcoinPrice";
import "./Sidebar.css"

export const Sidebar = ({categ,setSelCateg}) => {
  return (
    <div className="homeBoxSideBar col-12 col-md-3 mt-5 mb-5 ml-20 order-2 justify-content-center">
      <div className="sidebar mt-2 rounded d-flex flex-column align-items-center">
          <img className="" src={myLogo} alt="AVATAR" />
          <span className="welcome m-1 p-1 text-center w-75 fw-bold border-top border-bottom ">Welcome USERNAME</span>

        <BitcoinPrice />   

        <div className="brands p-1 m-1" >
          <i className="fa-brands fa-facebook fa-2x p-1 m-1"></i>
          <i className="fa-brands fa-instagram fa-2x p-1 m-1"></i>
          <i className="fa-brands fa-pinterest fa-2x p-1 m-1"></i>
        </div>
      </div>
    </div>
  );
};

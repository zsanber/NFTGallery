import React from "react";
import myLogo from "../Images/myLogo.png";
import {BitcoinPrice} from "../BitcoinPrice/BitcoinPrice";
import {OpenSea} from "../BitcoinPrice/OpenSea";
import "./Sidebar.css"

export const Sidebar = ({userName}) => {
  return (
    <div className="homeBoxSideBar col-lg-3 col-sm-12 col-md-3 mt-5 mb-4 ml-20 order-2 justify-content-center align-items-center">
      <div className="sidebar rounded d-flex flex-column align-items-center">
        <img className="" src={myLogo} alt="AVATAR" />
        <span className="welcome fw-bold border-top border-bottom "> Welcome {userName} </span>

        <BitcoinPrice />  
        <OpenSea />   

        <div className="brands" >
          <a className="fa-brands fa-facebook fa-3x p-1 m-1 text-decoration-none" href="https://www.facebook.com"></a>
          <a className="fa-brands fa-instagram fa-3x p-1 m-1 text-decoration-none" href="https://www.instagram.com"></a>
          <a className="fa-brands fa-pinterest fa-3x p-1 m-1 text-decoration-none" href="https://www.pinterest.com"></a>
        </div>
      </div>
    </div>
  );
};

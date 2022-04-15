import React from "react";
import myLogo from "./myLogo.png";
import {BitcoinPrice} from "./BitcoinPrice"

export const Sidebar = ({categ,setSelCateg}) => {
  return (
    <div className="homeBoxSideBar col-3 mt-5 mb-5 ml-20 order-2">
      <div className="sidebar mt-2 bg-light rounded d-flex flex-column align-items-center">
        <div className="d-flex flex-column align-items-center">
        <img className="" src={myLogo} alt="AVATAR" />
          <span className="m-1 p-1 text-center w-75 fw-bold border-top border-bottom ">Welcome USERNAME</span>
          <button className="btn btn-info form-control rounded mt-1 mb-1 fs-5 fw-bold text-white" 
              href="">Upload</button>
        </div>

        <div className="categories d-flex flex-column align-items-center">
          <span className="border-bottom pb-2">Categories</span>
              {/*<ul className="sidebarList">
                  {categ.map(obj=>
                <li key={obj.id} onClick={()=>setSelCateg(obj.id)}>{obj.name}</li>
                )}
              </ul> */}

         {/*<BitcoinPrice />*/}
              
          <div className="brands" >
          
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-pinterest"></i>
          </div>

          <button className="btn btn-info form-control rounded mt-1 mb-1 fs-5 fw-bold text-white" 
          href="">Sign out</button>
          </div>
        </div>
      </div> 
  );
};

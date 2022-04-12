import React from "react";
import myLogo from "./myLogo.png";

export const Sidebar = ({categ,setSelCateg}) => {
  return (
    <div className="sidebar mt-2 bg-light rounded d-flex flex-column align-items-center">
      <div className="d-flex flex-column align-items-center">
      <img className="" src={myLogo} alt="AVATAR" />
        <span className="m-1 p-1 text-center w-75 fw-bold border-top border-bottom ">Welcome USERNAME</span>
        <button className="btn btn-info form-control rounded mt-1 mb-1 fs-5 fw-bold text-white" 
            href="">Upload</button>
        <button className="btn btn-info form-control rounded mt-1 mb-1 fs-5 fw-bold text-white" 
            href="">Kell még valami?</button>
      </div>

      <div className="categories d-flex flex-column align-items-center">
        <span className="border-bottom pb-2">Categories</span>
            {/*<ul className="sidebarList">
                {categ.map(obj=>
              <li key={obj.id} onClick={()=>setSelCateg(obj.id)}>{obj.name}</li>
              )}
            </ul> */}
        <button className="btn btn-info form-control rounded mt-1 mb-1 fs-5 fw-bold text-white" 
        href="">Sign out</button>
        </div>
      </div>
      
  );
};

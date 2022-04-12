import React from "react";

export const Sidebar = ({categ,setSelCateg}) => {
  return (
    <div className="sidebar mt-2 bg-light rounded d-flex flex-column align-items-center">
      <div className=" d-flex flex-column align-items-center">
        <span className="m-2 p-2 text-center w-75 border-top border-bottom">USERNAME: renderelt </span>
        <img className="mt-2 p-2" src="" alt="AVATAR" />
        <span className="m-2 p-2 text-center w-75 border-top border-bottom">INTRODUCTION</span>
          <p>
            Renderelt intro? Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
          </p>
      </div>

      <div className=" d-flex flex-column align-items-center">
        <span className="border-bottom pb-2">Categories</span>
        </div>
            {/*<ul className="sidebarList">
                {categ.map(obj=>
              <li key={obj.id} onClick={()=>setSelCateg(obj.id)}>{obj.name}</li>
              )}
            </ul> */}
      </div>
  );
};

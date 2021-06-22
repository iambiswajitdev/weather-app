import React from "react";
import { logoImages } from "../utility/commonStaticData";

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <div>
          <img className="logo_img" src={logoImages} alt="" />
          <h3 className="logo_text">Biswajit mondal : )</h3>
        </div>
      </div>
    </>
  );
};

export default NavBar;

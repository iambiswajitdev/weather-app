import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer_container">
          <h3>
            Made With By <span className="myName">Biswajit Mondal</span> @
            {new Date().getFullYear()} . Built With React JS
          </h3>
        </div>
      </div>
    </>
  );
};

export default Footer;

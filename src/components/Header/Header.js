import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="page-header">
      <div className="page-header-container">
        <img alt="logo" src={require("../../assets/images/logo_personio.svg")} />
      </div>
    </div>
  );
};

export default Header;

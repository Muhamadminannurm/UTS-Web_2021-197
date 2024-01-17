import React from "react";
import "./style.css";
import HomeLogo from "../img/INAN.png";

const Main = () => {
  return (
    <div className="main">
      <img src={HomeLogo} alt="men" className="men" id="home" />
      <div className="main-detil">
        <p>Hello, I'm</p>
        <h1>Muhamad Minan Nur Mu'alim</h1>
        <h4>Data Analyst</h4>
      </div>
    </div>
  );
};

export default Main;

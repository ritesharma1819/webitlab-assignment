import React from "react";
import "./index.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__leftHeader">
        <div className="header__leftHeader-title">
          <h2>DESIGN</h2>
          <h2 className="header__leftHeader-title_agency">AGENCY</h2>
        </div>
        <p>Specialize in</p>
        <p>Case study</p>
        <p>Process</p>
        <p>Industries</p>
      </div>
      <div className="header__rightHeader">
        <button className="header__rightHeader_schedule_button">
          Schedule A Call
        </button>
        <button className="header__rightHeader_hiring_button">
          We are Hiring
        </button>
      </div>
    </div>
  );
};

export default Header;

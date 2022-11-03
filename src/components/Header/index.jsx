import React, { useState } from "react";
import "./index.css";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className="header">
      <FiMenu
        size={20}
        onClick={() => setMenu(true)}
        className={`menu__icon ${menu && "menu__icon-active"}`}
      />
      <IoClose
        size={20}
        onClick={() => setMenu(false)}
        className={`menu__icon ${!menu && "menu__icon-active"}`}
      />
      <div
        className={`header__leftHeader ${menu && "header__leftHeader-active"}`}
      >
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

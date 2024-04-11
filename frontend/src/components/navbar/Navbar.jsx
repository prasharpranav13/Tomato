import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  return (
    <div className="navbar">
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbarMenu">
        <li
          onClick={() => {
            setMenu("Home");
          }}
          className={menu === "Home" ? "active" : ""}
        >
          Home
        </li>
        <li
          onClick={() => {
            setMenu("Menu");
          }}
          className={menu === "Menu" ? "active" : ""}
        >
          Menu
        </li>
        <li
          onClick={() => {
            setMenu("MobileApp");
          }}
          className={menu === "MobileApp" ? "active" : ""}
        >
          Mobile-app
        </li>
        <li
          onClick={() => {
            setMenu("ContactUs");
          }}
          className={menu === "ContactUs" ? "active" : ""}
        >
          Contact Us
        </li>
      </ul>
      <div className="navbarRight">
        <img src={assets.search_icon} alt="" />
        <div className="navBarSearchIcon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;

//import React, { useState } from "react";
import Logo from "../ASD/pizzaLogo.png";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
 
  return (
    <div className="navbar">
      <img src={Logo} alt=""/>
        <div className="hiddenLinks">
          <NavLink to="/"> Homa</NavLink>
          <NavLink to="/Menu"> Menu </NavLink>
          <NavLink to="/About"> About </NavLink>
          <NavLink to="Contact"> Contact </NavLink>
          <NavLink to="order"> Orders </NavLink>
        
      </div> 
     <div className="rightSide">
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/Menu"> Menu </NavLink>
        <NavLink to="/About"> About </NavLink>
        <NavLink to="/Contact"> Contact </NavLink>
        <NavLink to="order"> Orders </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
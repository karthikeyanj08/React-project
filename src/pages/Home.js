import React, {  } from "react";
import BannerImage from "../ASD/pizza.jpg";
import "../styles/Home.css";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

function Home() {

  const turn =()=>{
    alert("WELCOME TO PEDRO'S PIZZA SEE THE MENU")

  }
   useEffect(()=>{
turn()
   },[]

   )
  
  return (
    <div>
      
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
     
      
      <div className="headerContainer">
        <h1> Pedro's Pizzeria </h1>
        <p> PIZZA TO FIT ANY TASTE</p>
        
          <button className="jj"> <NavLink to="/menu" style={{color: "white",
      textDecoration: "none"
}}> ORDER NOW</NavLink></button>
        
       
      </div>
      </div>
      </div>
      
    
  );
}

export default Home;
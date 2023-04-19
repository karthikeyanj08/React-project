import React from "react";
import multiplePizzas from "../ASD/multiplePizzas.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
         style={{ backgroundImage: `url(${multiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
         We are is an American multinational restaurant chain and international franchise founded in 1958 in Wichita,
         Kansas by Dan and Frank Carney. They serve their signature pan pizza and other dishes including pasta, breadsticks and dessert at dine-in, 
         take-out and delivery chain locations. They also serve chicken wings on their WingStreet menu.
         The chain, headquartered in Plano, Texas, operates 17,639 restaurants worldwide as of 2020,[6] making it the world's largest pizza chain by number of locations.
         It is owned by Yum! Brands, Inc., one of the world's largest restaurant companies.[2]
        </p>
      </div>
    </div>
  );
}

export default About;
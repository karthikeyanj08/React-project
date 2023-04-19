import React from "react";
import PizzaLeft from "../ASD/pizzaLeft.jpg";
import "../styles/Contact.css";
//import About from "./About";
//import { NavLink } from "react-router-dom";


function Contact() {
  return (
    <div className="contact">
      
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form" method="POST">
          <label h="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label h="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label h="message">Message</label>
          <textarea
            
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
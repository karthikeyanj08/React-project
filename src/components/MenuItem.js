import React from "react";
import { useState } from "react";

function MenuItem({ image, name, price ,jk}) {
  const [orders, setOrders]= useState();
   
  const list = ()=>{
    alert("Item added to orders list");

    setOrders('hello');
    console.log(orders);


  }
  
 
  return (
    
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }} > </div> 

      <h1>{name} </h1>
      <p> {price} </p>
      <div><button id="orderbt" onClick={()=>{
        jk({name:name,price:price,image:image})
      }}>Order</button></div>
      </div>

    
      
    
    

  );
}


export default MenuItem;
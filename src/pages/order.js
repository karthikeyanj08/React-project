import React from "react";
import { MenuList } from "../helpers/MenuList";
import { Useglobalvalue } from "../Context";
import MenuItem from "../components/MenuItem";
import "../styles/order.css"



function Order() {
  const {orderdata} = Useglobalvalue()

    return (
      
      <div className="aT">
<h1> YOUR ORDERS</h1>
        
        <div className="ab">
 {orderdata.map((myname)=>{
console.log(myname)
return(
  <MenuItem name={myname.name} price={myname.price} image={myname.image}/>

)

 })}

          
    
        </div>
        </div>
      
    );
  }
  
  export default Order;
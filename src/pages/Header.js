import React, {  } from "react";
import {MenuList} from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";
import { Useglobalvalue } from "../Context";

function Menu() {
  const {kj}=Useglobalvalue()
    return (
    <div>

    
    <input type="text"id="searchbox"/>
    
      
  
    <button id="serbt">SEARCH </button>
    

    
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {MenuList.map((henuItem) => {

          return (
            <MenuItem
               jk={kj}
              key={henuItem.id}
              image={henuItem.image}
              name={henuItem.name}
              price={henuItem.price}
              
              
            />
          );
        })}

        </div>
      </div>
    </div>
  );
}

export default Menu;
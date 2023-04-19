import React, { useContext } from "react";
import { useState } from "react";

const Context = React.createContext()

const Wellprovider = ({children})=>{
    const [orderdata,setorderdata] = useState([])
    function kj(leo){
  console.log(leo.name)
  console.log(leo.price)
  console.log(leo.image)
    
  
  setorderdata([...orderdata ,leo])
    }
/*   orderdata.map((ab)=>{
console.log(ab.name)
  })
 */return(

    <Context.Provider value={{kj,orderdata}}>
        {children}
    </Context.Provider>
)
}
const Useglobalvalue =()=>{
    return(
        useContext(Context)
    )
}
export {Wellprovider,Useglobalvalue};
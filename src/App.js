import "./App.css";
import Navbar from "./components/Navbar";
//import Home from "./pages/Home";
import Menu from "./pages/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Routes,  } from "react-router-dom";
import Main from "./components/main";
import Order from "./pages/order";


function App() {  
  return (

    <div className="App">

      
      <Router>

      <Navbar />
      
        <Routes>
      
          {/* <Route path="/" element={<Home/>} /> */}
          <Route path="/Menu"element={<Menu/>} />
          <Route path="/About" element= {<About/>} />
          <Route path="/Contact"element={<Contact/>} />
          <Route path="/order"element={<Order/>} />
          </Routes>
          
          
          
          
          
          

        
      <Main/>
        
        
          
          
        
        
         
         
        
      
      </Router>
    </div>
  );
}

export default App;
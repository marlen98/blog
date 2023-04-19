import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom"; 
import  './App.css'
import Navbar from "./Components/Navbar";
import AppRouter from "./Components/AppRouter";

function App(){
  
  return(
   <div id="root"> 

   <BrowserRouter>
     
   <Navbar/>
   <AppRouter/>
     
   </BrowserRouter>
   
   </div>
  ) 
}
export default App
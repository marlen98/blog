import React from "react";
import {Routes,Route} from 'react-router-dom'
import About from "../pages/About";
import Posts from "../pages/Posts";
import PostId from "./PostId";

const AppRouter =()=>{
    return(
        <Routes>
       
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/posts' element={<Posts/>}/>
        <Route exact path='/posts/:id' element={<PostId/>}/>
        
   
        </Routes>
    )
}
export default AppRouter
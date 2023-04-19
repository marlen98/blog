import React from "react";
import classes from './MyBtn.module.css'

function MyButton (props){
    return (
        <button {...props} className={classes.myBtn}></button>
    )
}

export default MyButton;
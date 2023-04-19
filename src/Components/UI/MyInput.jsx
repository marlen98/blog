import React from "react";
import classes from './MyInt.module.css'

function MyInput (props){
    return (
      <input className={classes.myint} {...props} />
    )
}

export default MyInput;
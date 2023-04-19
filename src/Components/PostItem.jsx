import React from "react";
import MyButton from "./UI/MyButton";
import classes from './App.module.css';
import { useNavigate} from 'react-router-dom'

const PostItem = (props)=> {
  const router=useNavigate()
 
  return (
    <>
   
  <div className={classes.post}>
  <MyButton onClick={()=>props.remove(props.post)}>DELETE</MyButton>
  <MyButton onClick={()=>router(`/posts/${props.post.id}`)}>Открыть</MyButton>
  <h1>{props.post.id}{props.post.title}</h1>
  <h2>{props.post.body}</h2>
 
  </div>
  </>
  );
}

export default PostItem;

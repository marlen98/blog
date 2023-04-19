import React, {useState} from "react";
import MyInput from './UI/MyInput';
import MyButton from "./UI/MyButton";

const PostForm = ({create}) =>{
    const [post,setPost] = useState({title:'', body:'',key:''})
    const addNewPost=(e)=>{
        if (post.title !== '' || post.body !== '') {
        e.preventDefault();
        const newPost = {
            ...post, 
            id:Date.now()
        }
      create(newPost)
      setPost({title:'', body:''})}
      else e.preventDefault()
      }
   
      return (
        
        <form>
      <MyInput value={post.title} onChange={(e)=>setPost({...post,title: e.target.value})} type="text" placeholder="Title" /> 
      <MyInput value={post.body} onChange={(e)=>setPost({...post,body: e.target.value})} type="text" placeholder="Post"/> 
      
      <MyButton onClick={addNewPost}>ADD POST</MyButton>
      </form>
    )
}
 export default PostForm
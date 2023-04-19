import React from "react";
import PostItem from "./PostItem";


const  PostList = ({posts,remove})=>{
    
    return (
        <div>
    {posts.map(post => <PostItem key={post}remove={remove}  post={post} /> )}
    </div>
    )
}

export default PostList;
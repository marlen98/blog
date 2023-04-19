import React, { useEffect,useMemo,useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import { useFetching } from "../hooks/useFetching";



const PostId = ()=>{
   const params=useParams()
    
    const [posts,setPost]=useState({});
   const [fetchPostById,isLoading,error] = useFetching(async (id)=>{
       const response = await PostService.getById(id)
       setPost(response.data)
       console.log(posts)
   })
   
  useEffect(()=>{fetchPostById(params.id)},[])
  
   return (
<div>
   {posts.id}
</div>
    )
}
export default PostId
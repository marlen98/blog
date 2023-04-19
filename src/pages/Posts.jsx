import React, {useState, useMemo, useEffect} from "react";
import axios from "axios";
import PostList from "../Components/PostList";
import PostForm from "../Components/PostForm";
import MyFilter from "../Components/MyFilter";
import MyModal from "../Components/MyModal";
import MyButton from "../Components/UI/MyButton";
import PostService from "../API/PostService";
import Loader from "../Components/Loader";
import { getPageCount, getPagesArr } from "../utils/pages";


function Posts () {
  const [isPostLoad, setIsPostLoad] = useState(false)
  const [modal,setModal]=useState(false)
  const [posts,setPosts] = useState ([]);
  const [totalCount,setTotalCount]=useState(0)
  const [page,setPage]=useState(1)
  const [totalPages,setTotalPages]=useState(1)
  const [limit,setLimit]=useState(10)
  
  let pagesArr = getPagesArr(totalPages)
  const changePage = (page)=>{
    setPage(page)
    }
    
  const createPost = (newPost) => {
setModal(false)
setPosts([...posts,newPost])
  }
  const removePost = (post)=> {
  setPosts(posts.filter(p => p.id !== post.id))
  }
  useEffect(()=>{
    getPosts()
  },[page])
  const getPosts = ()=>{
  setIsPostLoad(true)
  setTimeout(async ()=>{
  const response = await PostService.getAll(limit,page)
  setPosts(response.data)
  const totalCount=response.headers['x-total-count']
  setTotalPages(getPageCount(totalCount,limit))

  setIsPostLoad(false)},2000)
}
const [filter,setFilter] = useState ({sort:'',query:''})

const searchPosts = useMemo(() =>{
  if(filter.sort)return [...posts].sort((a,b)=>a[filter.sort].localeCompare(b[filter.sort]))
  return posts
},  [filter.sort,posts])

const ssPosts = useMemo(()=>{
return searchPosts.filter(post=>post.title.toLowerCase().includes(filter.query))
},
[filter.query, searchPosts]
)

return (
    <div className="App">
     <button onClick={getPosts}>post</button>
     <MyButton onClick={()=>setModal(true)}>Создать пост</MyButton>
     <MyModal visible={modal} setVis={setModal}> <PostForm create={createPost}/></MyModal>
      <hr />
      <MyFilter filter={filter} setFilter={setFilter}/>
      {
        pagesArr.map((i)=><button key={i} onClick={()=>changePage(i)}>{i}</button>)
      }
      
      {isPostLoad
      ? <Loader/>
      :<PostList  remove={removePost}  posts={ssPosts}/>}
      
    </div>
  );
}

export default Posts;

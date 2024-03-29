import React from 'react'
import {useSelector} from "react-redux"
import { selectAllPost } from './postSlice'
import TimeAgo from './TimeAgo'
import "./postlist.scss"
import RenderAuthor from './RenderAuthor'
import ReactionButtons from './ReactionButtons'





const PostList = () => {
    const posts = useSelector(selectAllPost)
    const orederedPost = posts.slice().sort((a,b)=>b.date.localeCompare(a.date))
    
    // const users = useSelector(selectAllPost)

    const renderpost = orederedPost.map((post,index)=>(
      <div className='comment_box' key={index.toString()}>
    <p className='title'>{post.title}</p>
    <p className='comment'>{post.comment.substring(0,100)}</p>
    < RenderAuthor user = {post.userId} />
    < TimeAgo timestamp = {post.date} />
    <ReactionButtons
    post={post}
    />
</div>
    ))
  return (
    <div className='post_container'>
<div className='post_subcontainer'>
<p className='ps_post'>Posts</p>
{renderpost}

</div>
    </div>
  )
}

export default PostList
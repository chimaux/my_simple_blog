import React from 'react'
import { useState  } from 'react'
import "./addPostForm.scss"

import {useDispatch,useSelector} from "react-redux"
// import { selectAllusers } from '../users/usersSlice'
// import {nanoid} from "@reduxjs/toolkit"
import {postAdded} from "./postSlice"
import PostAuthors from './PostAuthors'
import { selectAllusers } from '../users/usersSlice'


const AddPostForm = () => {
  const verified_users = useSelector(selectAllusers)

  const dispatch = useDispatch()
 const [postForm, setPostForm ] = useState({
    title:"",
    comment:"",
    author:`${verified_users[0].name}`
 })
 const {title, comment, author} =postForm
const handleTitle = (e)=>{
  const {value,name} = e.target
setPostForm({...postForm, [name]:value})
}
const handleComment = (e)=>{
const {value,name} = e.target
setPostForm({...postForm, [name]:value})
}
const handleUserId = (e)=>{
const {value,name} = e.target
// console.log({...postForm, [name]:value})
setPostForm({...postForm, [name]:value})
}

const savePostHandle =(e)=>{
  e.preventDefault
if(title && comment){
  dispatch(
    postAdded(title,comment,author)
    // postAdded({
    //   id:nanoid(),
    //   title,
    //   comment
    // })
  )
}
setPostForm({
  title:"",
  comment:"",
  author:""
})

}




  return (
<div className='postFormContainer'>
<form className='psc_sub'>
<p className='ps_title'>Add a new post</p>

<label htmlFor="title" >Post Title</label>
<input type="text" name="title"  onChange={handleTitle} value={title} className='title_text_input'/>

<label htmlFor="comment" >Content</label>
<textarea name="comment"  onChange={handleComment}   value={comment} className='content_text_input'/>
<label htmlFor="comment" >Who are you</label>
<PostAuthors 
Author={author}
UserIdFunction = {handleUserId}
/>
<input type="button" value="save post" className='the_save_btn' onClick={savePostHandle} />
</form>
</div>

  )
}

export default AddPostForm
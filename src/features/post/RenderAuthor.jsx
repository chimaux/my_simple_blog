import React from 'react'
import {selectAllusers} from "../users/usersSlice"
import {useSelector} from "react-redux"

const RenderAuthor = ({user}) => {
      // console.log(props.user)
  const users = useSelector(selectAllusers)
  // console.log(users)
  const theAuthor = users.find(item => item.name === user)
  

  return (
    <p>
    {theAuthor ? theAuthor.name : "unknown Author" }
    
      </p>
  )
}

export default RenderAuthor

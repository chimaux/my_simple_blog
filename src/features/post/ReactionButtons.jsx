import React from 'react'
import {useDispatch} from "react-redux"
import { reactionAdded } from "./postSlice"

const reactionEmoji = {
    thumbsUp:'👍',
    wow:'😮',
    heart:'❤️',
    rocket:'🚀',
    coffee:'☕',
}



const ReactionButtons = ({post}) => {

    const dispatch = useDispatch()

    const reactionButtons = Object.entries(reactionEmoji).map(([name,emoji])=>(
        <button
        key={name}
        type='button'
        className='reactionButton'
        onClick={()=>dispatch(reactionAdded({postId:post.id, reaction:name}))}
        >
            {emoji} {post.reactions[name]}
        </button>
    ))
  return (
    <div style={{
        display:"flex",
        justifyContent:"space-between",
        width:"50%",
        marginTop:"5px"

    }}>
      {reactionButtons}
    </div>
  )
}

export default ReactionButtons

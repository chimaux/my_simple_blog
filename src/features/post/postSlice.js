import {createSlice,nanoid} from "@reduxjs/toolkit"
import {sub} from "date-fns"

const initialState = [
    {
        id:"1",
        title:"Learning Redux Toolkit",
        comment:"I've heard good things to say to you",
        date: sub(new Date(), {minutes:10}).toISOString(),
        reactions:{
            thumbsUp:0,
            wow:0,
            heart:0,
            rocket:0,
            coffee:0
        }
    },
    {
        id:"2",
        title:"Slices...",
        comment:"The more I say slice the more I want pizza",
        date: sub(new Date(), {minutes:5}).toISOString(),
        reactions:{
            thumbsUp:0,
            wow:0,
            heart:0,
            rocket:0,
            coffee:0
        }
    },
]

const postsSlice = createSlice({
    name:"posts",
    initialState,
    reducers:{ 
        postAdded:{
            reducer(state,action){
                state.push(action.payload)
            },
            prepare(title,comment,userId){
                return {
                    payload: {
                        id:nanoid(),
                        title,
                        comment,
                        date: new Date().toISOString(),
                        userId,
                        reactions:{
                            thumbsUp:0,
                            wow:0,
                            heart:0,
                            rocket:0,
                            coffee:0 
                        }
                      }
                }
          }
        },
        reactionAdded(state,action){
            const {postId,reaction} =action.payload
            const existingPost = state.find(post => post.id === postId)
                if (existingPost){
                    existingPost.reactions[reaction]++
                }
          
        }
     
    }
})

export const selectAllPost = (state)=>state.posts
export const {postAdded, reactionAdded} = postsSlice.actions
export default postsSlice.reducer
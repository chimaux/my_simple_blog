import {createSlice} from "@reduxjs/toolkit"

const initialState = [
    {id:'1',name:'Adeniyi Jones'},
    {id:'2',name:'Adeniji Nofisat'},
    {id:'3',name:'Adeniji Kayode'}
]


const usersSlice = createSlice({
    name:'users',
    initialState,
    reducers:{}
})

export const selectAllusers = (state) => state.users;
export default usersSlice.reducer
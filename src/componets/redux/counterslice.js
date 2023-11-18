import { createSlice } from "@reduxjs/toolkit";

export const counterslice = createSlice({
    name:'counterApp',
    initialState:{
        value:0
    },

 // actions are created inside this reducer key as object

    reducers:{
        // logic to update state
        // function to increment number
        increment:(state,action)=>{
            state.value +=action.payload
        },
        // function to decrement number
        decerment:(state,action)=>{
        state.value -= action.payload
        },
        // function to reset
        reset:(state)=>{
            state.value = 0
        }
    }
})

// action is required by componet inorder to update state

export const {increment,decerment,reset}=counterslice.actions
// reducer is required to store to change the state value
// export default counterslice.reducer
export default counterslice.reducer
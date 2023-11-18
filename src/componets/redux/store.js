import { configureStore } from "@reduxjs/toolkit";
import counterslice from "./counterslice";




export const store = configureStore({
    // reducer can only update value of state in store
    // reducer key is predefine ( object which can hold more than one reducer)
    reducer:{
        // reducer is coming from counterslice since we are export default
        // Counter:Counterslice
        Counter:counterslice
    }
})
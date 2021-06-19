import {createSlice, PayloadAction} from "@reduxjs/toolkit";



const initialState = {
    value : 1
}

const counter =  createSlice({
    name : "counter",
    initialState : initialState,
    reducers : {
        
    }
})

export const {incremented} = counter.actions;

export default counter.reducer;
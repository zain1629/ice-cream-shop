import {createSlice} from "@reduxjs/toolkit";



const initialState = {
    value : 1
}

const counter =  createSlice({
    name : "counter",
    initialState : initialState,
    reducers : {
        incremented(state){
            state.value++;
        }
    }
})

export const {incremented} = counter.actions;

export default counter.reducer;
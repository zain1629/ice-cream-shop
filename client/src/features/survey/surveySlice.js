import {createSlice} from "@reduxjs/toolkit";


//Setup initial state.
// @return Survey json.
const initialSurvey = {
    data : {}
}

const surveySlice =  createSlice({
    name : "counter",
    initialState : initialSurvey,
    reducers : {
        fetchSurvey(state,action){
            state.data = action.payload
        }
    }
})

//export fetchSurvey reducer.
export const {fetchSurvey} = surveySlice.actions;

export default surveySlice.reducer;
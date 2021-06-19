import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "../features/test/counter"
import surveyReducer from "../features/survey/surveySlice"

export const store = configureStore({
    reducer:{
        counter: counterReducer,
        survey:surveyReducer
    }
})
import {fetchSurvey} from "../features/survey/surveySlice";

const config = require("../config/config.json");

const url = config.dev.API+":"+config.dev.PORT;
const axios = require('axios').default;


console.log(url);
// Want to use async/await? Add the `async` keyword to your outer function/method.
export const fetchSurveyData = async(dispatch) => {
    try {
      const response = await axios.post(url);
      console.log(response);
      dispatch(fetchSurvey(response.data));
    } catch (error) {
      console.error(error);
    }
  }



 
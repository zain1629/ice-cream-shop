import * as Survey from "survey-react";
import "survey-react/survey.css";
import {useSelector} from "react-redux";
import {useEffect} from "react";



const CouponSurvey = (props) =>{


//use useSelector hook to get survey questions data from redux.
    const survey = useSelector((state)=> state.survey.data); 
    const onCompleteHandler = (data) =>{
        console.log(data.valuesHash);
    }

    let hasSurveyData = Object.keys(survey) == 0 ? true:false;
    
//SurveyJs library needs json to build survey
    return(
        <div id="surveyContainer" className="text-left mt-4">
            <h5 className="text-center md"><div className="iceCreamImg1 float-left"></div>Fill out the quick survey below to get your free ice cream coupon! <div className="iceCreamImg1 float-right"></div></h5>
           <Survey.Survey json={survey} onComplete={data=>{onCompleteHandler(data)}}/>

           {hasSurveyData ? "Survey is not currently available" : ""}
        </div> 
    )
}

export default CouponSurvey;


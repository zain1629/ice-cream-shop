import Header from '../components/header';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import CouponSurvey from "../forms/coupon_servey";
import {fetchSurveyData} from "../api/actions";
import {useDispatch} from "react-redux";
import {fetchSurvey} from "../features/survey/surveySlice";
import {useEffect} from "react"

const Survey = () =>{

//UseDispatch hook to dispatch fetch survey reducer.    
    const dispatch = useDispatch(fetchSurvey({}));

// useEffect hook to rerender the page once survey data is available.   
    useEffect(()=>{
        fetchSurveyData(dispatch);
    },[])
    

    return(
        <div className="main">
            <Header />
            <Navbar />
            <CouponSurvey />
            <Footer />
        </div>
    )


}

export default Survey
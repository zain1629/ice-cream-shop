import "react-awesome-button/dist/styles.css";
import { useHistory } from 'react-router-dom';



const Home_Content = () =>{
    let history = useHistory();

    return(
        <div className="register">
            <div className="register_container h-100" >
                <div className="home-item-wrapper-split row">
                    <div className="home-item col">
                        <div className="row h-75 pic-1"></div>
                        <div className="row h-25">
                            <div className="col pic-2"> </div>
                            <div className="col pic-3"> </div>
                        </div>
                    </div>
                    <div className="home-item col pic-4">
                         
                        <div className="survey-btn" onClick={()=>history.push('/survey')}><b>Get free ice cream!</b></div>
                    </div>
                    <div className="home-item col">
                        <div className="row h-50 pic-5"> </div>
                        <div className="row h-50 pic-6"> </div>
                        
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Home_Content;
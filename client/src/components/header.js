import logo from '../res/images/logo_ice_cream.png';

//Return header component
const header = ()=>{
    return(
        <div className="header " >
         <img src={logo} alt="logo" width="200" />
        </div>
    )
} 


export default header;
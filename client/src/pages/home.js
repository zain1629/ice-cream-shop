import Header from '../components/header';
import Navbar from '../components/navbar';
import HomeContent from '../components/home_content';
import Footer from '../components/footer';

//Return home page
const Home = ()=>{

    return(
        <div className="main">
            <Header />
            <Navbar />
            <HomeContent />
            <Footer />
        </div>
    )
} 


export default Home;
 
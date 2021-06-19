import { Card , Row} from "react-bootstrap";
import {SiFacebook, SiTwitter, SiInstagram , SiLinkedin} from "react-icons/si"


const footer = () => {

    return (
        <div className="footer-wrapper">
            <Card className="footer">
                <Card.Body>
                    <Row >
                        <div className="social-wrapper float-left">
                            <p className="social text-muted mb-0 pb-0 bold-text"><span>Join Us</span> <span className="mx-2"><SiFacebook /></span> <span className="mx-2"><SiTwitter /></span> <span className="mx-2"><SiInstagram /></span> <span className="mx-2"><SiLinkedin /></span> </p>
                        </div>

                        <div className="footer-links-wrapper"> 
                            <ul className="float-right">
                                <li>Scoops Shop Inc </li>
                                <li>Contact Us</li>
                                <li>Franchise</li>
                                <li>Privacy</li>
                                <li>Locations</li>
                                <li>Terms And Conditions</li>
                            </ul>
                        </div>

                    </Row>
                </Card.Body>
            </Card>

        </div>
    )
}

export default footer;

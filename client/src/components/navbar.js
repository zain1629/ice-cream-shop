import {Nav,NavDropdown,Navbar} from 'react-bootstrap';


//Return Navbar component
const navbar = () =>{
    return(
        <div className="nav_container ">
            <Navbar expand="lg">

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />    
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="nav-items-container" >
                    <Nav.Item>
                        <Nav.Link href="/home">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <NavDropdown title="Flavors" id="nav-dropdown">
                            <NavDropdown.Item eventKey="4.1">Chocolate</NavDropdown.Item>
                            <NavDropdown.Item eventKey="4.2">Burbon Pecan</NavDropdown.Item>
                            <NavDropdown.Item eventKey="4.3">Vanilla</NavDropdown.Item>
                            <NavDropdown.Item eventKey="4.4">Caramel</NavDropdown.Item>
                            <NavDropdown.Item eventKey="4.4">Cherry</NavDropdown.Item>
                            <NavDropdown.Item eventKey="4.4">Peanut Butter</NavDropdown.Item>
                            
                        </NavDropdown>
                    </Nav.Item>
                    <Nav.Item>
                        <NavDropdown title="Toppings" id="nav-dropdown">
                            <NavDropdown.Item eventKey="4.1">Hot Fudge</NavDropdown.Item>
                            <NavDropdown.Item eventKey="4.2">Sprinkles</NavDropdown.Item>
                            <NavDropdown.Item eventKey="4.3">Caramel</NavDropdown.Item>
                            <NavDropdown.Item eventKey="4.4">Oreos</NavDropdown.Item>
                            <NavDropdown.Item eventKey="4.4">Nuts</NavDropdown.Item>
                            <NavDropdown.Item eventKey="4.4">Fruits</NavDropdown.Item>
                            
                        </NavDropdown>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#link">Services</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#link">About</Nav.Link>
                    </Nav.Item>
                </Nav>
                </Navbar.Collapse>
         
            </Navbar>
        </div>
    )
}
export default navbar;
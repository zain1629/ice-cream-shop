import {Button, Form} from "react-bootstrap";


//login is built but its not being used right now. 

const login = (user) =>{

    console.log(user);    

    return(
            <Form className="login_container " >
            <Form.Group className="xs" controlId="formBasicEmail">
                <Form.Label className="float-left text-left">Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="xs" controlId="formBasicPassword">
                <Form.Label className="float-left text-left">Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="xs" controlId="formBasicCheckbox">
                <Form.Check className="text-left w-100" type="checkbox" label="Remember me" />
            </Form.Group>
            <Form.Group>
            <Button variant="primary" type="submit" className="w-100" >
                Submit
            </Button>
            </Form.Group>
            <Form.Group className="xs" controlId="formBasicCheckbox">
                <span><a href="/survey">Forgot password</a></span>
            </Form.Group>
            </Form>
    )
}
export default login;
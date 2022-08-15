// Imports
import React, {Component} from 'react'
import './AppTools.css'
import {Card, Form, Button} from 'react-bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Login extends Component{
  
  // Handle login page stuff
  handleEmailInput = event => {
    this.setState({ EMAIL: event.target.value });
  }
  handlePasswordInput = event => {
    this.setState({PASSWORD: event.target.value});
  }
  logValue = () => {
    console.log("LOGIN: " + this.state.EMAIL + " | " + this.state.PASSWORD)
    if (localStorage.getItem("EMAIL:"+this.state.EMAIL)==this.state.EMAIL){
      if (localStorage.getItem('PASSWORD:'+this.state.EMAIL)==this.state.PASSWORD){
        alert("Login successful")
      }
      else {
        alert("Login failed: Wrong password.")
      }
    }
    else {
      alert("Login failed: Wrong or nonexistant email-address.")
    }
  }

  render(){
    return(
      <div className="page_background_cadetblue">

        {/* Header */}
        <div className="page_background_lightblue">
            <div>
                <div className="webHeader_container">
                    <h1 className="webHeader_h1">
                        <br/>
                        Property-Manager
                    </h1>
                    <h2 className="webHeader_h2">
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        Quick - Secure - Convenient<br/>
                        [Login]
                        <br/>
                        <br/>
                    </h2>
                </div>
            </div>
          <p className="page_margin & text_p & align_center">
            Hello there!  Please sign-in using the button below to gain access to your Property-Manager account.
          </p>
          <br/>
        </div>

        {/* Login Page */}
        <div>
          <Card className="mb-3 & form_margin" style={{color:"#000"}}>
            <Form className="form_margin">
              <Form.Group controlId="formEmail">
                <Form.Label> Email-Address: </Form.Label>
                <Form.Control type="email" placeholder="e.g., johndoe@example.com" onChange={this.handleEmailInput}/>
                <Form.Text className="text-muted">
                  <br/>We'll never share your email-address or personal information with 3rd parties.
                </Form.Text>
                <br/>
                <br/>
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Label> Password: </Form.Label>
                <Form.Control type="password" placeholder="e.g., password123" onChange={this.handlePasswordInput}/>
              </Form.Group>
              <br/>
              <hr line="dashed"/>
              <Button variant="primary" type="submit" onClick={this.logValue}>Login</Button>
            </Form>
          </Card>
          <br/>
        </div>

        {/* No account?  Sign up! */}
        <div className="page_background_cadetblue">
            <Card className="mb-3 && form_margin && align_center" style={{color:"#000"}}>
              <Card.Body>
                <Card.Title> Don't have an account yet? </Card.Title>
                <Card.Text>
                  Don't fret!  Click on the button below to create your account.
                </Card.Text>
                <Button variant="secondary" href="./Signup">Go to the Sign-Up Page</Button>
              </Card.Body>
            </Card>
            <br/>
        </div>
      </div>
      // End code here
      );
    }
}

export default Login;
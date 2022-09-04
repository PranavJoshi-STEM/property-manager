// Imports
import React, {Component} from 'react'
import './AppTools.css'
import {Card, Form, Button} from 'react-bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Signup extends Component{
  
  // Handle login page stuff
  handleEmailInput = event => {
    this.setState({ EMAIL: event.target.value });
  }
  handlePasswordInput = event => {
    this.setState({PASSWORD: event.target.value});
  }
  logValue = () => {
    console.log("SIGNUP: " + this.state.EMAIL + " | " + this.state.PASSWORD)
    localStorage.setItem("EMAIL:"+this.state.EMAIL, this.state.EMAIL)
    localStorage.setItem("PASSWORD:"+this.state.EMAIL, this.state.PASSWORD)
  }

  render(){
    return(
      <div className="page_background_myDarkred">

        {/* Header */}
        <div className="page_background_myLightred">
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
                        [Sign-Up]
                        <br/>
                        <br/>
                    </h2>
                </div>
            </div>
          <p className="page_margin & text_p & align_center">
            Hello there!  To use Property-Manager, you must first create an account.
          </p>
          <br/>
        </div>

        {/* Sign-up card */}
        <div>
          <Card className="mb-3 & form_margin" style={{color:"#000"}}>
            <Form className="form_margin">
              <Form.Group controlId="formEmail">
                <Form.Label> Your Email-Address: </Form.Label>
                <Form.Control type="email" placeholder="e.g., johndoe@example.com" onChange={this.handleEmailInput}/>
                <Form.Text className="text-muted">
                  <br/>We'll never share your email-address or personal information with 3rd parties.
                </Form.Text>
                <br/>
                <br/>
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Label> Create a Password: </Form.Label>
                <Form.Control type="password" placeholder="e.g., password123" onChange={this.handlePasswordInput}/>
              </Form.Group>
              <br/>
              <hr line="dashed"/>
            
                <p className="text_p_alert">
                THESE IS A REQUIRED FIELD: <br/>
                * ⚠️ Due to security reasons, you can't change your Property-Manager account password.  To change/delete your account, you must contact Property-Manager staff. <br/>
                * We will never sell/share your information (account details, email-address, banking details etc.) to 3rd parties.
                </p>
              <input
                type="checkbox"
                name="check"
                value="2"
                required="required"/> I understand and accept everything listed above.<br/><br/>
            

              <Button variant="primary" type="submit" onClick={this.logValue}>Sign-Up</Button>
            </Form>
          </Card>
          <br/>
        </div>

        {/* Already have an account?  Log-in now! */}
        <div className="page_background_myDarkred">
            <Card className="mb-3 && form_margin && align_center" style={{color:"#000"}}>
              <Card.Body>
                <Card.Title> Already have an account? </Card.Title>
                <Card.Text>
                  Click the button below to go to the login page!
                </Card.Text>
                <Button variant="secondary" href="./login">Go to the Login Page</Button>
              </Card.Body>
            </Card>
            <br/>
        </div>
      </div>
      // End code here
      );
    }
}

export default Signup;
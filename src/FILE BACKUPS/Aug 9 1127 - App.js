// Imports
import React, {Component} from 'react'
import './Components/App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Button, Form, Card} from 'react-bootstrap'

class App extends Component {
  constructer (){
    var user = {
      EMAIL: "",
      PASSWORD:"",};
  }

  // Handle login page stuff
  handleInput = event => {
    this.setState({ EMAIL: event.target.value });
    this.setState({ PASSWORD: event.target.value });
  }
  logValue = () => {
    console.log(this.state.EMAIL + " | " + this.state.PASSWORD);
    this.user.EMAIL = this.state.EMAIL;
    this.user.PASSWORD = this.state.PASSWORD;
  }

  render(){
     return(
      // Header
      <div className="page_background_cadetblue">
        <div className="page_background_lightblue">
          <div className="webHeader_container">
            <h1 className="webHeader_h1">
              Property-Manager
            </h1>
            <h2 className="webHeader_h2">
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              Index · Home · Login
              <br/>
              <br/>
            </h2>
          </div>
          <div>
            <p className="page_margin & text_p & text_center">
              Hello there!  Please sign-in using the button below to gain access to your Property-Manager account.
            </p>
            <br/>
          </div>
        </div>

        {/* Login Form */}
        <div>
          <Card className="mb-3 & form_margin" style={{color:"#000"}}>
            <Form className="form_margin">
              <Form.Group controlId="formEmail">
                <Form.Label> Email-address: </Form.Label>
                <Form.Control type="email" placeholder="e.g., johndoe@example.com" onChange={this.handleInput}/>
                <Form.Text className="text-muted">
                  We'll never share your email-address or personal information with 3rd parties.
                </Form.Text>
                <br/>
                <br/>
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Label> Password: </Form.Label>
                <Form.Control type="password" placeholder="e.g., password123" onChange={this.handleInput}/>
              </Form.Group>
              <br/>
              <hr line="dashed"/>
              <Button variant="primary" type="submit" onClick={this.logValue}>Login</Button>
            </Form>
          </Card>
          <br/>
        </div>
      </div>

      // End code here
      );}
}

export default App;
import React, {Component} from 'react'
class Communicate extends Component {
  state = {
    data:null
  };
  
  componentDidMount = () => {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
  // fetching the GET route from the Express server which matches the GET route from server.js

  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();
  
    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };}

export default Communicate;

/*
 *https://www.section.io/engineering-education/how-to-setup-nodejs-express-for-react/
 * 
 */

/* 
state = {
  data:null
};

  componentDidMount = () => {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
  // fetching the GET route from the Express server which matches the GET route from server.js

  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();
  
    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  }; 
*/
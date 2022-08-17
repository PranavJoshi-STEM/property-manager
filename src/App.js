// Imports
import React, {Component} from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Import Pages
import Login from './Login';
import Home from './Home';
import Signup from './Signup';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      posts: []
    };
  }
  /*state = {
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
  };*/

  render(){
     return(
      <div>
      <p>{this.state.data}</p>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route exact path="/Login" element={<Login/>}/>
            <Route exact path="/Home" element={<Home/>}/>
            <Route exact path="/Signup" element={<Signup/>}/>
            {/* Redirect to home/not-found page if page is not found */}
            <Route path="*" element={<Navigate to="/Home"/>} />
          </Routes>
        </BrowserRouter>
      </div>
      </div>
      );
    }
}

export default App;
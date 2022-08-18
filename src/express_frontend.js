import {Component} from 'react'
import express from 'express'

init = () => {
    this.axios = require('axios')
    this.app = express();
    this.PORT = process.env.PORT || 3000;
    this.serverProxy = "localhost:3001/express_backend"; // where the backend is located
    this.state = {
        text:null,
        users:null,
    }
}
componentDidMount = () => {
    this.callBackendAPI()
        .then(res => this.setState(
        {text: res.text, 
        users: res.users,}
        ))
        .catch(err => console.log(err));
}
callBackendAPI = async () => {
    const response = await fetch(this.serverProxy);
    const body = await response.json();
    if (response.status !== 200) {
        throw Error(body.message) 
    }
    return body;
}

// --- SEND DATA --- 
runServer = () => {
    this.app.get(this.serverProxy, (req, res) => {
        res.json(this.state);});
    this.app.listen(this.PORT, function(err){
        if (err) console.log(err);
            console.log("Server listening on PORT:", this.PORT);
    });
}


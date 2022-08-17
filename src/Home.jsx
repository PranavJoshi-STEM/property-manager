// Imports
import React, {Component} from 'react'
import './AppTools.css';
import {Card, Button} from 'react-bootstrap'

class Home extends Component {
  // GET DATA FROM SERVER
  state = {
    text:null,
    users:null
  };
  componentDidMount = () => {
    this.callBackendAPI()
      .then(res => this.setState(
        {text: res.text, 
        users: res.users,}
        ))
      .catch(err => console.log(err));
  }
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  // RENDER CODE
  render () {
    return (
      <div>
        <p>{this.state.text}</p>
        <p>{this.state.users}</p>
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
                              [Home]
                              <br/>
                              <br/>
                          </h2>
                      </div>
                  </div>
                  <p className="page_margin & text_p & align_center">
                    Thank you for considering Property-Manager!
                  </p>
                  <br/>
              </div>

              {/* Cards */}
              <div>
                <table>
                  <tr>
                    <td>
                      <Card className="mb-3 && card_margin" style={{color:"#000"}}>
                        <Card.Img src="https://picsum.photos/250/250"/>
                        <Card.Body>
                          <Card.Title> Login to your account now! </Card.Title>
                          <Card.Text>
                            Click me right now!
                          </Card.Text>
                          <Button variant="primary">Readmore</Button>
                        </Card.Body>
                      </Card>
                    </td>
                    <td>
                      <Card className="mb-3 && card_margin" style={{color:"#000"}}>
                        <Card.Img src="https://picsum.photos/250/250"/>
                        <Card.Body>
                          <Card.Title> Login to your account now! </Card.Title>
                          <Card.Text>
                            Click me right now!
                          </Card.Text>
                          <Button variant="primary">Read More</Button>
                        </Card.Body>
                      </Card>
                    </td>
                    <td>
                      <Card className="mb-3 && card_margin" style={{color:"#000"}}>
                        <Card.Img src="https://picsum.photos/250/250"/>
                        <Card.Body>
                          <Card.Title> Login to your account now! </Card.Title>
                          <Card.Text>
                            Click me right now!
                          </Card.Text>
                          <Button variant="primary">Read More</Button>
                        </Card.Body>
                      </Card>
                    </td>
                    <td>
                      <Card className="mb-3 && card_margin" style={{color:"#000"}}>
                        <Card.Img src="https://picsum.photos/250/250"/>
                        <Card.Body>
                          <Card.Title> Login to your account now! </Card.Title>
                          <Card.Text>
                            Click me right now!
                          </Card.Text>
                          <Button variant="primary">Read More</Button>
                        </Card.Body>
                      </Card>
                    </td>
                  </tr>
                </table>
                <br/>
                <br/>
              </div>

              {/* Ending */}
              <div className="page_background_lightblue">
                <div class="context">
                  <br/>
                  <h1 className="webHeader_h2">Recent News</h1>
                  <br/>
                </div>
                <div class="area">
                  <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                  <br/>
                  <br/>
                  <ul>
                    <Card className="mb-3 && form_margin" style={{color:"#000"}}>
                      <Card.Body>
                        <Card.Title> Login to your account now! </Card.Title>
                        <Card.Text>
                          Click me right now!
                        </Card.Text>
                        <Button variant="secondary" href="https://www.youtube.com">Readmore</Button>
                      </Card.Body>
                    </Card>
                  </ul>
                  <ul>
                    <Card className="mb-3 && form_margin" style={{color:"#000"}}>
                      <Card.Body>
                        <Card.Title> Login to your account now! </Card.Title>
                        <Card.Text>
                          Click me right now!
                        </Card.Text>
                        <Button variant="secondary">Readmore</Button>
                      </Card.Body>
                    </Card>
                  </ul>
                  <ul>
                    <Card className="mb-3 && form_margin" style={{color:"#000"}}>
                      <Card.Body>
                        <Card.Title> Login to your account now! </Card.Title>
                        <Card.Text>
                          Click me right now!
                        </Card.Text>
                        <Button variant="secondary">Readmore</Button>
                      </Card.Body>
                    </Card>
                  </ul>
                  <ul>
                    <Card className="mb-3 && form_margin" style={{color:"#000"}}>
                      <Card.Body>
                        <Card.Title> Login to your account now! </Card.Title>
                        <Card.Text>
                          Click me right now!
                        </Card.Text>
                        <Button variant="secondary">Readmore</Button>
                      </Card.Body>
                    </Card>
                  </ul>
                </div>
              </div>
          </div>
      </div>
    );
  }
}

export default Home;
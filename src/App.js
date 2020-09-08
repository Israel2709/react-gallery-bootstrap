import React, { Component } from 'react';
import logo from './logo.svg';
import { Container, Row, Col } from 'reactstrap'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state ={
      scrollY:0,
      imgArray:[
        {
          imgUrl:"https://picsum.photos/id/",
          caption:"text 1"
        },
        {
          imgUrl:"https://picsum.photos/id/",
          caption:"text 2"
        },
        {
          imgUrl:"https://picsum.photos/id/",
          caption:"text 3"
        },
        {
          imgUrl:"https://picsum.photos/id/",
          caption:"text 4"
        },
        {
          imgUrl:"https://picsum.photos/id/",
          caption:"text 5"
        },
        {
          imgUrl:"https://picsum.photos/id/",
          caption:"text 6"
        },
        {
          imgUrl:"https://picsum.photos/id/",
          caption:"text 7"
        }
      ]
    }
    this.handleScroll = this.handleScroll.bind(this)
  }
  /*componentDidMount(){
    let y = window.scrollY;
    console.log(y)
  }*/
  handleScroll(event){
    console.log(event.target)
    let y = event.target.scrollTop;
    console.log(y)
    if( 350 > y > 300 ){
      this.setState({ imgArray : this.state.imgArray.concat(this.state.imgArray)})
    }
  }
  render() {
    const viewportHeight = window.innerHeight;
    const heightsArray = [
      .25,
      .5,
      .75,
      1
    ]
    return (
      <div className="App">
        <Container>
          <Row>
            <Col xs="12" className="fit-height" onScroll={this.handleScroll}>
              <div className="card-columns " >
                {
                  this.state.imgArray.map( ( img, index ) => {
                    return (
                      <div className="card">
                        <img src={`${img.imgUrl}${index}/500/${ Math.floor(heightsArray[(Math.floor(Math.random() * 3) + 1 )] * viewportHeight)}`} className="card-img-top" alt="..." />
                        <div className="caption">{img.caption}</div>
                      </div>
                    )
                  })
                }
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default App;

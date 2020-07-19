import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel'
import "./panels.css"

class PanelPage extends Component {
  render() {
  return (
    <div className="crs">
    <Carousel>
    <Carousel.Item>
      <a href="/">
      <img
        className="d-block w-100"
        src="/static/frontend/img/3.png"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
      </a>
    </Carousel.Item>
    <Carousel.Item>
      <a href="/login">
      <img
        className="d-block w-100"
        src="/static/frontend/img/1.png"
        alt="Third slide"
      />
  
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
      </a>
    </Carousel.Item>
    <Carousel.Item>
      <a href="/school">
      <img
        className="d-block w-100"
        src="/static/frontend/img/2.png"
        alt="Third slide"
      />
  
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
      </a>
    </Carousel.Item>
  </Carousel>
  </div>
);
  }

}

export default PanelPage;
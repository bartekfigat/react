import React, { Component } from "react";
import { Jumbotron, Carousel } from "react-bootstrap";
import Desktop from "../../img/desktop.jpg";
import People from "../../img/photo-15.jpg";
import "../../styleCss/Landing.css";

class LandingImaeg extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <Carousel>
            <Carousel.Item>
              <img className="image" alt="900x500" src={Desktop} />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="image" alt="900x500" src={People} />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="image" alt="900x500" src={Desktop} />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>;
        </Jumbotron>;
      </div>
    );
  }
}

export default LandingImaeg;

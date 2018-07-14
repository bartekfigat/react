import React from "react";
import { Carousel } from "react-bootstrap";
import desktop from "./img/desktop.jpg";

const LandingImaeg = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="image"
            width={900}
            height={500}
            alt="900x500"
            src={desktop}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src={desktop} />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src={desktop} />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>;
    </div>
  );
};

export default LandingImaeg;

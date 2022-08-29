import Carousel from 'react-bootstrap/Carousel';
import React from 'react';

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("./Images/1.jpg")}
          alt="First slide"
          height="500px"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("./Images/2.jpg")}
          alt="Second slide"
          height="500px"

        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("./Images/3.jpg")}
          alt="Third slide"
          height="500px"

        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
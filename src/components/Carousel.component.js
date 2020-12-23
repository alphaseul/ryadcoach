import React, { Component } from "react";
import img1 from "../page/img/img-1.jpg";
import img2 from "../page/img/img-2.jpeg";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";

class MyCarousel extends Component {
  render() {
    return (
      <Carousel>
        <div>
          <img src={img1} alt="" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={img2} alt="" />
          <p className="legend">Legend 2</p>
        </div>
      </Carousel>
    );
  }
}
export default MyCarousel;

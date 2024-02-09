import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./LogoCarousel.css";

class LogoCarousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };
    return (
      <div className="mainContainer">
        
        <Slider {...settings}>
          <div className="container">
            <img
              className="img-logo"
              src="../../../public/assets/peisadefinitivo.png"
            />
          </div>
          <div className="container">
            <img
              className="img-logo"
              src="../../../public/assets/aristonaka.png"
            />
          </div>
          <div className="container">
            <img
              className="img-logo"
              src="../../../public/assets/estallll.png"
            />
          </div>
          <div className="container">
            <img
              className="img-logo"
              src="../../../public/assets/ferrumaso.png"
            />
          </div>
        </Slider>
      </div>
    );
  }
}

export default LogoCarousel;

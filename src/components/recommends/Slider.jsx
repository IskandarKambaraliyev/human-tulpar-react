import React, { Component } from "react";
import Slider from "react-slick";

import recommmendsImg1 from "../../assets/images/recommends/img-1.png";
import recommmendsImg2 from "../../assets/images/recommends/img-2.png";
import recommmendsImg3 from "../../assets/images/recommends/img-3.png";
import recommmendsImg4 from "../../assets/images/recommends/img-4.png";
import recommmendsImg5 from "../../assets/images/recommends/img-5.png";

const images = {
    recommmendsImg1,
    recommmendsImg2,
    recommmendsImg3,
    recommmendsImg4,
    recommmendsImg5,
}

export default class AutoPlay extends Component {
    render() {
        var settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 5,
          slidesToScroll: 5,
          initialSlide: 0,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        };
      return (
        <div>
          <Slider {...settings}>
            {/* <div>
              <img src={recommmendsImg1} alt="" />
            </div>
            <div>
              <img src={recommmendsImg2} alt="" />
            </div>
            <div>
              <img src={recommmendsImg3} alt="" />
            </div>
            <div>
              <img src={recommmendsImg4} alt="" />
            </div>
            <div>
              <img src={recommmendsImg5} alt="" />
            </div> */}
            {Object.keys(images).map((item, i) => (
                <div>
                    <img src={images[item]} alt="" />
                </div>
            ))}
          </Slider>
        </div>
      );
    }
  }
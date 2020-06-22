import React, { Component } from "react";
import Slider from "react-slick";
import mobile from 'is-mobile'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: mobile() ? 1 : 2,
      slidesToScroll: 1
    };

    const slideStyle = { background: 'black', borderRadius: '15px', border: '1px solid white', margin: '15px', padding: '15px', fontWeight: 'bolder' };

    return (
      <div>
        <Slider {...settings}>
            <div>
                <div>
                    <div style={slideStyle}>
                        <a target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }} href="https://www.tripadvisor.ca/ShowUserReviews-g60403-d12839497-r755393369-Dells_Escape_Rooms-Wisconsin_Dells_Wisconsin.html">
                            <div>
                                <div>
                                    <span className="icon brands fa-tripadvisor alt"></span>Audrey V wrote a review May 2020
                                </div>
                                <h3 className="gold"><u className="gold">Amazing</u><br/><span>★★★★★</span></h3>
                                <div>This was super-duper fun! 100% recommend. 10/10. Disavowed almost trapped us in there for liiiiiiife!</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div style={slideStyle}>
                        <a target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }} href="https://www.tripadvisor.com/ShowUserReviews-g60403-d12839497-r733994729-Dells_Escape_Rooms-Wisconsin_Dells_Wisconsin.html">
                            <div>
                                <div>
                                    <span className="icon brands fa-tripadvisor alt"></span>Kate C wrote a review Dec 2019
                                </div>
                                <h3 className="gold"><u className="gold">Christmas gift for family... SO MUCH FUN!</u><br/><span>★★★★★</span></h3>
                                <div>We had 5 adults in Wellington Manor. We had to solve the murder mystery. I can't believe how much fun we had! Highly recommend.</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div style={slideStyle}>
                        <a target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }} href="https://www.tripadvisor.com/ShowUserReviews-g60403-d12839497-r690976868-Dells_Escape_Rooms-Wisconsin_Dells_Wisconsin.html">
                            <div>
                                <div>
                                    <span className="icon brands fa-tripadvisor alt"></span>Pcarl wrote a review Jul 2019
                                </div>
                                <h3 className="gold"><u className="gold">So much fun!</u><br/><span>★★★★★</span></h3>
                                <div>We did this with an 8-year-old and an 11-year-old and they had a blast trying to solve all the clues. I would highly recommend it!</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </Slider>
      </div>
    );
  }
}
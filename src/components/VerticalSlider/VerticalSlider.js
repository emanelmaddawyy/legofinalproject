import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './VerticalSlider.css';
const config = require('../../config.json');


export default class VerticalSlider extends Component {

  state = {
    nav1: null,
    nav2: null
  };

  componentDidMount = async()=>{
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    return (

      <div className="d-flex">
      <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={this.props.images.length}
          swipeToSlide={true}
          focusOnSelect={true}
          slidesToScroll={1}
          vertical={true}
          dots={false}
          arrows= {true}>
            {
              this.props.images.map(item => (
                <div>
                  <img src={config.imagesEndpoint + item}></img>
                </div>
              ))
            }
        </Slider>

        
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
          verticalSwiping={true}
          vertical={true}
          dots={false}
          arrows= {false}>
           {
              this.props.images.map(item => (
                <div>
                  <img src={config.imagesEndpoint + item}></img>
                </div>
              ))
            }
        </Slider>
      </div>
    );
  }
}
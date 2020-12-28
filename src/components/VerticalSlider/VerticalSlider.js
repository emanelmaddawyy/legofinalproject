import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class VerticalSlider extends Component {

    state = {
      nav1: null,
      nav2: null
    };


  componentDidMount() {
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
          slidesToShow={5}
          swipeToSlide={true}
          focusOnSelect={true}
          slidesToScroll={1}
          vertical={true}
          verticalSwiping={true}
          dots={false}
          arrows= {true}

        >
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>


        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
          verticalSwiping={true}
          vertical={true}
          dots={false}
          arrows= {false}


        >
          <div>
            <h3>
              <img src="../../21042.jpeg"/>
            </h3>
          </div>
          <div>
            <h3>
            <img src="../../21042.jpeg"/>
            </h3>
          </div>
          <div>
            <h3>
            <img src="../../21042.jpeg"/>
            </h3>
          </div>
          <div>
            <h3>
            <img src="../../21042.jpeg"/>
            </h3>
          </div>
          <div>
            <h3>
 55555
            </h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>

      </div>
    );
  }
}
import React, { Component } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './VerticalSlider.css';
const config = require('../../config.json');


export default class VerticalSlider extends Component {

	state = {
		current: 0
  };

  componentDidUpdate(nextProps) {
    if (this.props.images != nextProps.images) {
      this.setState({current: 0});
    }
  }

	renderImg = (index) => {
		this.setState({ current: index });
  };

	prevSlide = () => {
		if (this.state.current === 0) {
			this.setState({ current: this.props.images.length - 1 });
		} else {
			this.setState({ current: this.state.current - 1 });
		}
	};

	nextSlide = () => {
		if (this.state.current === this.props.images.length - 1) {
			this.setState({ current: 0 });
		} else {
			this.setState({ current: this.state.current + 1 });
		}
	};

	render() {
		return (
			<div className='row bg-white m-0'>
				<div className='col-12 col-xl-11 order-xl-2 '>
					<div className='ImgWrapper'>
						<div className='arrow' id='arrow-left'>
							<i
								class='fas fa-chevron-circle-left'
								onClick={this.prevSlide}></i>
						</div>
						<div className='arrow' id='arrow-right'>
							<i
								class='fas fa-chevron-circle-right'
								onClick={this.nextSlide}></i>
						</div>
						<img
							id='featured'
							src={config.imagesEndpoint + this.props.images[this.state.current]}
							className='w-100 img-fluid'
						/>
					</div>
				</div>

				<div
					id='slide-wrapper'
					className='col-12 col-xl-1 order-xl-1 text-center'>
					{this.props.images.map((item, i) => {
						return (
							<img
								key={i}
								onClick={() => this.renderImg(i)}
								className='thumbnail'
								src={config.imagesEndpoint + item}
							/>
						);
					})}
				</div>
			</div>
		);
	}
}
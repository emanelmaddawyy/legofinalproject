import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './ProductImageSlider.css';

export class ProductImageSlider extends Component {
	state = {
		whichImg: this.props.img,
		current: 0,
		length: this.props.sliderImgs.length,
	};

	renderImg = (e) => {
		console.log(e.target.src.split('/')[e.target.src.split('/').length - 1]);

		let clickedImg =
			'/' + e.target.src.split('/')[e.target.src.split('/').length - 1];

		this.setState({ whichImg: clickedImg });
	};

	prevSlide = () => {
		if (this.state.current === 0) {
			this.setState({ current: this.state.length - 1 });
			this.setState({ whichImg: this.props.sliderImgs[this.state.current] });
		} else {
			this.setState({ current: this.state.current - 1 });
			this.setState({ whichImg: this.props.sliderImgs[this.state.current] });
		}
	};

	nextSlide = () => {
		if (this.state.current === this.state.length - 1) {
			this.setState({ current: 0 });
			this.setState({ whichImg: this.props.sliderImgs[this.state.current] });
		} else {
			this.setState({ current: this.state.current + 1 });
			this.setState({ whichImg: this.props.sliderImgs[this.state.current] });
		}
	};

	render() {
		console.log('ProductImageSlider state', this.state.current);
		// console.log(this.props.sliderImgs[this.state.current],'??????')
		// console.log('ProductImageSlider props', this.props);

		return (
			<div className='row bg-white'>
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
							src={this.state.whichImg}
							className='w-100 img-fluid'
							alt={this.props.location.state.name}
						/>
					</div>
				</div>

				<div
					id='slide-wrapper'
					className='col-12 col-xl-1 order-xl-1 text-center'>
					{this.props.sliderImgs.map((item, i) => {
						return (
							<img
								key={i}
								onClick={this.renderImg}
								className='thumbnail'
								src={item}
								alt={this.props.location.state.name}
							/>
						);
					})}
				</div>
			</div>
		);
	}
}

export default withRouter(ProductImageSlider);

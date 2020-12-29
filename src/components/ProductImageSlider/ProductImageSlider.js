import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './ProductImageSlider.css';

export class ProductImageSlider extends Component {
	state = {
		whichImg: this.props.img,
	};

	renderImg = (e) => {
		console.log(e.target.src.split('/')[e.target.src.split('/').length - 1]);

		let clickedImg =
			'/' + e.target.src.split('/')[e.target.src.split('/').length - 1];

		this.setState({ whichImg: clickedImg });
	};

	render() {
		console.log('ProductImageSlider state', this.state);

		return (
			<div className='row'>
				<div className='col-12 col-xl-11 order-xl-2 '>
					<div className='ImgWrapper'>
						<img
							id='featured'
							src={this.state.whichImg}
							className='w-100 img-fluid'
							alt={this.props.location.state.name}
						/>
					</div>
				</div>

				<div className='col-12 col-xl-1 order-xl-1 text-center'>
					<img
						onClick={this.renderImg}
						className='thumbnail'
						src='/alt1.jpeg'
						alt={this.props.location.state.name}
					/>
					<img
						onClick={this.renderImg}
						className='thumbnail'
						src='/alt2.jpeg'
						alt={this.props.location.state.name}
					/>
					<img
						onClick={this.renderImg}
						className='thumbnail'
						src='/alt3.jpeg'
						alt={this.props.location.state.name}
					/>
					<img
						onClick={this.renderImg}
						className='thumbnail'
						src='/alt4.jpg'
						alt={this.props.location.state.name}
					/>
					<img
						onClick={this.renderImg}
						className='thumbnail'
						src='/alt5.jpeg'
						alt={this.props.location.state.name}
					/>
					<img
						onClick={this.renderImg}
						className='thumbnail'
						src='/alt6.jpg'
						alt={this.props.location.state.name}
					/>
					<img
						onClick={this.renderImg}
						className='thumbnail'
						src='/alt7.jpeg'
						alt={this.props.location.state.name}
					/>
					<img
						onClick={this.renderImg}
						className='thumbnail'
						src='/alt8.jpeg'
						alt={this.props.location.state.name}
					/>
				</div>
			</div>
		);
	}
}

export default withRouter(ProductImageSlider);


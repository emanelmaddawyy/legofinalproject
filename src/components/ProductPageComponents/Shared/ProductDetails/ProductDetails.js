import React from 'react';
import { Row } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import TooltipTop from "./TooltipTop/TooltipTop";

import './ProductDetails.css';

const ProductDetails = (props) => {
	return (
		<>
			<Row className='ProductDetailsContainer'>
				<div className='ProductDetails'>
					<div className='ProductDetailsStyle bl-none'>
						<span className='ProductDetailsStyleIcon'>
							<i class='fas fa-birthday-cake'></i>
						</span>

						<span className='ProductDetailsStyleData age'>
							{props.location.state.ages}
						</span>

						<p className='ProductDetailsStyleTitle'>Ages</p>
					</div>

					<div className='ProductDetailsStyle'>
						<span className='ProductDetailsStyleIcon'>
							<i class='fas fa-puzzle-piece'></i>
						</span>

						<span className='ProductDetailsStyleData'>
							{props.location.state.pieces}
						</span>

						<p className='ProductDetailsStyleTitle'>Pieces</p>
					</div>

					<div className='ProductDetailsStyle'>
						<span className='ProductDetailsStyleIcon'>
							<i class='fas fa-crown'></i>
						</span>

						<span className='ProductDetailsStyleData'>
							<div className="row">
							{props.location.state.vipPoints}
							<TooltipTop/>
							</div>
						</span>

						<p className='ProductDetailsStyleTitle'>VIP Points</p>
					</div>

					<div className='ProductDetailsStyle'>
						<span className='ProductDetailsStyleIcon'>
							<i class='fas fa-hashtag'></i>
						</span>

						<span className='ProductDetailsStyleData'>
							{props.location.state.itemNo}
						</span>

						<p className='ProductDetailsStyleTitle'>Item</p>
					</div>
				</div>
			</Row>
		</>
	);
};

export default withRouter(ProductDetails);

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductAccordion.css';
import WriteAReviewModal from '../../Shared/WriteAReviewModal/WriteAReviewModal';

import '@fortawesome/fontawesome-free/css/all.min.css';

const ProductAccordion = (props) => {
	// console.log('ProductAccordion props', props.data.location.state);
	// console.log(
	// 	'ProductAccordion props',
	// 	props.data.location.state.specificationsUl.map((item, i) => {
	// 		console.log(item);
	// 		return null;
	// 	}),
	// );

	useEffect(() => {
		const items = document.querySelectorAll('#accordionOpenCloseBtn');
		// console.log('items',items);
		function myToggleFun() {
			// debugger;
			const itemToggle2 = this.getAttribute('aria-expanded');
			console.log(itemToggle2);

			// for (let i = 0; i < items.length; i++) {
			// 	items[i].setAttribute('aria-expanded', 'false');
			// }

			if (itemToggle2 === 'false') {
				this.setAttribute('aria-expanded', 'true');
			} else {
				this.setAttribute('aria-expanded', 'false');
			}
		}
		items.forEach((item) => item.addEventListener('click', myToggleFun));
	});

	return (
		<>
			<div class='accordion2'>
				<div class='accordion-item'>
					<button aria-expanded='false' id='accordionOpenCloseBtn'>
						<span class='accordion-title'>Specifications</span>
						<span class='icon' aria-hidden='true'></span>
					</button>
					<div class='accordion-content row specifications'>
						<div className='col-12 col-md-5 specificationsImg'>
							<img src={props.data.location.state.specificatonImg} alt='' />
						</div>
						<div className='col-12 col-md-7 order-md-first p-4 '>
							<p className='specificationsParagraph'>
								{props.data.location.state.specificationsParagraph}
							</p>
							<ul className='specificationsUl'>
								{props.data.location.state.specificationsUl.map((item, i) => {
									// console.log(item);
									return <li>{item}</li>;
								})}
							</ul>
						</div>
						<Link to='/'>
							<button className='btn btn-primary order-last ml-4 specificationsBtn'>
								Building Instructions
							</button>
						</Link>
					</div>
				</div>

				<div class='accordion-item'>
					<button aria-expanded='false' id='accordionOpenCloseBtn'>
						<span class='accordion-title'>Deliveries and Returns</span>
						<span class='icon' aria-hidden='true'></span>
					</button>
					<div class='accordion-content row specifications'>
						<div className='col-12 p-4'>
							<ul className='specificationsUl'>
								{props.data.location.state.DeliveriesAndReturnsUl.map(
									(item, i) => {
										// console.log(item);
										return <li>{item}</li>;
									},
								)}
							</ul>
							<p class='specificationsParagraph'>
								{props.data.location.state.DeliveriesAndReturnsParagraph}
							</p>
						</div>
					</div>
				</div>

				<div class='accordion-item'>
					<button aria-expanded='false' id='accordionOpenCloseBtn'>
						<span class='accordion-title'>Customer Reviews</span>
						<span class='icon' aria-hidden='true'></span>
					</button>
					<div class='accordion-content row specifications custReview'>
						<div className='col-12 p-4'>
							<div className='row'>
								<div className='col-lg-10'>{/* overall data */}</div>
								<div className='col-lg-2'>
									<WriteAReviewModal />
								</div>
							</div>
							<hr />
							<i className='specificationsParagraph'>
								Please note that by submitting a helpfulness vote on a review
								your IP address is collected and stored by our trusted third
								party service provider for the sole purpose of preventing
								multiple entries from the same IP address. To see how to control
								your personal data, please see our{' '}
								<span className='blue'>Privacy policy.</span>
							</i>
							<h5 className='mt-5'>Reviews</h5>
							<hr />
							<ul className='specificationsUl p-0'>
								{props.data.location.state.Reviews.map((item, i) => {
									// console.log(item);
									return (
										<li>
											<ul className='p-0'>
												<li className='blue nickname'>{item.nickname}</li>
												<li className='review'>{item.review}</li>
											</ul>
										</li>
									);
								})}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductAccordion;

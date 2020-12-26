import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from '../../../../components/Header/Header';
import HelpTopicsHeader from '../../../../components/HelpTopicsHeader/HelpTopicsHeader';
import OurService from '../../../../components/OurService/OurService';
import './Answers.css';

const LegoAvailabilityStatuses = (props) => {
	return (
		<div id='Answers'>
			<Header />

			<HelpTopicsHeader />

			<div className='row p-0 m-0 w-100'>
				<div className='col-12'>
					<div className='row m-0'>
						<div className='col-12'>
							<button
								className='btn d-flex align-items-center'
								id='backBtn'
								onClick={props.history.goBack}>
								<img src='/left-arrow.svg' alt='' height='10px' />
								<div id='back-text'>Back to all Help Topics</div>
							</button>
							<h1 id='title'>LEGO.com availability statuses</h1>
						</div>
					</div>

					<div className='row m-0' id='main-content'>
						<div className='col-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 p-0'>
							<p className='answer'>
								Everything listed on LEGO.com has a status to let you know
								whether it’s currently available. This can be found under the
								price on the product page for a set.
							</p>
							<p className='answer'>
								Here’s a brief explanation of what each status means:
							</p>

							<h3 className='question'>Available now</h3>
							<p className='answer'>The set is currently available to order!</p>

							<h3 className='question'>Backorders Accepted</h3>
							<p className='answer'>
								The set is available to order but won’t ship until the backorder
								date.
							</p>

							<h3 className='question'>Call to check product availability</h3>
							<p className='answer'>
								We may still have the item but stock is low. Please call us to
								place an order.
							</p>

							<h3 className='question'>Temporarily out of stock</h3>
							<p className='answer'>
								The set isn’t currently available to order but we expect to have
								more in the future.
							</p>

							<h3 className='question'>Sold out</h3>
							<p className='answer'>
								The set is sold out. We may get more stock but the date isn’t
								confirmed yet.
							</p>

							<h3 className='question'>Retired Product</h3>
							<p className='answer'>
								The set is no longer in our current assortment and we won’t be
								getting any more stock.
							</p>

							<h3 className='question'>Coming Soon</h3>
							<p className='answer'>
								The set hasn’t been released yet but it’ll be available soon!
							</p>

							<h3 className='question'>Pre-Order</h3>
							<p className='answer'>
								The set is coming soon and available to pre-order! It’s not out
								yet, but you can still place your order and we’ll start shipping
								sets on the pre-order date.
							</p>
						</div>
					</div>
				</div>
			</div>
			<OurService />
		</div>
	);
};

export default withRouter(LegoAvailabilityStatuses);

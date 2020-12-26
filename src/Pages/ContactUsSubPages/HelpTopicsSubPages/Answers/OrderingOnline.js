import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from '../../../../components/Header/Header';
import HelpTopicsHeader from '../../../../components/HelpTopicsHeader/HelpTopicsHeader';
import OurService from '../../../../components/OurService/OurService';
import './Answers.css';

const OrderingOnline = (props) => {
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
							<h1 id='title'>Ordering from LEGO® Shop online</h1>
						</div>
					</div>

					<div className='row m-0' id='main-content'>
						<div className='col-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 p-0'>
							<p className='answer'>
								If you’d like to buy a LEGO® set for yourself or a loved one,
								our online LEGO® Shop is a great place to start. You'll find the
								very latest and exclusive sets, accessories and more! There are
								two ways to order on LEGO® Shop: Online or by phone.
							</p>

							<h3 className='question'>Online</h3>
							<p className='answer'>
								Ordering from the LEGO® Shop online couldn’t be easier!
							</p>

							<p className='answer'>
								<ul classname="ul">
									<li>
										First, go online and visit{' '}
										<Link to='/' className='link'>
											LEGO.com
										</Link>
										. You can look through the sets we have available using the
										search bar or any of the options at the top of the screen.
									</li>
									<p class='text-center'>
										<img src='/USShopHead.png' alt='' width='100%' />
									</p>
									<li>
										Click on a product to see more information about it, or just
										click on ‘Add to Bag’ to put it directly in your shopping
										bag.
									</li>
									<p class='text-center'>
										<img src='/7862.jpg' alt='' />
									</p>
									<li>
										Once you’ve finished shopping, click on ‘My Bag’ in the
										top-right hand corner of the screen to go directly to
										checkout.
									</li>
									<li>
										In the Order Summary, you can add a Promo Code if you have
										one. You can also choose the Shipping method you’d prefer.
									</li>
									<li>
										Click ‘Checkout Securely’. If you’d like to use your PayPal
										account, click ‘Pay with PayPal’. You won't be able to use
										any VIP Discount Codes or LEGO Gift Cards if you choose to
										Pay with PayPal at this point.
									</li>
									<li>
										If you clicked ‘Checkout Securely, you’ll be prompted to
										enter your shipping address information on the next screen.
										The address you enter will be verified in this step. When
										you’re done, click ‘Submit Address’.
									</li>
									<li>
										Next, enter your contact details. We’ll use your email
										address to send you a receipt and keep you posted on the
										status of your order. We’ll use your phone number to text
										you with a delivery date for your order.
									</li>
									<li>
										Next, click ‘Continue to Payment’. Enter your payment
										details. (Go here for more on VIP Discount Codes.)
									</li>
									<p class='text-center'>
										<img src='/7864.png' alt='' width='100%' />
									</p>
									<li>Click on Place Order</li>
									<li>Then do a little dance — your order’s complete!</li>
									<p class='text-center'>
										<img src='/ordercomplete.png' alt='' width='100%' />
									</p>
								</ul>
							</p>

							<p className='answer'>
								If you encounter any issues while shopping with us, please check
								out{' '}
								<Link to='/shopweberrors' className='link'>
									this help topic{'  '}
								</Link>
								for some basic troubleshooting tips.
							</p>

							<h3 className='question'>By Phone</h3>
							<p className='answer'>
								You can also order from the LEGO® Shop over the phone. Just
								<Link to='/service' className='link'>
									{'  '}
									give us a call!
								</Link>
							</p>

						</div>
					</div>
				</div>
			</div>
			<OurService />
		</div>
	);
};

export default withRouter(OrderingOnline);

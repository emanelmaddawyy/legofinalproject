import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import BackButton from '../../../../components/BackButton/BackButton';
import Header from '../../../../components/Header/Header';
import HelpTopicsHeader from '../../../../components/HelpTopicsHeader/HelpTopicsHeader';
import OurService from '../../../../components/OurService/OurService';
import './Answers.css';

const AddPromotional = (props) => {
	return (
		<div id='Answers'>
			<Header />

			<HelpTopicsHeader />

			<div className='row p-0 m-0 w-100'>
				<div className='col-12'>
					<div className='row m-0'>
						<div className='col-12'>
						<BackButton data="Back to all Help Topics" />
							<h1 id='title'>
								Where to add VIP codes, promotional codes and discount codes at
								checkout
							</h1>
						</div>
					</div>

					<div className='row m-0' id='main-content'>
						<div className='col-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 p-0'>
							<p className='answer'>
								It’s easy to apply a code for rewards or discounts on your
								order!
							</p>

							<p className='answer'>
								We have two types of codes you can use at checkout: promotional
								codes and discount codes. Promotional codes will get you rewards
								like LEGO sets, posters, keychains, tote bags and other fun
								stuff. Discount codes will help save money on your order.
							</p>

							<h3 className='question'>
								How to get codes through the VIP Program
							</h3>
							<p className='answer'>
								If you’re a VIP member, you’ll receive your code as soon as you
								redeem your points for a reward or discount in the{' '}
								<Link to='/vip' className='link'>
									{' '}
									VIP Rewards Center
								</Link>
								. You’ll also get an email with the code that’ll be ready to use
								on your next order! Digital rewards will be ready right away and
								don’t need a code.
							</p>

							<h3 className='question'>How to use a promotional code</h3>
							<p className='answer'>
								To use a promotional code and add a reward to your order:
								<ul classname="ul">
									<li>
										Once you’ve got everything in your bag, click on ‘My Bag’.
									</li>
									<li>
										Open the ‘Enter Promo Code’ section and enter your code.
									</li>
									<li>Click ‘Apply’.</li>
								</ul>
							</p>

							<p className='answer'>
								There’s only room for one code per order and promotional codes
								can’t be redeemed without placing an order.
							</p>

							<p className='answer'>
								If you’re placing an order over the phone, please provide the
								promotional code to the advisor before paying for the order.
							</p>

							<h3 className='question'>How to use a discount code</h3>
							<p className='answer'>
								To use a discount code to save money on your LEGO.com order:
								<ul classname="ul">
									<li>
										Once you’ve got everything in your bag, click on ‘My Bag’.
									</li>
									<li>
										Click on ‘Checkout Securely’. If you want to pay using
										PayPal, it’ll be an option again on the next screen.
									</li>
									<li>Enter your shipping and contact info.</li>
									<li>
										Under Payment, open the VIP Discount Code section and enter
										your code.
									</li>
									<li>Click ‘Apply’.</li>
								</ul>
							</p>

							<p className='answer'>
								You can add more than one discount code to an order as long as
								the total discounted amount is less than your subtotal. If
								you’re paying using PayPal, you’ll still need to choose the
								‘Checkout Securely’ option while on the ‘My Cart’ page. You’ll
								still be able to pay with PayPal later in the checkout process.
							</p>
						</div>
					</div>
				</div>
			</div>
			<OurService />
		</div>
	);
};

export default withRouter(AddPromotional);

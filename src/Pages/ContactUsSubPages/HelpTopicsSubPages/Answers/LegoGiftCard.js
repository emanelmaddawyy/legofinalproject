import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from '../../../../components/Header/Header';
import HelpTopicsHeader from '../../../../components/HelpTopicsHeader/HelpTopicsHeader';
import OurService from '../../../../components/OurService/OurService';
import './Answers.css';

const LegoGiftCard = (props) => {
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
							<h1 id='title'>About LEGO® Gift Cards</h1>
						</div>
					</div>

					<div className='row m-0' id='main-content'>
						<div className='col-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 p-0'>
							<p className='answer'>
								Do you want to give your favorite LEGO® fan a gift but don’t
								know what sets they want? Why not give them a LEGO® Gift Card!
							</p>

							<p className='answer'>
								LEGO® Gift Cards are available to our fans in the UK, Germany,
								and Denmark, as well as the US and Canada.
							</p>

							<p class='text-center'>
								<img src='/HT0065_1.png' alt='' width='50%' />
							</p>

							<p className='answer'>
								LEGO® Gift Cards are shipped for free through standard post
								(sorry, we don’t track Gift Card deliveries). They take 4-7
								business days to arrive in the US, UK, and Europe. In Canada,
								they take 7-14 business days. Just to let you know, if you’re a
								LEGO® VIP member, you won’t be able to use your points to buy
								Gift Cards and you won’t earn points for the purchase either.
							</p>

							<h3 className='question'>Where can I use Gift Cards?</h3>
							<p className='answer'>
								You can use your LEGO® Gift Card online during the normal
								checkout process. When you get to the 'Payment' stage, click
								'Pay with Gift Card'. Enter the card number and PIN, then click
								'Apply Gift Card'. The balance of the Gift Card will be taken
								off the cost of your order.
							</p>
							<p class='text-center'>
								<img src='/GiftCardCheckout.png' alt='' width='100%' />
							</p>

							<p className='answer'>
								Keep in mind, you can only redeem a Gift Card in the region you
								buy it in. If you want to send a Gift Card to friend or family
								in a different region than you, click on the ‘Change Region’
								flag at the bottom of the LEGO® Shop. You’ll need to change your
								region to that of the destination region. While checking out,
								you should still use your own billing address.
							</p>
						</div>
					</div>
				</div>
			</div>
			<OurService />
		</div>
	);
};

export default withRouter(LegoGiftCard);

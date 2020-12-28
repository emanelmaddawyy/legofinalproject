import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import BackButton from '../../../../components/BackButton/BackButton';
import Header from '../../../../components/Header/Header';
import HelpTopicsHeader from '../../../../components/HelpTopicsHeader/HelpTopicsHeader';
import OurService from '../../../../components/OurService/OurService';
import './Answers.css';

const PriceLego = (props) => {
	return (
		<div id='Answers'>
			<Header />

			<HelpTopicsHeader />

			<div className='row p-0 m-0 w-100'>
				<div className='col-12'>
					<div className='row m-0'>
						<div className='col-12'>
						
							<BackButton data="Back to all Help Topics" />
							<h1 id='title'>How we decide the prices of LEGO® sets</h1>
						</div>
					</div>

					<div className='row m-0' id='main-content'>
						<div className='col-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 p-0'>
							<p className='answer'>
								Finding the right price for a set isn’t easy and depends on a
								lot of factors. To name a few, our marketing team looks at the
								number of pieces in the set, the number of new and unique molds
								required, and the cost of licensing characters from other
								companies and brands.
							</p>

							<p className='answer'>
								We also work hard to make sure we use the very best materials so
								that one day you can pass on your sets to a new LEGO® fan. In
								fact we have a 28-point check list to make sure the quality and
								color of all our bricks are exactly right!
							</p>

							<p className='answer'>
								When deciding a price for each region, other factors come into
								play, such as statistical data about a region's population,
								transportation costs, currency exchange rates, local laws and
								taxes and the prices of other toys. No two regions are the same,
								so the price may be different from region to region.
							</p>

							<p className='answer'>
								While we set a suggested price for our products, other stores
								and individual sellers choose their own prices which are
								sometimes more or less than our suggested price. We have no
								influence on these prices and can’t match our LEGO® Store or
								LEGO® Shop prices to any other retailer. That’s why you might
								see different prices for the same set.
							</p>
						</div>
					</div>
				</div>
			</div>
			<OurService />
		</div>
	);
};

export default withRouter(PriceLego);

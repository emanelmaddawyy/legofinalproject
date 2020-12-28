import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import BackButton from '../../../../components/BackButton/BackButton';
import Header from '../../../../components/Header/Header';
import HelpTopicsHeader from '../../../../components/HelpTopicsHeader/HelpTopicsHeader';
import OurService from '../../../../components/OurService/OurService';
import './Answers.css';

const ChangeRegion = (props) => {
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
								How to change the region you're shipping to on the LEGO® Shop
							</h1>
						</div>
					</div>

					<div className='row m-0' id='main-content'>
						<div className='col-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 p-0'>
							<p className='answer'>
								Before you start shopping on{' '}
								<Link to='/' className='link'>
									our website
								</Link>
								, your region should always be set to the region you want to
								ship your order to (even if your billing address is in a
								different region). This also means that all prices you see
								should be the currency of the region you’re shipping to. Your
								bank will automatically convert the amount into your local
								currency when you’re charged for your order.
							</p>

							<p className='answer'>
								Here is a list of the regions that we're currently able to ship
								orders to:
							</p>

							<p className='answer'>
								Australia, Austria, Belgium, Canada, Czech Republic, Denmark,
								Estonia, Finland, France, Germany, Greece, Hungary, Ireland,
								Italy, Latvia, Luxemburg, Netherlands, New Zealand, Norway,
								Poland, Portugal, Slovakia, Slovenia, South Korea, Spain,
								Switzerland, Sweden, the United Kingdom, and the United States.
							</p>

							<p className='answer'>
								We also ship to APO/FPO/DPO addresses and regions considered
								United States territories. If your region isn't listed, you can
								ship your order to a friend or family member who lives in one of
								our Shop regions and ask them to forward your delivery to you.
							</p>

							<p className='answer'>
								If for any reason, the region or currency you see doesn’t match
								your destination region, you can manually change the region:
							</p>

							<p className='answer'>
								<ul classname="ul">
									<li>
										If you’re in the middle of checkout, click “Back to My Bag”
										at the top-left to continue shopping. Otherwise you can skip
										this step.
									</li>
									<li>
										Look for the ‘Change Region’ button, labeled with a flag
										icon, at the top or bottom of the page.
									</li>
									<li>
										Click the ‘Change Region’ button and choose the region that
										matches where you’d like to ship the order.
									</li>
									<li>
										If there are already items in your bag, they'll be removed
										once you change region and you'll need to add them again.
									</li>
									<li>
										You should now be browsing in that region and can ship any
										orders there. If the currency or region settings still look
										wrong, please{' '}
										<Link to='/service' className='link'>
											contact us
										</Link>
										. We’ll be happy to help!
									</li>
								</ul>
							</p>
						</div>
					</div>
				</div>
			</div>
			<OurService />
		</div>
	);
};

export default withRouter(ChangeRegion);

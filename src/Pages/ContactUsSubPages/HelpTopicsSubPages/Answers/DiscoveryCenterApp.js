import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import BackButton from '../../../../components/BackButton/BackButton';
import Header from '../../../../components/Header/Header';
import HelpTopicsHeader from '../../../../components/HelpTopicsHeader/HelpTopicsHeader';
import OurService from '../../../../components/OurService/OurService';
import './Answers.css';

const DiscoveryCenterApp = (props) => {
	return (
		<div id='Answers'>
			<Header />

			<HelpTopicsHeader />

			<div className='row p-0 m-0 w-100'>
				<div className='col-12'>
					<div className='row m-0'>
						<div className='col-12'>
						<BackButton data="Back to all Help Topics" />
							<h1 id='title'>LEGOLAND® and Discovery Center app</h1>
						</div>
					</div>

					<div className='row m-0' id='main-content'>
						<div className='col-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 p-0'>
							<p className='answer'>
								Are you planning to visit LEGOLAND® Windsor, California or
								Billund or any of our LEGOLAND® Discovery Centers? Then have a
								look at our fantastic LEGOLAND® and LEGOLAND® Discovery Center
								apps. These apps are packed with useful information and
								interactive fun to help make your family day out one to
								remember!
							</p>

							<p className='answer'>
								With awesome tips to help you plan your visit including
								information about buying tickets, directions and opening times,
								there’s also plenty to keep you entertained once you arrive.
								They even include an interactive map so you always know where
								you are! If you’re interested, you can download the apps through
								Google Play or the App Store.
							</p>
						</div>
					</div>
				</div>
			</div>
			<OurService />
		</div>
	);
};

export default withRouter(DiscoveryCenterApp);

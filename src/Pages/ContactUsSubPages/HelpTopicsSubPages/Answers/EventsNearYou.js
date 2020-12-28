import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import BackButton from '../../../../components/BackButton/BackButton';
import Header from '../../../../components/Header/Header';
import HelpTopicsHeader from '../../../../components/HelpTopicsHeader/HelpTopicsHeader';
import OurService from '../../../../components/OurService/OurService';
import './Answers.css';

const EventsNearYou = (props) => {
	return (
		<div id='Answers'>
			<Header />

			<HelpTopicsHeader />

			<div className='row p-0 m-0 w-100'>
				<div className='col-12'>
					<div className='row m-0'>
						<div className='col-12'>
						<BackButton data="Back to all Help Topics" />
							<h1 id='title'>Find out about LEGO® Events near you</h1>
						</div>
					</div>

					<div className='row m-0' id='main-content'>
						<div className='col-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 p-0'>
							<p className='answer'>
								We’re really lucky to have such amazing fans!
							</p>

							<p className='answer'>
								LEGO® fans love to get active and build and there are many great
								events that bring fans together. If you want to find out more
								about any LEGO® events that are happening near you, here are
								some places to check:
							</p>

							<p className='answer'>
								<ul className='ul'>
									<li>LEGO® Stores</li>
									<li>LEGO® Ambassador Network</li>
								</ul>
							</p>

							<p className='answer'>
								There also are many great conventions happening all around you.
								Just check your local newspapers or online.
							</p>

							<p className='answer'></p>

							<p className='answer'></p>

							<p className='answer'></p>

							<h3 className='question'></h3>
							<p className='answer'></p>

							<h3 className='question'></h3>
							<p className='answer'></p>

							<h3 className='question'></h3>
							<p className='answer'></p>

							<h3 className='question'></h3>
							<p className='answer'></p>

							<h3 className='question'></h3>
							<p className='answer'></p>
						</div>
					</div>
				</div>
			</div>
			<OurService />
		</div>
	);
};

export default withRouter(EventsNearYou);

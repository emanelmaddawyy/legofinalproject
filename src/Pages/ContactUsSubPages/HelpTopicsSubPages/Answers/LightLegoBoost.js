import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from '../../../../components/Header/Header';
import HelpTopicsHeader from '../../../../components/HelpTopicsHeader/HelpTopicsHeader';
import OurService from '../../../../components/OurService/OurService';
import './Answers.css';

const LightLegoBoost = (props) => {
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
							<h1 id='title'>
								The light on my LEGO® BOOST Move Hub keeps flashing different
								colors
							</h1>
						</div>
					</div>

					<div className='row m-0' id='main-content'>
						<div className='col-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 p-0'>
							<p className='answer'>
								From time to time, the LEGO® BOOST app will push an automatic
								firmware update to your Move Hub using the Bluetooth connection.
								When this happens, the Hub goes into a special mode to accept
								the update. The light on the Hub with alternate between red,
								green and blue while it’s doing this.
							</p>

							<p className='answer'>
								Under normal circumstances, a firmware update shouldn’t take
								longer than 15 minutes. If there’s interference in the Bluetooth
								communication, it could take longer than usual or shut off.{' '}
								<Link to='/connectlegoboost' className='link'>
									Check out this help topic
								</Link>{' '}
								for tips on eliminating interference.
							</p>

							<p className='answer'>
								The firmware update might also end prematurely if the tablet or
								Move Hub loses power. If your tablet uses a power saving
								function and goes into sleep mode before the update completes,
								adjust your power saving settings, and try again. These can
								generally be found in your settings app, but the exact location
								and name can vary by device. You’ll also want to make sure the
								batteries in your Move Hub are new and in the right position.
							</p>
						</div>
					</div>
				</div>
			</div>
			<OurService />
		</div>
	);
};

export default withRouter(LightLegoBoost);

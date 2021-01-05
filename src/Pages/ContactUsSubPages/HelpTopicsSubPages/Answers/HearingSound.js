import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import BackButton from '../../../../components/BackButton/BackButton';
import Header from '../../../../components/Header/Header';
import HelpTopicsHeader from '../../../../components/HelpTopicsHeader/HelpTopicsHeader';
import OurService from '../../../../components/OurService/OurService';
import './Answers.css';

const HearingSound = (props) => {
	return (
		<div id='Answers'>
			<Header />

			<HelpTopicsHeader />

			<div className='row p-0 m-0 w-100'>
				<div className='col-12'>
					<div className='row m-0'>
						<div className='col-12'>
						<BackButton data="Back to all Help Topics" />
							<h1 id='title'>Hearing sound and speaking to LEGO® BOOST</h1>
						</div>
					</div>

					<div className='row m-0' id='main-content'>
						<div className='col-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 p-0'>
							<p className='answer'>
								Did you know that Vernie can talk to you? In fact, LEGO® BOOST
								models make lots of cool sounds, but you have to make sure the
								volume on your tablet is up. Unlike LEGO® MINDSTORMS, all sounds
								come from the tablet app, not the Move Hub.
							</p>

							<p className='answer'>
								You can also speak to Vernie, but the microphone on your tablet
								will need to be enabled. Make sure the LEGO® BOOST App has the
								proper permissions to access your microphone and no external
								Bluetooth Speakers are connected - some speakers disable the
								microphone while connected.
							</p>
						</div>
					</div>
				</div>
			</div>
			<OurService />
		</div>
	);
};

export default withRouter(HearingSound);

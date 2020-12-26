import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from '../../../../components/Header/Header';
import HelpTopicsHeader from '../../../../components/HelpTopicsHeader/HelpTopicsHeader';
import OurService from '../../../../components/OurService/OurService';
import './Answers.css';

const StarWars = (props) => {
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
							<h1 id='title'>LEGO® BOOST Star Wars™ app</h1>
						</div>
					</div>

					<div className='row m-0' id='main-content'>
						<div className='col-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 p-0'>
							<p className='answer'>
								LEGO® Star Wars™ BOOST can only be programmed with the LEGO®
								BOOST Star Wars™ or LEGO® Powered Up apps. It’s not compatible
								with other apps or software.
							</p>

							<p className='answer'>
								The building instructions are available in the LEGO® BOOST Star
								Wars™ app.
							</p>

							<p className='answer'>
								The Droid Commander can only be programmed with the LEGO® BOOST
								Star Wars™ or LEGO® Powered Up apps. It’s not compatible with
								other apps or software.
							</p>

							<p className='answer'>
								For most regions, you can find the app in Apple’s App Store and
								Google Play or Amazon App Store.
							</p>

							<h3 className='question'>Bluetooth</h3>
							<p className='answer'>
								The app is connected via Bluetooth Low Energy (BLE) connection.
								You can always check your device specs on the web. It should
								either say Bluetooth 4.1 or BLE under the Bluetooth component in
								the specification.
							</p>

							<p className='answer'>
								The hub has a range of approximately ten meters (or 30 feet).
								Distance varies with battery levels and interference in the play
								area.
							</p>

							<h3 className='question'>Using your microphone</h3>
							<p className='answer'>
								Make sure you've given permission to LEGO® BOOST Star Wars™ to
								use your microphone if you want it to work with sound commands.
							</p>

							<h3 className='question'>Sounds</h3>
							<p className='answer'>
								All sounds are produced in the app, so make sure your tablet has
								the volume up. We don’t recommend using an external speaker with
								the app. Some speakers disable the microphone while plugged in
								and that will affect the Star Wars BOOST experience.
							</p>

						</div>
					</div>
				</div>
			</div>
			<OurService />
		</div>
	);
};

export default withRouter(StarWars);

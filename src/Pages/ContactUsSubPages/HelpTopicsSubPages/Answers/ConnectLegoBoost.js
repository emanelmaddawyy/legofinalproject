import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from '../../../../components/Header/Header';
import HelpTopicsHeader from '../../../../components/HelpTopicsHeader/HelpTopicsHeader';
import OurService from '../../../../components/OurService/OurService';
import './Answers.css';

const ConnectLegoBoost = (props) => {
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
								Connecting the LEGO® BOOST app to the Move Hub with Bluetooth
							</h1>
						</div>
					</div>

					<div className='row m-0' id='main-content'>
						<div className='col-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 p-0'>
							<p className='answer'>
								The LEGO® BOOST app connects to your Move Hub with a Bluetooth
								Low Energy (BLE) connection and enables you to interact with
								your LEGO® BOOST models. You will be prompted to turn on your
								Move Hub and connect via Bluetooth when you select a project
								within the app.
							</p>

							<p className='answer'>
								This process is completely automatic: just press the green
								button on your Move Hub when you're prompted to and the app will
								do the rest. The light on your LEGO® BOOST Move Hub should flash
								white for about 10-20 seconds while connecting to the LEGO®
								BOOST app and remain a solid blue once connected.
							</p>

							<h3 className='question'>If you’re having trouble connecting:</h3>
							<p className='answer'>
								<ul className='ul'>
									<li>
										Make sure that you have the latest version of the LEGO®
										BOOST app from the Apple App Store or Google Play.
									</li>
									<li>
										You should also make sure that your tablet isn’t connected
										to any other Bluetooth devices. If it is, disconnect them.
									</li>
									<li>
										Even if other Bluetooth devices aren’t connected, they can
										cause background interference. You should move the tablet
										and Move Hub away from these devices if possible.
									</li>
									<li>
										If nothing else works, you may want to try uninstalling and
										reinstalling the app, although this will cause you to lose
										all your progress and saved programs.
									</li>
								</ul>
							</p>

							<h3 className='question'>Additional help for Android devices:</h3>
							<p className='answer'>
								If you’re using an Android tablet, there are a few other things
								that could be causing connection issues:
								<ul className='ul'>
									<li>
										Make sure your Location permissions are set to ‘yes/on’ as
										Android OS won’t allow any Bluetooth connections if it’s
										turned off.
									</li>
									<li>
										Connecting to the Move Hub needs to be done within the LEGO®
										BOOST app itself, not through your Bluetooth Settings app.
										If you try to connect through Bluetooth Settings, your
										device may ask for a PIN which doesn’t exist.
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

export default withRouter(ConnectLegoBoost);

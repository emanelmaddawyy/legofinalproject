import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from '../../../../components/Header/Header';
import HelpTopicsHeader from '../../../../components/HelpTopicsHeader/HelpTopicsHeader';
import OurService from '../../../../components/OurService/OurService';
import './Answers.css';

const LegoDigitalDesigner = (props) => {
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
							<h1 id='title'>About LEGO® Digital Designer</h1>
						</div>
					</div>

					<div className='row m-0' id='main-content'>
						<div className='col-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 p-0'>
							<p className='answer'>
								LEGO® Digital Designer (LDD) is free software that lets you
								build models with virtual LEGO® bricks. It’s available for Mac
								and Windows PCs. You can even get parts lists and building
								instructions so you can build your model in real life!
							</p>

							<p className='answer'>
								We don’t actively support LDD anymore, so we can’t guarantee it
								will run perfectly on all systems. If you need help, scroll down
								past the download link to find the User Manual.
							</p>

							<p className='answer'>
								LDD will check for a new version each time it's launched while
								you're connected to the internet. If there's an update
								available, you'll be prompted to download it.
							</p>

							<h3 className='question'>How to use LEGO® Digital Designer</h3>
							<p className='answer'>
								We've included some great building tips and tricks within LDD
								itself. To access them, just press F1 when you start the
								program. You can also download the User Manual here for more
								help.
							</p>

							<h3 className='question'>
								System requirements for LEGO® Digital Designer
							</h3>
							<p className='answer'>
								We wouldn't recommend running LDD if your computer doesn't meet
								the specifications, as the program won't work properly. You can
								check whether your computer meets the minimum system
								requirements right here.
							</p>

							<h3 className='question'>
								LEGO® Digital Designer not connecting to the Internet
							</h3>
							<p className='answer'>
								If you're having difficulties connecting LDD to the internet, it
								could be that you have a firewall blocking access. Try changing
								your firewall settings or turn off the firewall and try again.
							</p>

							<h3 className='question'>
								Using LEGO® Digital Designer in offline mode
							</h3>
							<p className='answer'>
								To use LDD while offline, select OK in the dialog box asking you
								if you want to run LDD in offline mode. Please remember that
								without an Internet connection, the program can't check for
								updates.
							</p>

							<h3 className='question'>Bricks cannot be loaded</h3>
							<p className='answer'>
								When you start LDD, the brick palettes are automatically
								updated. If some bricks in your model aren't included in the new
								palette, you'll see a message saying that the bricks could not
								be loaded.
							</p>

						</div>
					</div>
				</div>
			</div>
			<OurService />
		</div>
	);
};

export default withRouter(LegoDigitalDesigner);

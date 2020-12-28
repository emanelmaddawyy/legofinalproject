import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import BackButton from '../../../../components/BackButton/BackButton';
import Header from '../../../../components/Header/Header';
import HelpTopicsHeader from '../../../../components/HelpTopicsHeader/HelpTopicsHeader';
import OurService from '../../../../components/OurService/OurService';
import './Answers.css';

const CoolCreation = (props) => {
	return (
		<div id='Answers'>
			<Header />

			<HelpTopicsHeader />

			<div className='row p-0 m-0 w-100'>
				<div className='col-12'>
					<div className='row m-0'>
						<div className='col-12'>
						<BackButton data="Back to all Help Topics" />
							<h1 id='title'>Cool Creations</h1>
						</div>
					</div>

					<div className='row m-0' id='main-content'>
						<div className='col-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 p-0'>
							<p className='answer'>
								Have you ever built something with your LEGO® bricks so cool you
								wanted to share it with the whole world? With Cool Creations in
								the LEGO® Life magazine, you can!
							</p>

							<p className='answer'>Here are some submission guidelines:</p>

							<p className='answer'>
								<ul className='ul'>
									<li>
										Submissions can only be sent to the email address on the
										form.
									</li>
									<li>
										Fill out the form in ALL CAPS so it’s easy for us to read!
									</li>
									<li>
										Photos should have a minimum of 300 dpi and be at least 10 x
										15 cm / 4" x 6".
									</li>
									<li>Make sure your file is less than 10 MB.</li>
									<li>Images should be clear, not fuzzy.</li>
									<li>Use a simple background.</li>
									<li>
										Most importantly, the creation must be your own, and not a
										LEGO® set created by anyone else.
									</li>
								</ul>
							</p>

							<p className='answer'>
								We receive a ton of Cool Creations entries each month. It isn’t
								possible to print every single one of them in the magazine, so
								if your creation isn’t put in the magazine don’t give up, just
								keep trying! If you’re eager to share your creations with other
								LEGO® fans, you can also do that in the LEGO® Life app.
							</p>

							<p className='answer'>We can’t wait to see what you’ve built!</p>
						</div>
					</div>
				</div>
			</div>
			<OurService />
		</div>
	);
};

export default withRouter(CoolCreation);

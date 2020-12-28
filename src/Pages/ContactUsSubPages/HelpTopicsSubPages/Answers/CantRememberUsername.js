import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import BackButton from '../../../../components/BackButton/BackButton';
import Header from '../../../../components/Header/Header';
import HelpTopicsHeader from '../../../../components/HelpTopicsHeader/HelpTopicsHeader';
import OurService from '../../../../components/OurService/OurService';
import './Answers.css';

const CantRememberUsername = (props) => {
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
								What to do if you can't remember the username registered to your
								LEGO® VIP card
							</h1>
						</div>
					</div>

					<div className='row m-0' id='main-content'>
						<div className='col-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 p-0'>
							<p className='answer'>
								If you don’t know the LEGO® Account username registered to your
								LEGO® VIP card, we’ve made it super easy to recover it!
							</p>

							<p className='answer'>
								Make sure you’re not logged in with any LEGO® Account, then
								click ‘Sign In’.
							</p>

							<p className='answer'>
								From there, click or tap 'Forgot Username' or 'Forgot Password'.
								Then enter your email address for a new username or your
								username for a new password. An email will then be sent to you
								with a new username or details on how to reset your password.
							</p>

							<p className='answer'>
								After logging in, you’ll see your point balance in the drop-down
								menu that appears if your LEGO® Account is attached to a
								registered LEGO VIP card.
							</p>

							<p className='answer'>
								If you’re still having trouble, just{' '}
								<Link to='/service' className='link'>
									reach out to us
								</Link>{' '}
								and we’ll help you out.
							</p>
						</div>
					</div>
				</div>
			</div>
			<OurService />
		</div>
	);
};

export default withRouter(CantRememberUsername);

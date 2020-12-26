import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from '../../../../components/Header/Header';
import HelpTopicsHeader from '../../../../components/HelpTopicsHeader/HelpTopicsHeader';
import OurService from '../../../../components/OurService/OurService';
import './Answers.css';

const MakingChangesToAccount = (props) => {
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
							<h1 id='title'>Making changes to your LEGO® Account</h1>
						</div>
					</div>

					<div className='row m-0' id='main-content'>
						<div className='col-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 p-0'>
							<p className='answer'>
								We’ve made it really easy for you to change your email address,
								password or region saved in your LEGO® Account.
							</p>

							<p className='answer'>
								To update this information, log in and click or tap on your
								username and then 'Edit Profile'. This will take you to where
								you can update your information or delete your account.
							</p>

							<p className='answer'>
								Remember – you can’t change the date of birth. If you’ve entered
								the wrong date of birth by mistake, please create a new LEGO®
								Account. If you order from the LEGO® Shop, your shipping and
								billing address can be updated during checkout.
							</p>
						</div>
					</div>
				</div>
			</div>
			<OurService />
		</div>
	);
};

export default withRouter(MakingChangesToAccount);

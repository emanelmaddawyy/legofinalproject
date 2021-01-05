import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import BackButton from '../../../../components/BackButton/BackButton';
import Header from '../../../../components/Header/Header';
import HelpTopicsHeader from '../../../../components/HelpTopicsHeader/HelpTopicsHeader';
import OurService from '../../../../components/OurService/OurService';
import './Answers.css';

const DidntGetEmail = (props) => {
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
								I didn't get an email when I tried to reset my password. What do
								I do?
							</h1>
						</div>
					</div>

					<div className='row m-0' id='main-content'>
						<div className='col-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 p-0'>
							<p className='answer'>
								If you never got an email, it could be that your account is
								registered with a different email address or your username/email
								address doesn't exist in our records.
							</p>

							<p className='answer'>Please also check your spam filter.</p>

							<p className='answer'>
								If you continue to experience issues, please contact us.
							</p>
						</div>
					</div>
				</div>
			</div>
            <OurService />
		</div>
	);
};

export default withRouter(DidntGetEmail);

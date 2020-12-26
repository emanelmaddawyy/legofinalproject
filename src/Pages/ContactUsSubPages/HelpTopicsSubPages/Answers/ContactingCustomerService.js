import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from '../../../../components/Header/Header';
import HelpTopicsHeader from '../../../../components/HelpTopicsHeader/HelpTopicsHeader';
import OurService from '../../../../components/OurService/OurService';
import './Answers.css';

const ContactingCustomerService = (props) => {
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
							<h1 id='title'>Contacting LEGO® Customer Service</h1>
						</div>
					</div>

					<div className='row m-0' id='main-content'>
						<div className='col-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 p-0'>
							<p className='answer'>
								We have a whole team of talented LEGO® experts ready to answer
								questions and help fix it if something's gone wrong. You can
								reach out to us by sending us an email, calling us or you can
								even chat with us online! Please bear with us if chat isn’t
								available right away as we may be busy helping other LEGO® fans.
								The best thing to do if you need help right away is to give us a
								call.
							</p>

							<p className='answer'>
								You can find out how to to{' '}
								<Link to='/service' className='link'>
									get in touch with us
								</Link>{' '}
								here by selecting how you’d like to contact us and then choosing
								your region from the dropdown box.
							</p>
						</div>
					</div>
				</div>
			</div>
			<OurService />
		</div>
	);
};

export default withRouter(ContactingCustomerService);

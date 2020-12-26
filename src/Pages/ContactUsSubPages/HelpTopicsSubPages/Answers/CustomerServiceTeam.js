import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from '../../../../components/Header/Header';
import HelpTopicsHeader from '../../../../components/HelpTopicsHeader/HelpTopicsHeader';
import OurService from '../../../../components/OurService/OurService';
import './Answers.css';

const CustomerServiceTeam = (props) => {
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
							<h1 id='title'>Meet our Customer Service team!</h1>
						</div>
					</div>

					<div className='row m-0' id='main-content'>
						<div className='col-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 p-0'>
							<p className='answer'>
								Our global team is based in three Customer Service centers in
								the United States, the United Kingdom and Singapore. Our
								experienced and diverse team speaks over 20 different languages
								so we can help fans all around the world!
							</p>
							<p class='text-center'>
								<img src='/HT12.png' alt='' width='100%' />
							</p>
							<p className='answer'>
								Our team loves hearing from passionate LEGO® fans and looks
								forward to helping you with whatever you need. They can answer
								questions about everything from building instructions to the
								status of your LEGO® Shop order. They’re all huge LEGO® fans
								themselves and enjoy hearing about the fun you’ve had with LEGO®
								bricks!
							</p>

							<p className='answer'>
								Find out how to to{' '}
								<Link to='/service' className='link'>
									get in touch with us
								</Link>{' '}
								here.
							</p>
						</div>
					</div>
				</div>
			</div>
			<OurService />
		</div>
	);
};

export default withRouter(CustomerServiceTeam);

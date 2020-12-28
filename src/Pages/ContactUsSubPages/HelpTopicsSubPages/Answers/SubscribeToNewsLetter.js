import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import BackButton from '../../../../components/BackButton/BackButton';
import Header from '../../../../components/Header/Header';
import HelpTopicsHeader from '../../../../components/HelpTopicsHeader/HelpTopicsHeader';
import OurService from '../../../../components/OurService/OurService';
import './Answers.css';

const SubscribeToNewsLetter = (props) => {
	return (
		<div id='Answers'>
			<Header />

			<HelpTopicsHeader />

			<div className='row p-0 m-0 w-100'>
				<div className='col-12'>
					<div className='row m-0'>
						<div className='col-12'>
						<BackButton data="Back to all Help Topics" />
							<h1 id='title'>Subscribing to LEGO® newsletters</h1>
						</div>
					</div>

					<div className='row m-0' id='main-content'>
						<div className='col-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 p-0'>
							<p className='answer'>
								We’re really happy to know you want to find out more about
								signing up for LEGO® newsletters! We currently offer email
								newsletters for LEGO® Shop and LEGO® VIP.
							</p>

							<p className='answer'>
								Simply put your email address in the spot near the bottom of any
								page to start signing up for the official LEGO® Shop email
								newsletter.
							</p>

							<p className='answer'>
								Looking for LEGO® VIP emails? You'll want to make sure you've
								joined the program to start getting offers, promotions and
								exclusive members only benefits in your inbox. Visit{' '}
								<Link to='/vip' className='link'>
									LEGO.com/VIP
								</Link>{' '}
								to find out more.
							</p>
						</div>
					</div>
				</div>
			</div>
			<OurService />
		</div>
	);
};

export default withRouter(SubscribeToNewsLetter);

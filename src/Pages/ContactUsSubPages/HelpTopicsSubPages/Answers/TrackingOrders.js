import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from '../../../../components/Header/Header';
import HelpTopicsHeader from '../../../../components/HelpTopicsHeader/HelpTopicsHeader';
import OurService from '../../../../components/OurService/OurService';
import './Answers.css';

const TrackingOrders = (props) => {
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
							<h1 id='title'>Tracking LEGO.com orders</h1>
						</div>
					</div>

					<div className='row m-0' id='main-content'>
						<div className='col-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 p-0'>
							<p className='answer'>
								Once your LEGO.com or Pick a Brick order’s been shipped, you’ll
								receive a tracking number by email. You can check that on your
								local courier’s website for updates on your delivery. It can
								take up to 24 hours for tracking to become visible on the
								courier's website after you receive the email.
							</p>
							<p className='answer'>
								If you placed your order as a guest, you won’t be able to check
								your order status online. You’ll still receive the tracking
								number by email and can track your delivery through the
								courier’s website.
							</p>
							<p className='answer'>
								Bricks & Pieces orders are sent through the regular post and
								can’t be tracked.
							</p>{' '}
						</div>
					</div>
				</div>
			</div>
			<OurService />
		</div>
	);
};

export default withRouter(TrackingOrders);

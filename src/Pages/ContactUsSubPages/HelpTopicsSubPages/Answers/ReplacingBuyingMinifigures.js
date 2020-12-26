import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from '../../../../components/Header/Header';
import HelpTopicsHeader from '../../../../components/HelpTopicsHeader/HelpTopicsHeader';
import OurService from '../../../../components/OurService/OurService';
import './Answers.css';

const ReplacingBuyingMinifigures = (props) => {
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
							<h1 id='title'>Replacing or buying minifigures</h1>
						</div>
					</div>

					<div className='row m-0' id='main-content'>
						<div className='col-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 p-0'>
							<p className='answer'>
								We love minifigures! That’s why you can order many different
								individual minifigures from our Bricks & Pieces service! To make
								the search easier, it’s great if you know the part or set
								numbers.
							</p>

							<p className='answer'>
								Unfortunately, we can’t sell all our minifigures separately.
								Some of them, such as the figures from Star Wars™, NINJAGO®,
								NEXO KNIGHTS™ or THE LEGO® BATMAN MOVIE are "licensed". That
								means we can’t sell them individually and they only come as part
								of a set.
							</p>

							<p className='answer'>
								If you’re looking for replacement parts for our own, much-loved
								LEGO® Minifigures Series, we’re more than happy to send you a
								part that is as similar as possible. We can’t send you the
								original piece because, just like you, we receive the Minifigure
								Series in their prepacked mystery bags. That means that we don’t
								have individual replacement parts.
							</p>
						</div>
					</div>
				</div>
			</div>
			<OurService />
		</div>
	);
};

export default withRouter(ReplacingBuyingMinifigures);

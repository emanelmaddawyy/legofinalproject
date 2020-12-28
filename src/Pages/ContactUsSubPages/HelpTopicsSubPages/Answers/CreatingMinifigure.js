import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import BackButton from '../../../../components/BackButton/BackButton';
import Header from '../../../../components/Header/Header';
import HelpTopicsHeader from '../../../../components/HelpTopicsHeader/HelpTopicsHeader';
import OurService from '../../../../components/OurService/OurService';
import './Answers.css';

const CreatingMinifigure = (props) => {
	return (
		<div id='Answers'>
			<Header />

			<HelpTopicsHeader />

			<div className='row p-0 m-0 w-100'>
				<div className='col-12'>
					<div className='row m-0'>
						<div className='col-12'>
						<BackButton data="Back to all Help Topics" />
							<h1 id='title'>Creating your own minifigure</h1>
						</div>
					</div>

					<div className='row m-0' id='main-content'>
						<div className='col-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 p-0'>
							<p className='answer'>
								Are you looking to create a unique minifigure to represent you?
								If so, you’ll want to check out the ‘Build a Mini’ tower at your
								nearest LEGO® Store. There you’ll find a variety of heads,
								hairpieces, torsos, legs, and accessories that you can use to
								create a custom minifigure! If you’re not sure where to look,
								ask one of the store’s Brick Specialists for help.
							</p>

							<p className='answer'>
								Do you need even more choices? Then you’ll want to check out the
								selection of minifigure parts available to order online through
								our Pick a Brick and Bricks & Pieces services.{' '}
								<Link to='/buyingindividualparts' className='link'>
									Check out this help topic
								</Link>{' '}
								to find out more. Keep in mind that you can also use parts from
								minifigures in your own collection… don’t be afraid to mix and
								match!
							</p>
						</div>
					</div>
				</div>
			</div>
			<OurService />
		</div>
	);
};

export default withRouter(CreatingMinifigure);

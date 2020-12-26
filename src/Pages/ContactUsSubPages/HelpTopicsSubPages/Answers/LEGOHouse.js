import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from '../../../../components/Header/Header';
import HelpTopicsHeader from '../../../../components/HelpTopicsHeader/HelpTopicsHeader';
import OurService from '../../../../components/OurService/OurService';
import './Answers.css';

const LEGOHouse = (props) => {
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
							<h1 id='title'>Find out about LEGO® House</h1>
						</div>
					</div>

					<div className='row m-0' id='main-content'>
						<div className='col-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 p-0'>
							<p class='text-center'>
								<img src='/HT0375_1.png' alt='' width='100%' />
							</p>
							<p className='answer'>
								LEGO® House is a hands-on, minds-on experience center where
								you're invited to discover the infinite play and learning
								experiences made possible by the LEGO® brick!
							</p>

							<p className='answer'>
								Also known as “Home of the Brick”, LEGO® House first opened its
								doors on September 28, 2017 to a world of creativity and fun.
								It's a can't-miss opportunity for any LEGO® fan.
							</p>

							<p className='answer'>
								The center is right in Billund, Denmark, where the LEGO® story
								began. Whether you're a kid or kid-at-heart, we invite you into
								our LEGO® home to be a part of the ultimate play date!
							</p>
						</div>
					</div>
				</div>
			</div>
			<OurService />
		</div>
	);
};

export default withRouter(LEGOHouse);

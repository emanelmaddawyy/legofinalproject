import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from '../../../../components/Header/Header';
import HelpTopicsHeader from '../../../../components/HelpTopicsHeader/HelpTopicsHeader';
import OurService from '../../../../components/OurService/OurService';
import './Answers.css';

const WhatBricksMadeOf = (props) => {
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
							<h1 id='title'>What LEGO® bricks are made of</h1>
						</div>
					</div>

					<div className='row m-0' id='main-content'>
						<div className='col-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 p-0'>
							<p className='answer'>
								We choose high-quality materials for our LEGO® and DUPLO® toys
								to give children the safest and best play experience possible.
							</p>

							<p className='answer'>
								Since 1963, most LEGO pieces have been made of a high-quality
								plastic called ABS. It provides the unique connective grip
								(clutch power), high gloss and colors LEGO bricks are known for.
								It also meets a long list of safety, durability and quality
								rules.
							</p>

							<p className='answer'>
								Although elastic parts are quite rare in our sets, we do use
								some white, red and blue silicone parts. Our tires have a soft
								feel to them because of a material called SBS or SEBS, which is
								commonly found in vehicle mud guards and shoe soles.
							</p>

							<p className='answer'>
								We can’t promise that our toys are entirely free from latex
								rubber parts. If you’re worried that you or a loved one might
								have allergic reactions when playing with LEGO toys, we suggest
								that you follow the same procedures as with other possible
								allergens. It’s always a good idea to take your previous history
								into account and carefully watch out for any unwanted results.
							</p>
						</div>
					</div>
				</div>
			</div>
			<OurService />
		</div>
	);
};

export default withRouter(WhatBricksMadeOf);

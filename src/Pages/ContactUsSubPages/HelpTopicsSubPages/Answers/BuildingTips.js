import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import BackButton from '../../../../components/BackButton/BackButton';
import Header from '../../../../components/Header/Header';
import HelpTopicsHeader from '../../../../components/HelpTopicsHeader/HelpTopicsHeader';
import OurService from '../../../../components/OurService/OurService';
import './Answers.css';

const BuildingTips = (props) => {
	return (
		<div id='Answers'>
			<Header />

			<HelpTopicsHeader />

			<div className='row p-0 m-0 w-100'>
				<div className='col-12'>
					<div className='row m-0'>
						<div className='col-12'>
						<BackButton data="Back to all Help Topics" />
							<h1 id='title'>Building tips for Master Builders</h1>
						</div>
					</div>

					<div className='row m-0' id='main-content'>
						<div className='col-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 p-0'>
							<p className='answer'>
								There’s something almost magical about the process of building
								your own creations or using thousands and thousands of LEGO®
								bricks for one of the spectacular display models you can see in
								our stores, in LEGOLAND® parks, or in many other places.
							</p>

							<p className='answer'>
								Did you know that we even have teams that get to design new sets
								for a living? Most of them started out as big fans (just like
								you). If you have a great project in mind, you can apply the
								same rules as our designers. They always try to come up with
								new, innovative ways of building and create models that will be
								fun to build and play with!
							</p>

							<p className='answer'>
								They begin without any instructions, building and making changes
								as they go. Once everything lines up and is as sturdy as it can
								be, they’ll start on the final version. It always takes several
								tries until they create something they like so if you're
								building something, don’t be disheartened if it doesn’t quite
								look like you want it to. After all, practice makes perfect.
							</p>

							<p className='answer'>
								Get inspired, get building and most importantly: have fun!
							</p>
						</div>
					</div>
				</div>
			</div>
			<OurService />
		</div>
	);
};

export default withRouter(BuildingTips);

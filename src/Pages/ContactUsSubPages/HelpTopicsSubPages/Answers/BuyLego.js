import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from '../../../../components/Header/Header';
import HelpTopicsHeader from '../../../../components/HelpTopicsHeader/HelpTopicsHeader';
import OurService from '../../../../components/OurService/OurService';
import './Answers.css';

const BuyLego = (props) => {
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
							<h1 id='title'>Where to buy LEGO® sets</h1>
						</div>
					</div>

					<div className='row m-0' id='main-content'>
						<div className='col-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 p-0'>
							<p className='answer'>
								If you’re after a hard-to-find set, the first place to look
								should be the world's biggest LEGO® Shop at{' '}
								<Link to='/' className='link'>
									LEGO.com
								</Link>
								. You'll find the very latest models, exclusive sets,
								accessories and more. During some parts of the year, you'll even
								find seasonal holiday sets. If you can’t find it on our Shop
								website, it’s always worth trying an official LEGO® Store. Find
								one near you using our store finder.
							</p>

							<p className='answer'>
								If we don’t have the set you’re looking for, there are still
								plenty of other places to buy LEGO® products! You may want to
								try searching toy stores, supermarkets, specialty gift shops,
								department stores, or the Internet. If it’s a{' '}
								<Link to='/retiredsets' className='link'>
									retired set
								</Link>
								, you may still have luck with different retailers or online
								shops. Keep in mind that these aren’t our websites so the LEGO
								Group isn’t responsible for their content, and the items they’re
								selling could be new or used.
							</p>
						</div>
					</div>
				</div>
			</div>
			<OurService />
		</div>
	);
};

export default withRouter(BuyLego);

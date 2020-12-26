import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from '../../../../components/Header/Header';
import HelpTopicsHeader from '../../../../components/HelpTopicsHeader/HelpTopicsHeader';
import OurService from '../../../../components/OurService/OurService';
import './Answers.css';

const DiscoveryAroundTheWorld = (props) => {
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
							<h1 id='title'>LEGOLAND® Discovery Centers around the world</h1>
						</div>
					</div>

					<div className='row m-0' id='main-content'>
						<div className='col-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 p-0'>
							<p className='answer row'>
								<p className='col-6'>
									<p className='answer'>
										Thinking about a day out in one of our LEGOLAND® Discovery
										Centers? You can visit the 4D cinema, the amazing play areas
										and participate in the many events that are on.
									</p>{' '}
									<p className='answer'>
										For more information, check out the Discovery Center
										website. We also have a great app that keeps you informed
										about everything that’s going on in the Discovery Centers.
										You can download it from the Play or the App Store.
									</p>
								</p>
								<p className='col-6'>
									<p class='text-center'>
										<img src='/ht2340-1.png' alt='' width='100%' />
									</p>
								</p>
							</p>

							<p className='answer'></p>

							<p className='answer'></p>

							<p className='answer'></p>

							<p className='answer'></p>

							<p className='answer'></p>

							<p className='answer'></p>

							<h3 className='question'></h3>
							<p className='answer'></p>

							<h3 className='question'></h3>
							<p className='answer'></p>

							<h3 className='question'></h3>
							<p className='answer'></p>

							<h3 className='question'></h3>
							<p className='answer'></p>

							<h3 className='question'></h3>
							<p className='answer'></p>
						</div>
					</div>
				</div>
			</div>
			<OurService />
		</div>
	);
};

export default withRouter(DiscoveryAroundTheWorld);

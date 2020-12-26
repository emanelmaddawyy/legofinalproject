import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from '../../../../components/Header/Header';
import HelpTopicsHeader from '../../../../components/HelpTopicsHeader/HelpTopicsHeader';
import OurService from '../../../../components/OurService/OurService';
import './Answers.css';

const LEGOLANDlocations = (props) => {
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
							<h1 id='title'>LEGOLAND® locations around the world</h1>
						</div>
					</div>

					<div className='row m-0' id='main-content'>
						<div className='col-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 p-0'>
							<p className='answer row'>
								<div className='col-6'>
									<p className='answer'>
										Thinking about taking a trip to LEGOLAND®?
									</p>
									<p className='answer'>
										We have eight LEGOLAND® parks all over the world, so take
										your pick! They are in Billund, California, Florida,
										Malaysia, Dubai, Windsor, Japan and Germany.{' '}
									</p>
								</div>
								<div className='col-6'>
									<p class='text-center'>
										<img src='/ht239-1.png' alt='' width='100%' />
									</p>
								</div>
							</p>

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

export default withRouter(LEGOLANDlocations);

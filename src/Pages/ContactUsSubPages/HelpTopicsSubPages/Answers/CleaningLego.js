import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from '../../../../components/Header/Header';
import HelpTopicsHeader from '../../../../components/HelpTopicsHeader/HelpTopicsHeader';
import OurService from '../../../../components/OurService/OurService';
import './Answers.css';

const CleaningLego = (props) => {
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
							<h1 id='title'>Cleaning your LEGO® bricks</h1>
						</div>
					</div>

					<div className='row m-0' id='main-content'>
						<div className='col-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 p-0'>
							<p className='answer row'>
								<div className='col-6'>
									<p class='text-center'>
										<img src='/ht293.png' alt='' width='100%' />
									</p>
								</div>
								<div className='col-6'>
									<p className='row answer'>
										Cleaning your LEGO® bricks is really easy! We recommend that
										you clean your LEGO® parts by hand using water no hotter
										than 104°F / 40°C and a soft cloth or sponge. Higher
										temperatures may affect the quality of the parts. You can
										add a mild detergent to the water - please rinse them well
										with clear water afterwards and you're done!
									</p>
									<p className='row answer'>
										A word of warning! Please don't put your LEGO® pieces in the
										washing machine or dishwasher, and don't try to dry them in
										the oven, the microwave or with a hair dryer. When the
										bricks get really hot they may change shape, which means
										they won't work anymore!
									</p>
								</div>
							</p>
						</div>
					</div>
				</div>
			</div>
			<OurService />
		</div>
	);
};

export default withRouter(CleaningLego);

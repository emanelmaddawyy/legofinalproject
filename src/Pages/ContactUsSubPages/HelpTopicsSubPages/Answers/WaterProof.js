import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from '../../../../components/Header/Header';
import HelpTopicsHeader from '../../../../components/HelpTopicsHeader/HelpTopicsHeader';
import OurService from '../../../../components/OurService/OurService';
import './Answers.css';

const WaterProof = (props) => {
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
							<h1 id='title'></h1>
						</div>
					</div>

					<div className='row m-0' id='main-content'>
						<div className='col-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 p-0'>
							<p className='answer'>
								Do you want to play with your LEGO® bricks in water? No problem!
								Standard LEGO® bricks are not harmed by water. Some specially
								designed one-piece boat hulls will even float on the surface of
								water, although most LEGO® creations will not.
							</p>

							<div className='row'>
								<div className='col-6'>
									<p class='text-center'>
										<img src='/HT0506_1.png' alt='' width='100%' />
									</p>
								</div>
								<div className='col-6'>
									<p className='answer'>
										On the other hand, we don’t recommend you use your LEGO®
										bricks as decorations in aquariums or fish tanks.
										Additionally, there are also a few types of LEGO® parts that
										should never be put into water:
									</p>
									<h3 className='question'>Electronic parts</h3>

									<p className='answer'>
										Please be careful to make sure electronic parts like motors,
										sensors, lights, and battery boxes don’t come into contact
										with water. Putting electronic parts in water can damage the
										parts and pose a safety risk.
									</p>
									<h3 className='question'>
										Assemblies and Mechanical components
									</h3>

									<p className='answer'>
										Any parts that are made of multiple smaller pieces which
										can’t come apart, like a Technic gearbox or DUPLO® vehicle
										should not be put into water. There’s no safety risk from
										immersing these, but water could get inside the part and
										never fully dry, resulting in mold or mildew growth.
									</p>
								</div>
							</div>

							<p className='answer'>
								For information on how to clean your LEGO® bricks,
								<Link to='/cleaninglego' className='link'>
									check out this help topic
								</Link>
								.
							</p>
						</div>
					</div>
				</div>
			</div>
			<OurService />
		</div>
	);
};

export default withRouter(WaterProof);

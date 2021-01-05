import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import BackButton from '../../../../components/BackButton/BackButton';
import Header from '../../../../components/Header/Header';
import HelpTopicsHeader from '../../../../components/HelpTopicsHeader/HelpTopicsHeader';
import OurService from '../../../../components/OurService/OurService';
import './Answers.css';

const MindStorm = (props) => {
	return (
		<div id='Answers'>
			<Header />

			<HelpTopicsHeader />

			<div className='row p-0 m-0 w-100'>
				<div className='col-12'>
					<div className='row m-0'>
						<div className='col-12'>
						<BackButton data="Back to all Help Topics" />
							<h1 id='title'>
								How is LEGO® BOOST different from LEGO® MINDSTORMS®?
							</h1>
						</div>
					</div>

					<div className='row m-0' id='main-content'>
						<div className='col-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 p-0'>
							<p className='answer'>
								While both experiences allow you to build and program robots,
								there are some important differences between LEGO® BOOST and
								LEGO® MINDSTORMS®:
							</p>

							<p className='answer'>
								<ul className='ul'>
									<li>
										LEGO® BOOST is aimed at younger builders, aged 7+, using fun
										and easy icon-based coding. LEGO® MINDSTORMS® is more suited
										to kids age 10 and up, since it uses a more complex coding
										language.
									</li>
									<li>
										LEGO® BOOST doesn’t have an Intelligent Brick or desktop
										programming software like LEGO® MINDSTORMS®. With LEGO®
										BOOST, it all happens on your tablet.
									</li>
									<li>
										LEGO® MINDSTORMS® is based on the Technic building system
										and LEGO® BOOST mainly uses regular LEGO® System bricks.
									</li>
								</ul>
							</p>

							<p className='answer'>
								Because of these differences, LEGO® BOOST is not compatible with
								LEGO® MINDSTORMS®.
							</p>

							<p className='answer'>
								If you have any more questions about what makes LEGO® BOOST
								unique, please don't hesitate to to{' '}
								<Link to='/service' className='link'>
									get in touch with us
								</Link>{' '}
								and we'll be happy to help!
							</p>
						</div>
					</div>
				</div>
			</div>
			<OurService />
		</div>
	);
};

export default withRouter(MindStorm);

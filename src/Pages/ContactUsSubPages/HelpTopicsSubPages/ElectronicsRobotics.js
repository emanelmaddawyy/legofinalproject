import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from '../../../components/Header/Header';
import OurService from '../../../components/OurService/OurService';
import MediaPopular from '../../../components/MediaPopular/MediaPopular';
import MediaArticle2 from '../../../components/MediaArticle/MediaArticle2';
import HelpTopicsHeader from '../../../components/HelpTopicsHeader/HelpTopicsHeader';
import './HelpTopicsSubPages.css';
import BackButton from '../../../components/BackButton/BackButton';
const ElectronicsRobotics = (props) => {
	return (
		<div>
			<Header />

			<HelpTopicsHeader />

			<div className='row p-0 m-0 w-100'>
				<div className='col-lg-8 order-lg-1 chooseTopic'>
					<div className='layout__main-inner align-items-center'>
						<div className='grid--center'>
							<div className='grid__item'>
								<div className='row m-0'>
									<div className='col-12'>
									<BackButton data="Back to all Help Topics" />
									</div>
									<div className='col-12' id='title'>
										BOOST - Electronics & Robotics
									</div>
									<div className='col-12'>
										<p id='subtitle'>
											Have you heard about LEGO® BOOST? You can build great
											models and have endless fun with the the programming of
											these cool little robots.
										</p>
									</div>
								</div>
								<div className='row m-0' id='main-content'>
									<div className='col-12'>
										<Link to='/connectlegoboost'>
											<MediaArticle2
												text={
													'Connecting the LEGO® BOOST app to the Move Hub with Bluetooth'
												}
											/>
										</Link>
										<Link to='/boostcompatible'>
											<MediaArticle2 text={'BOOST-compatible LEGO® sets'} />
										</Link>
										<Link to='/mindstorm'>
											<MediaArticle2
												text={
													'How is LEGO® BOOST different from LEGO® MINDSTORMS®?'
												}
											/>
										</Link>
										<Link to='/lightlegoboost'>
											<MediaArticle2
												text={
													'The light on my LEGO® BOOST Move Hub keeps flashing different colors'
												}
											/>
										</Link>
										<Link to='/hearingsound'>
											<MediaArticle2
												text={'Hearing sound and speaking to LEGO® BOOST'}
											/>
										</Link>
										<Link to='/starwars'>
											<MediaArticle2 text={'LEGO® BOOST Star Wars™ app'} />
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='col-lg-4 order-lg-2 p-0' id='popularArticles'>
					<section className='content-item__secondary p-0 m-0'>
						<div className='content-item__secondary-inner p-5'>
							<MediaPopular />
						</div>
					</section>
				</div>
			</div>

			<OurService />
		</div>
	);
};

export default withRouter(ElectronicsRobotics);

import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from '../../../components/Header/Header';
import OurService from '../../../components/OurService/OurService';
import MediaPopular from '../../../components/MediaPopular/MediaPopular';
import MediaArticle2 from '../../../components/MediaArticle/MediaArticle2';
import HelpTopicsHeader from '../../../components/HelpTopicsHeader/HelpTopicsHeader';
import './HelpTopicsSubPages.css';
import BackButton from '../../../components/BackButton/BackButton';

const LegoEventsTours = (props) => {
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
										LEGO® Events & Tours - LEGO® Events & Tours
									</div>
									<div className='col-12'>
										<p id='subtitle'>
											Interested in going to a LEGO® event, or visiting one of
											our many locations around the world? Find out more about
											events and tours near you here.
										</p>
									</div>
								</div>
								<div className='row m-0' id='main-content'>
									<div className='col-12'>
										<Link to='/legoambassador'>
											<MediaArticle2
												text={
													'About the LEGO® Ambassador Network and LEGO® User Groups'
												}
											/>
										</Link>
										<Link to='/eventsnearyou'>
											<MediaArticle2
												text={'Find out about LEGO® Events near you'}
											/>
										</Link>
										<Link to='/discoverycenterapp'>
											<MediaArticle2
												text={'LEGOLAND® and Discovery Center app'}
											/>
										</Link>
										<Link to='/legoinside'>
											<MediaArticle2 text={'About LEGO® Inside Tour'} />
										</Link>
										<Link to='/eventsatstores'>
											<MediaArticle2 text={'Find out about LEGO® House'} />
										</Link>
										<Link to='/legoHouse'>
											<MediaArticle2
												text={'LEGO® Life events at LEGO® Stores'}
											/>
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

export default withRouter(LegoEventsTours);

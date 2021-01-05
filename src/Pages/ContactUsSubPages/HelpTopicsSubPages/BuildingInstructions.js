import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from '../../../components/Header/Header';
import OurService from '../../../components/OurService/OurService';
import MediaPopular from '../../../components/MediaPopular/MediaPopular';
import MediaArticle2 from '../../../components/MediaArticle/MediaArticle2';
import HelpTopicsHeader from '../../../components/HelpTopicsHeader/HelpTopicsHeader';
import './HelpTopicsSubPages.css';
import BackButton from '../../../components/BackButton/BackButton';

const BuildingInstructions = (props) => {
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
									<BackButton  data="Back to all Help Topics" />
									</div>
									<div className='col-12' id='title'>
										Building Instructions - Building Instructions
									</div>
									<div className='col-12'>
										<p id='subtitle'>
											Looking for building tips and ideas? Browse our database
											and download LEGO® building instructions online.
										</p>
									</div>
								</div>
								<div className='row m-0' id='main-content'>
									<div className='col-12'>
										<Link to='/identifyinglegoset'>
											<MediaArticle2
												text={'Identifying LEGO® set and part numbers'}
											/>
										</Link>
										<Link to='/replaceinstructions'>
											<MediaArticle2
												text={
													'Replace missing or damaged building instructions'
												}
											/>
										</Link>
										<Link to='/buildingtips'>
											<MediaArticle2
												text={'Building tips for Master Builders'}
											/>
										</Link>
										<Link to='/designinstructions'>
											<MediaArticle2
												text={'How we design our building instructions'}
											/>
										</Link>
										<Link to='/printedmaterials'>
											<MediaArticle2 text={'FSC® logo on printed materials'} />
										</Link>
										<Link to='/minion'>
											<MediaArticle2
												text={
													'LEGO® Minions 75551 Brick-built Minions and their Lair'
												}
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

export default withRouter(BuildingInstructions);

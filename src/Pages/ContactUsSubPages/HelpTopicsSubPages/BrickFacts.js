import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from '../../../components/Header/Header';
import OurService from '../../../components/OurService/OurService';
import MediaPopular from '../../../components/MediaPopular/MediaPopular';
import MediaArticle2 from '../../../components/MediaArticle/MediaArticle2';
import HelpTopicsHeader from '../../../components/HelpTopicsHeader/HelpTopicsHeader';
import './HelpTopicsSubPages.css';
import BackButton from '../../../components/BackButton/BackButton';

const BrickFacts = (props) => {
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
										<BackButton className="m-0" data="Back to all Help Topics" />
									</div>
									<div className='col-12' id='title'>
										Brick Facts - Brick Facts
									</div>
									<div className='col-12'>
										<p id='subtitle'>
											Do you want to learn more about LEGO® bricks and the LEGO®
											system of play? Discover all the answers to your
											brick-related queries here.
										</p>
									</div>
								</div>
								<div className='row m-0' id='main-content'>
									<div className='col-12'>
										<Link to='/recyclinglego'>
											<MediaArticle2
												text={'Recycling LEGO® pieces & warehouse recycling'}
											/>
										</Link>
										<Link to='/cleaninglego'>
											<MediaArticle2 text={'Cleaning your LEGO® bricks'} />
										</Link>
										<Link to='/comparingbricksplates'>
											<MediaArticle2
												text={
													'Comparing LEGO® bricks, plates, and DUPLO® bricks'
												}
											/>
										</Link>
										<Link to='/howbricksmade'>
											<MediaArticle2 text={'How LEGO® bricks are made'} />
										</Link>
										<Link to='/whatbricksmadeof'>
											<MediaArticle2 text={'What LEGO® bricks are made of'} />
										</Link>
										<Link to='/buildingtips'>
											<MediaArticle2
												text={'Building tips for Master Builders'}
											/>
										</Link>
										<Link to='/waterproof'>
											<MediaArticle2 text={'Are LEGO® bricks waterproof?'} />
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

export default withRouter(BrickFacts);

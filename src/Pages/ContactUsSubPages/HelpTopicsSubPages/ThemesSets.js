import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from '../../../components/Header/Header';
import OurService from '../../../components/OurService/OurService';
import MediaPopular from '../../../components/MediaPopular/MediaPopular';
import MediaArticle2 from '../../../components/MediaArticle/MediaArticle2';
import HelpTopicsHeader from '../../../components/HelpTopicsHeader/HelpTopicsHeader';
import './HelpTopicsSubPages.css';

const ThemesSets = (props) => {
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
										<button
											className='btn d-flex align-items-center pl-0'
											id='backBtn'
											onClick={props.history.goBack}>
											<img src='/left-arrow.svg' alt='' height='10px' />
											<div id='back-text'>Back to all Help Topics</div>
										</button>
									</div>
									<div className='col-12' id='title'>
										Themes & Sets - Themes & Sets
									</div>
									<div className='col-12'>
										<p id='subtitle'>
											Want more information about specific LEGO® themes and
											sets? Our LEGO® experts have put this information together
											to help you.
										</p>
									</div>
								</div>
								<div className='row m-0' id='main-content'>
									<div className='col-12'>
										<Link to='/'>
											<MediaArticle2
												text={'Identifying LEGO® set and part numbers'}
											/>
										</Link>
										<Link to='/'>
											<MediaArticle2 text={'Retired LEGO® sets'} />
										</Link>
										<Link to='/'>
											<MediaArticle2
												text={'Finding out when new sets are available'}
											/>
										</Link>
										<Link to='/'>
											<MediaArticle2 text={'Where to buy LEGO® sets'} />
										</Link>
										<Link to='/'>
											<MediaArticle2
												text={'How we decide the prices of LEGO® sets'}
											/>
										</Link>
										<Link to='/'>
											<MediaArticle2 text={'How we design LEGO® sets'} />
										</Link>
										<Link to='/'>
											<MediaArticle2
												text={
													'What to do if you’re having problems building your set'
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

export default withRouter(ThemesSets);

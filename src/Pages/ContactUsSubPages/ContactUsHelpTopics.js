import React from 'react';
import './ContactUsHelpTopics.css';
import { Link, withRouter } from 'react-router-dom';
import Header from '../../components/Header/Header';
import OurService from '../../components/OurService/OurService';
import MediaPopular from '../../components/MediaPopular/MediaPopular';
import MediaHeader from '../../components/MediaHeader/MediaHeader';
import MediaArticle from '../../components/MediaArticle/MediaArticle';
import HelpTopicsHeader from '../../components/HelpTopicsHeader/HelpTopicsHeader';

const ContactUsHelpTopics = () => {
	return (
		<div id='HelpTopics'>
			<Header />

			<HelpTopicsHeader />

			<div className='row p-0 m-0 w-100'>
				<div className='col-lg-8 order-lg-1 chooseTopic'>
					<div className='layout__main-inner align-items-center'>
						<div className='grid--center'>
							<div className='grid__item'>
								<div className='row m-0'>
									<div className='col-12' id='title'>
										Choose topic
									</div>
								</div>
								<div className='row m-0' id='main-content'>
									<div className='col-6 col-lg-4 mb-5'>
										<MediaHeader text={'Shopping'} />
										<Link to='/deliveries'>
											<MediaArticle text={'Deliveries'} />
										</Link>

										<Link to='/onlineshop'>
											<MediaArticle text={'Online Shop'} />
										</Link>
									</div>

									<div className='col-6 col-lg-4 mb-5'>
										<MediaHeader text={'Bricks & Building'} />

										<Link to='/brickFacts'>
											<MediaArticle text={'Brick Facts'} />
										</Link>

										<Link to='/buildinginstructions'>
											<MediaArticle text={'Building Instructions'} />
										</Link>

										<Link to='/buyingparts'>
											<MediaArticle text={'Buying Parts'} />
										</Link>
									</div>

									<div className='col-6 col-lg-4 mb-5'>
										<MediaHeader text={'Online Help'} />

										<Link to='/helpcontactus'>
											<MediaArticle text={'Contact Us'} />
										</Link>

										<Link to='/legoaccount'>
											<MediaArticle text={'LEGO® Account'} />
										</Link>
									</div>

									<div className='col-6 col-lg-4 mb-5'>
										<MediaHeader text={'Products'} />

										<Link to='/electronicsrobotics'>
											<MediaArticle text={'Electronics & Robotics'} />
										</Link>

										<Link to='/themessets'>
											<MediaArticle text={'Themes & Sets'} />
										</Link>
									</div>

									<div className='col-6 col-lg-4 mb-5'>
										<MediaHeader text={'Fun For Fans'} />

										<Link to='/legoeventstours'>
											<MediaArticle text={'LEGO® Events & Tours'} />
										</Link>

										<Link to='/legoland'>
											<MediaArticle text={'LEGOLAND®'} />
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

export default withRouter(ContactUsHelpTopics);

import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from '../../../components/Header/Header';
import OurService from '../../../components/OurService/OurService';
import MediaPopular from '../../../components/MediaPopular/MediaPopular';
import MediaArticle2 from '../../../components/MediaArticle/MediaArticle2';
import HelpTopicsHeader from '../../../components/HelpTopicsHeader/HelpTopicsHeader';
import './HelpTopicsSubPages.css';
import BackButton from '../../../components/BackButton/BackButton';

const OnlineShop = (props) => {
	return (
		<div>
			<Header />

            <HelpTopicsHeader/>

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
										Online Shop - Online Shop
									</div>
									<div className='col-12'>
										<p id='subtitle'>
											Discover the online LEGO® Shop! All the answers to any
											questions you might have about shopping with us online can
											be found here.
										</p>
									</div>
								</div>
								<div className='row m-0' id='main-content'>
									<div className='col-12'>
										<Link to='/orderingonline'>
											<MediaArticle2 text={'Ordering from LEGO® Shop online'} />
										</Link>
										<Link to='/legoavailabilitystatuses'>
											<MediaArticle2 text={'LEGO.com availability statuses'} />
										</Link>
										<Link to='/cancelorder'>
											<MediaArticle2 text={'When can I cancel or change a LEGO® Shop order?'} />
										</Link>
										<Link to='/addpromotional'>
											<MediaArticle2 text={'Where to add VIP codes, promotional codes and discount codes at checkout'} />
										</Link>
										<Link to='/legogiftcard'>
											<MediaArticle2 text={'About LEGO® Gift Cards'} />
										</Link>
										<Link to='/shopweberrors'>
											<MediaArticle2 text={'LEGO® Shop web errors'} />
										</Link>
										<Link to='/backordereditems'>
											<MediaArticle2 text={'Ordering backordered items'} />
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

export default withRouter(OnlineShop);

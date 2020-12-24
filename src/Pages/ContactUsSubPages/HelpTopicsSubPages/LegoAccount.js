import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from '../../../components/Header/Header';
import OurService from '../../../components/OurService/OurService';
import MediaPopular from '../../../components/MediaPopular/MediaPopular';
import MediaArticle2 from '../../../components/MediaArticle/MediaArticle2';
import HelpTopicsHeader from '../../../components/HelpTopicsHeader/HelpTopicsHeader';
import './HelpTopicsSubPages.css';

const LegoAccount = (props) => {
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
										LEGO® Account - LEGO® Account
									</div>
									<div className='col-12'>
										<p id='subtitle'>
											Create a LEGO® Account to shop online, save wishlists and
											game scores, and much more. Find out how to create a free
											LEGO® Account today.
										</p>
									</div>
								</div>
								<div className='row m-0' id='main-content'>
									<div className='col-12'>
										<Link to='/'>
											<MediaArticle2
												text={'Making changes to your LEGO® Account'}
											/>
										</Link>
										<Link to='/'>
											<MediaArticle2 text={'How do I delete my LEGO® Account?'} />
										</Link>
										<Link to='/'>
											<MediaArticle2
												text={
													"I didn't get an email when I tried to reset my password. What do I do?"
												}
											/>
										</Link>
										<Link to='/'>
											<MediaArticle2 text={"What to do if you can't remember the username registered to your LEGO® VIP card"} />
										</Link>
										<Link to='/'>
											<MediaArticle2 text={'Subscribing to LEGO® newsletters'} />
										</Link>
										<Link to='/'>
											<MediaArticle2
												text={"What's a LEGO® Account and how can I use it?"}
											/>
										</Link>
										<Link to='/'>
											<MediaArticle2 text={'What to do if you registered your LEGO® Account to your child'} />
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

export default withRouter(LegoAccount);

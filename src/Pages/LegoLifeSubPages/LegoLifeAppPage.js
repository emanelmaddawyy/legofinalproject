import React from 'react';
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';
import './LegoLifeAppPage.css';

const LegoLifeAppPage = () => {
	return (
		<div id='legoApp'>
			<Header />
			<header className='headerStyle'>
				<div>
					<Link to='/legolife'>
						<img src='/LEGOlifeLogo.png' alt='' />
					</Link>
				</div>
				<nav>
					<ul className='nav_list'>
						<Link to='/legolifeapp'>
							<li className='activeLegoLife'>App</li>
						</Link>

						<Link to='/legolifemagazine'>
							<li>Magazine</li>
						</Link>

						<Link to='/legolifefaq'>
							<li>FAQ</li>
						</Link>
					</ul>
				</nav>
			</header>

			<article className='content-item__inner sect1'>
				<section className='content-item__primary'>
					<div className='content-item__primary-inner'>
						<img src='/topslider_llapp.jfif' alt='' />
					</div>
				</section>

				<section className='content-item__secondary'>
					<div className='content-item__secondary-inner'>
						{/* <h3 className='cta__title'>LEGO® Life Magazine</h3> */}
						<p className='cta__txt'>
							Kids love to get inspired, share their creativity and connect with
							other kids. The LEGO® Life app is a creative and social place for
							kids where they can do just that in a completely safe environment!
						</p>
						{/* <div className='cta__btn-wrapper'>
							<div className='cta__btn'>Find out more</div>
						</div> */}
					</div>
				</section>
			</article>

			<div className='text-quote text-quote2'>
				<div className='grid-column'>
					<div className='grid-content'>
						<div className='content-item'>
							<section className='content-item__secondary'>
								<p className='cta__title'>
									There’s so much for kids to do in the LEGO® Life app
								</p>
							</section>
						</div>
					</div>
				</div>
			</div>

			<div className='row p-0 w-100 hero'>
				<div className='col-lg-8 pr-0 order-lg-2'>
					<img src='/1llappcreateandshare2560x1440.jfif' alt='' />
				</div>

				<div className='col-lg-4 my-auto order-lg-1'>
					<section className='content-item__secondary'>
						<div className='content-item__secondary-inner'>
							<h3 className='cta__title'>Create & Share</h3>
							<p className='cta__txt'>
								Kids can like and comment on each other’s posts. With happy
								LEGO® emoticons and moderators ensuring comments are friendly,
								the LEGO Life app is always a positive experience.
							</p>
							{/* <div className='cta__btn-wrapper'>
								<div className='cta__btn'>Find out more</div>
							</div> */}
						</div>
					</section>
				</div>
			</div>

			<div className='text-quote keepChildSafe'>
				<div className='grid-column'>
					<div className='grid-content'>
						<div className='content-item'>
							<section className='content-item__secondary'>
								<p className='cta__title cta__title2'>
									Help us keep your child safe
								</p>
								<p className='cta__txt2'>
									To make sure that the LEGO® Life app stays a safe place to
									explore, we have introduced Verified Parental Consent.
								</p>
							</section>
						</div>
					</div>
				</div>
			</div>

			<div className='row p-0 w-100 hero'>
				<div className='col-lg-8 pl-0 order-lg-1'>
					<img
						src='/legolife_applandingpage_hero23_digitalsafety.jfif'
						alt=''
					/>
				</div>

				<div className='col-lg-4 my-auto order-lg-2'>
					<section className='content-item__secondary'>
						<div className='content-item__secondary-inner'>
							<h3 className='cta__title'>We make safety fun!</h3>
							<p className='cta__txt'>
								Your child’s well-being in the LEGO Life app is our priority.
								So, we built in features like Captain Safety, a character who
								educates kids on how to share, comment and connect safely.
							</p>
							{/* <div className='cta__btn-wrapper'>
								<div className='cta__btn'>Find out more</div>
							</div> */}
						</div>
					</section>
				</div>
			</div>

			<section className='headerStyle FAQ'>
				<div className='FAQWrapper'>
					<h3 class='cta__title'>Got questions?</h3>
					<p class='cta__txt'>
						Want to sign up? Can’t upload images? Need help on scanning QR
						codes? Visit our FAQ page for help on how to do these things – and
						more!
					</p>
					<Link to='/legolifefaq'>
						<div className='cta__btn-wrapper'>
							<div className='cta__btn'>Find Answers</div>
						</div>
					</Link>
				</div>
			</section>

			<div className='gallery'>
				<div className='grid-column'>
					<div className='grid-content '>
						<div className='galleryContainer '>
							<div class='row'>
								<div class='row col-md-8'>
									<div className='imageWrapper col-6 col-md-6'>
										<Link to='/legolifeapp'>
											<article className=''>
												<img src='/girl-and-rainbow2.jfif' alt='' />
												<div>App</div>
											</article>
										</Link>
									</div>
									<div className='imageWrapper col-6 col-md-6'>
										<Link to='/legolifemagazine'>
											<article className=''>
												<img src='/quick-links-magazine.jfif' alt='' />
												<div>Magazine</div>
											</article>
										</Link>
									</div>
								</div>

								<div className='imageWrapper col-12 col-md-4'>
									<Link to='/legolifefaq'>
										<article class='offset-3 col-6  offset-md-0 col-md-12 m-22'>
											<img src='/legolife_quicklinks_faq.jfif' alt='' />
											<div>FAQ</div>
										</article>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LegoLifeAppPage;

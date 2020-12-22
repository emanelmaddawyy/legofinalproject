import React from 'react';
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';
import LegoMagazineCarousel from '../../components/LegoMagazineCarousel/LegoMagazineCarousel';
import './LegoLifeMagazinePage.css';

const LegoLifeMagazinePage = () => {
	return (
		<div id='magazine'>
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
							<li>App</li>
						</Link>

						<Link to='/legolifemagazine'>
							<li className='activeLegoLife'>Magazine</li>
						</Link>

						<Link to='/legolifefaq'>
							<li>FAQ</li>
						</Link>
					</ul>
				</nav>
			</header>

			<div className='row p-0 w-100 hero'>
				<div className='col-lg-8 pl-0 order-lg-1'>
					<img
						src='/magazine-sign-up-page-heroblock-2_3_2560x1440.jfif'
						alt=''
					/>
				</div>

				<div className='col-lg-4 my-auto order-lg-2'>
					<section className='content-item__secondary'>
						<div className='content-item__secondary-inner p-5'>
							<h3 className='cta__title px-3'>
								Get the FREE LEGO® Life Magazine
							</h3>
							<p className='cta__txt'>
								If your child is between the ages of 5 and 9 you can get them a
								FREE subscription to the LEGO Life Magazine. The magazine is
								delivered directly to your home four times a year. Even shipping
								is free!
							</p>
							<Link to='/Register'>
								<div className='cta__btn-wrapper'>
									<div className='cta__btn'>Sign up</div>
								</div>
							</Link>
						</div>
					</section>
				</div>
			</div>

			<div className='row m-0 w-100 hero'>
				<div className='col-lg-8 pr-0 order-lg-2'>
					<img
						src='/legolife_familyaccount_hero23_needtoupdateyourdetails670dc324905c60fdb938dd57366b3a4e704e9a329e4fe58d7e905d3c54d6961a.jfif'
						alt=''
					/>
				</div>

				<div className='col-lg-4 my-auto order-lg-1'>
					<section className='content-item__secondary'>
						<div className='content-item__secondary-inner p-5'>
							<h3 className='cta__title'>Have you changed your address? </h3>
							<p className='cta__txt'>
								Simply sign in to update your account details and manage your
								existing subscription.
							</p>
							<Link to='/login'>
								<div className='cta__btn-wrapper'>
									<div className='cta__btn'>Manage Account</div>
								</div>
							</Link>
						</div>
					</section>
				</div>
			</div>

			<div className='row p-0 w-100 hero'>
				<div className='col-lg-8 pl-0 order-lg-1'>
					<img src='/magazine-hero-block.jfif' alt='' />
				</div>

				<div className='col-lg-4 my-auto order-lg-2'>
					<section className='content-item__secondary'>
						<div className='content-item__secondary-inner p-5'>
							<h3 className='cta__title'>Submission form for Cool Creations</h3>
							<p className='cta__txt'>
								Your kid’s LEGO® creation could appear in the magazine! To
								protect their personal information we need consent from a
								parent/guardian. Please fill out and send this written consent
								form with every entry.
							</p>
							{/* <div className='cta__btn-wrapper'>
								<div className='cta__btn'>Find out more</div>
							</div> */}
						</div>
					</section>
				</div>
			</div>

			<div className='text-quote EveryPageIsABlast'>
				<div className='grid-column'>
					<div className='grid-content'>
						<div className='content-item'>
							<section className='content-item__secondary'>
								<h3 className='cta__title'>Every page is a blast!</h3>
								<p className='cta__txt2'>
									There’s LEGO awesomeness packed into every page!
								</p>
							</section>
						</div>
					</div>
				</div>
			</div>
			<div className='px-5' id='magCarousel'>
				<LegoMagazineCarousel></LegoMagazineCarousel>
			</div>

			<div className='row p-0 w-100 hero'>
				<div className='col-lg-8 pl-0 order-lg-1'>
					<img src='/gl-ll-art-iss4-2020-digimags-images.jfif' alt='' />
				</div>

				<div className='col-lg-4 my-auto order-lg-2'>
					<section className='content-item__secondary'>
						<div className='content-item__secondary-inner p-5'>
							<h3 className='cta__title'>Download the magazine!</h3>
							<p className='cta__txt'>
								You can download the latest issue of the LEGO Life Magazine as
								well as previous issues from our archive page.
							</p>
							{/* <div className='cta__btn-wrapper'>
								<div className='cta__btn'>Find out more</div>
							</div> */}
						</div>
					</section>
				</div>
			</div>

			<section className='headerStyle p-5 FAQ'>
				<div className='FAQWrapper'>
					<h3 class='cta__title'>Got questions?</h3>
					<p class='cta__txt'>
						When will the next issue arrive? How can I enter my child’s cool
						creations? Visit our FAQ page for help on how to do these things –
						and more!
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

export default LegoLifeMagazinePage;

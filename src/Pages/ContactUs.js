import React from 'react';
import Header from '../components/Header/Header';
import { Link } from 'react-router-dom';
import './ContactUs.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import OurService from '../components/OurService/OurService';
import ContactUsHeader from '../components/ContactUsHeader/ContactUsHeader';

const ContactUs = () => {
	return (
		<div id='contactUs'>
			<Header />

			<ContactUsHeader />

			<div className='row m-0 w-100 alerts'>
				<section className='section row justify-content-center col-12'>
					<div className='row align-items-center' id='section1'>
						<div className='col-1 iWrapper' id='iWrapper1'>
							<i class='fas fa-exclamation-circle'></i>
						</div>
						<div className='col-11'>
							Due to increased levels of shipments going through the U.S. Postal
							Service, orders placed between Nov. 30 and Dec. 13 may arrive
							later than expected. USPS has ensured us they’re doing everything
							they can to deliver as many orders as possible, but are unable to
							guarantee delivery in time for Christmas.
						</div>
					</div>
				</section>

				<section className='section row justify-content-center col-12'>
					<div className='row align-items-center' id='section2'>
						<div className='col-1 iWrapper' id='iWrapper2'>
							<i class='fas fa-exclamation-triangle'></i>
						</div>
						<div className='col-11'>
							Our offices will be closed on December 24 and December 25. We’ll
							be back in the office Saturday and look forward to helping you
							then.
						</div>
					</div>
				</section>
			</div>

			<OurService />

			<div className='row m-0 w-100 hero align-items-center dark'>
				<div className='col-lg-8 px-0 order-lg-2'>
					<img src='/ADULT_Brick_Separator_Black_01.jpg' alt='' />
				</div>

				<div className='col-lg-4 order-lg-1 '>
					<section className='content-item__secondary my-auto'>
						<div className='content-item__secondary-inner py-5 pl-1 pr-5'>
							<h3 className='cta__title'>Brick Separator</h3>
							<p className='cta__txt pl-1 pr-3 py-2'>
								Find out how to use our newest brick separator to break down
								your creations!
							</p>
							<Link to='/brickseparator'>
								<div className='cta__btn-wrapper'>
									<div className='cta__btn'>Find Out More</div>
								</div>
							</Link>
						</div>
					</section>
				</div>
			</div>

			<div className='row p-0 m-0 w-100 hero'>
				<div className='col-lg-8 p-0  order-lg-1'>
					<img src='/useful-links_device-guide.jpg' alt='' />
				</div>

				<div className='col-lg-4 my-auto order-lg-2'>
					<section className='content-item__secondary'>
						<div className='content-item__secondary-inner p-5 dark bg-light'>
							<h3 className='cta__title'>Device Guide</h3>
							<p className='cta__txt'>
								Find out what apps are available for your phone, tablet or
								console using these helpful guides.
							</p>
							<Link to='/deviceguide'>
								<div className='cta__btn-wrapper'>
									<div className='cta__btn'>Find Out More</div>
								</div>
							</Link>
						</div>
					</section>
				</div>
			</div>

			{/*

				<div className='col-lg-4 my-auto order-lg-2'>
					<section className='content-item__secondary'>
						<div className='content-item__secondary-inner p-5 d-flex align-items-end'>
							<h3 className='cta__title'>Device Guide</h3>
							<p className='cta__txt text-right'>
								Find out what apps are available for your phone, tablet or
								console using these helpful guides.
							</p>
							<Link to='/deviceguide'>
								<div className='cta__btn-wrapper'>
									<div className='cta__btn'>Find Out More</div>
								</div>
							</Link>
						</div>
					</section>
				</div>
			</div>
			*/}

			<section id='c-hero'>
				<div className='c-hero__img-wrapper '>
					<img src='/help-topics-section.jpg' alt='' className='c-hero__img' />
					<div className='c-hero__content-wrapper'>
						<div className='c-hero__content'>
							<div className='c-hero__text'>
								Find answers to frequently asked questions
							</div>
							<div className='cta__btn-wrapper'>
								<Link to='/help'>
									<div className='cta__btn border-0 '>Help Topics</div>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className='headerStyle p-5' id='KeepDataSafe'>
				<div className='FAQWrapper'>
					<h3 class='cta__title'>How we keep your data safe</h3>
					<p class='cta__txt'>
						Since the LEGO Group began in 1932, our motto has been “Only the
						best is good enough”. We take inspiration from those words in
						everything we do and especially in how we protect your information.
					</p>
					<Link to='/keepdatasafe'>
						<div className='cta__btn-wrapper'>
							<div className='cta__btn border-0'>
								Read more <img src='/right-arrow.svg' alt='' width='30px' />
							</div>
						</div>
					</Link>
				</div>
			</section>
		</div>
	);
};

export default ContactUs;

/*

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
                            </div>
                            </section>
                        </div>
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

                                </div>
                            </section>
                        </div>
                    </div>

*/

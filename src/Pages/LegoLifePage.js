import React from 'react';
// import cera from "../fonts/Cera Pro Black Italic.ttf";
import './LegoLifePage.css';
import Header from '../components/Header/Header';
import { Link } from 'react-router-dom';

class LegoLifePage extends React.Component {
	render() {
		return (
			<>
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
							<img
								src='/seo-page_magazine-slider-mainstage-3840x1024_revised.jfif'
								alt=''
							/>
						</div>
					</section>

					<section className='content-item__secondary'>
						<div className='content-item__secondary-inner'>
							<h3 className='cta__title'>LEGO® Life Magazine</h3>
							<p className='cta__txt'>
								The free LEGO® Life Magazine is for kids 5 to 9 years old. It’s
								packed with comics, activities, posters and lots of other
								engaging content, all delivered right to your home 4 times a
								year!
							</p>
							<Link to='/legolifemagazine'>
								<div className='cta__btn-wrapper'>
									<div className='cta__btn'>Find out more</div>
								</div>
							</Link>
						</div>
					</section>
				</article>

				<div className='text-quote'>
					<div className='grid-column'>
						<div className='grid-content'>
							<div className='content-item'>
								<section className='content-item__secondary'>
									<p className='cta__txt'>
										LEGO® Life’s mission is to build the largest creative,
										kid-safe community in the world. A place where children get
										inspired, have fun and are empowered to express themselves
										and their creativity.
									</p>
								</section>
							</div>
						</div>
					</div>
				</div>

				<div className='row p-0 m-0 w-100 hero'>
					<div className='col-lg-8 px-0'>
						<img src='/app-hero-block.jfif' alt='' />
					</div>
					<div className='col-lg-4 my-auto'>
						<section className='content-item__secondary'>
							<div className='content-item__secondary-inner'>
								<h3 className='cta__title'>LEGO Life app</h3>
								<p className='cta__txt'>
									The free LEGO® Life app is a safe place for children to get
									inspired, share their creations, connect with other fans and
									much more!
								</p>
								<div className='cta__btn-wrapper'>
									<Link to='/legolifeapp'>
										<div className='cta__btn'>Find out more</div>
									</Link>
								</div>
							</div>
						</section>
					</div>
				</div>

				<section className='headerStyle p-5 FAQ'>
					<h3 class='cta__title'>Got questions?</h3>
					<p class='cta__txt'>
						Want to sign up? Can’t upload images? Visit our FAQ page for help on
						how to do these things – and more!​
					</p>
					<Link to='/legolifefaq'>
						<div className='cta__btn-wrapper'>
							<div className='cta__btn'>Find Answers</div>
						</div>
					</Link>
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
			</>
		);
	}
}

export default LegoLifePage;

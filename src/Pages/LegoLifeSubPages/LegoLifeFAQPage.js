import React from 'react';
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';
import './LegoLifeFAQPage.css';
import LegoFAQMagazineAccordion from '../../components/LegoFAQAccordion/LegoFAQMagazineAccordion';
import LegoFAQAppAccordion from '../../components/LegoFAQAccordion/LegoFAQAppAccordion';

class LegoLifeFAQPage extends React.Component {
	state = {
		whichAccordion: 'magAccordion',
	};

	appFun = () => {
		console.log('appBtn clicked');
		const magazineBtn = document.getElementById('magazineBtn');
		const appBtn = document.getElementById('appBtn');

		appBtn.classList.add('active');
		magazineBtn.classList.remove('active');
		this.setState({ whichAccordion: 'appAccordion' });
	};

	magFun = () => {
		console.log('magazineBtn clicked');

		const magazineBtn = document.getElementById('magazineBtn');
		const appBtn = document.getElementById('appBtn');

		magazineBtn.classList.add('active');
		appBtn.classList.remove('active');
		this.setState({ whichAccordion: 'magAccordion' });
	};

	render() {
		return (
			<div id='FAQ'>
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
								<li className='activeLegoLife'>FAQ</li>
							</Link>
						</ul>
					</nav>
				</header>

				<article className='content-item__inner sect1'>
					<section className='content-item__primary'>
						<div className='content-item__primary-inner'>
							<img src='/legolife_faq_banner_01.jfif' alt='' />
						</div>
					</section>

					<section className='content-item__secondary m-0 hero'>
						<div className='content-item__secondary-inner'>
							<h3 className='cta__title'>Frequently asked questions</h3>
							<p className='cta__txt'>
								Have questions about the LEGO® Life app? You can find the
								answers here!
							</p>
						</div>
					</section>
				</article>

				<div className='text-quote'>
					<div className='grid-column'>
						<div className='grid-content'>
							<div className='content-item'>
								<section className='content-item__secondary2'>
									<p className='cta__txt3 mb-0'>
										<button
											id='magazineBtn'
											className='btn rounded-pill FAQBtn active'
											onClick={this.magFun}>
											Magazine
										</button>
										<button
											id='appBtn'
											className='btn rounded-pill FAQBtn'
											onClick={this.appFun}>
											App
										</button>
									</p>
								</section>
							</div>
						</div>
					</div>
				</div>

				{this.state.whichAccordion === 'magAccordion' ? (
					<LegoFAQMagazineAccordion />
				) : (
					<LegoFAQAppAccordion />
				)}
			</div>
		);
	}
}

export default LegoLifeFAQPage;

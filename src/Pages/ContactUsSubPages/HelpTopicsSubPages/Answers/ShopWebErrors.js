import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import BackButton from '../../../../components/BackButton/BackButton';
import Header from '../../../../components/Header/Header';
import HelpTopicsHeader from '../../../../components/HelpTopicsHeader/HelpTopicsHeader';
import OurService from '../../../../components/OurService/OurService';
import './Answers.css';

const ShopWebErrors = (props) => {
	return (
		<div id='Answers'>
			<Header />

			<HelpTopicsHeader />

			<div className='row p-0 m-0 w-100'>
				<div className='col-12'>
					<div className='row m-0'>
						<div className='col-12'>
						<BackButton data="Back to all Help Topics" />
							<h1 id='title'>LEGO® Shop web errors</h1>
						</div>
					</div>

					<div className='row m-0' id='main-content'>
						<div className='col-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 p-0'>
							<p className='answer'>
								We’re sorry if you’re having a problem with our website.
							</p>

							<p className='answer'>
								It usually helps if you delete your temporary internet files and
								cookies. This will clear your shopping bag, but will also solve
								most common web problems. You can quickly get to the right place
								to delete your cookies by pressing Ctrl+Shift+Delete if you’re
								using Windows or Shift+Command+Delete if you’re using a Mac.
								Once you’re there, check the box or boxes for 'Cookies' and
								'Temporary Internet Files' (or 'Cache') and then hit enter on
								your keyboard.
							</p>

							<p className='answer'>
								You can also try a different web browser or see if logging out
								of and back into your LEGO® Account helps to solve the problem.
							</p>

							<p className='answer'>
								If you’ve tried that and it didn’t work, we’re more than happy
								to help you out, just let us know that you’ve already tried
								clearing your cookies and cache when you{' '}
								<Link to='/service' className='link'>
									get in touch with us
								</Link>
								.
							</p>
						</div>
					</div>
				</div>
			</div>
			<OurService />
		</div>
	);
};

export default withRouter(ShopWebErrors);

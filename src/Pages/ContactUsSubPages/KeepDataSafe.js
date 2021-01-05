import React from 'react';
import { Link } from 'react-router-dom';
import ContactUsHeader from '../../components/ContactUsHeader/ContactUsHeader';
import Header from '../../components/Header/Header';
import './KeepDataSafe.css';

const KeepDataSafe = () => {
	return (
		<div id='KeepDataSafe'>
			<Header />

			<ContactUsHeader />

			<div className='row p-0 m-0 w-100'>
				<div className='col-12'>
					<div className='row m-0'>
						<div className='col-12'>
							<h1 id='title'>How we keep your data safe</h1>
						</div>
					</div>

					<div className='row m-0' id='main-content'>
						<div className='col-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 p-0'>
							<p className='answer'>
								Since the LEGO Group began in 1932, our motto has been “Only the
								best is good enough”. We take inspiration from those words in
								everything we do and especially in how we protect your
								information.
							</p>
							<p className='answer'>
								When you contact LEGO Customer Services, we may collect, use,
								store and share the following data about you:
							</p>
							<p className='answer'>
								<ul className='ul'>
									<li>
										Your name, delivery address, billing address and contact
										details including your phone number and email address.
									</li>
									<li>
										If you have a LEGO ID, we will register your LEGO ID with
										the order and your order history.
									</li>
									<li>
										If you are a LEGO VIP member, we will register your LEGO VIP
										card number with the order and, if relevant, register points
										you’ve earned or rewards you’ve redeemed.
									</li>
									<li>
										If you are a LEGO Life member, we will register your LEGO
										Life membership number.
									</li>
									<li>
										If we’re helping you with a LEGO Shop order, we may process
										your payment details and we share those with your chosen
										payment provider and our payment processing partner. The
										personal information you give to some payment providers
										including PayPal, may overwrite the invoicing details we
										have on record for you.
									</li>
								</ul>
							</p>
							<p className='answer'>
								If you’ve given us your consent, we may also collect additional
								data about you (e.g. if you’ve consented to cookies or have
								signed up for LEGO VIP, LEGO ID or our newsletters).
							</p>
							<p className='answer'>
								We always use, store and share your personal information in
								accordance with our{'  '}
								<Link to='/privacypolicy' className='link'>
									Privacy Policy.
								</Link>
								If we’re helping you with a LEGO Shop order, we may use and
								share the personal information you give to us, so we can:
							</p>
							<p className='answer'>
								<ul className='ul'>
									<li>
										Fulfill and manage your order by sharing your personal
										information with trusted third parties who provide
										warehousing, packing, shipping, delivery, fraud detection,
										fraud prevention and debt collection services.
									</li>
									<li>
										Change your LEGO VIP points balance if it needs to be
										updated.
									</li>
									<li>
										Store your personal information with our trusted cloud
										storage partners.
									</li>
									<li>
										Send you product catalogues in the post by sharing your
										personal information with trusted third-party mailing and
										postal services.
									</li>
								</ul>
							</p>
							<p className='answer'>
								So we can protect our customers, we work with a partner service
								which uses automated decision-making processes to detect and
								prevent fraud. If your order’s affected, we’ll let you know and
								if you’re unhappy with any automated decisions, you can ask us
								to carry out a review.
							</p>
							<p className='answer'>
								If you’d like to find out more about how our whole company
								protects your data, please take a look at our full{' '}
								<Link to='/privacypolicy' className='link'>
									Privacy Policy.
								</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default KeepDataSafe;

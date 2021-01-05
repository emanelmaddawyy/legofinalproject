import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import PrivacyPolicyCookiesHeader from '../components/PrivacyPolicyHeader/PrivacyPolicyCookiesHeader';
import './PrivacyPolicy.css';

const PrivacyPolicyCookies = () => {
	return (
		<div id='PrivacyPolicy'>
			<Header />

			<PrivacyPolicyCookiesHeader />

			<div className='row p-0 m-0 w-100'>
				<div className='col-12'>
					<div className='row m-0'>
						<div className='col-12'>
							<h1 id='title'>LEGO® Cookie Policy</h1>
						</div>
					</div>

					<div className='row m-0' id='main-content'>
						<div className='col-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 p-0'>
							<h3 className='question'>
								We use cookies on our LEGO.com websites and our digital
								applications.
							</h3>
							<p className='answer'>
								Cookies are small data files that your browser sets on your
								computer or device. A cookie itself does not contain or collect
								information. However, when it is read by a server via a web
								browser it can help a website deliver a more user-friendly
								service – for example, remembering previous purchases or account
								details.
							</p>
							<p className='answer'>
								Like most websites, our online channels and our applications
								(apps) collect some information (e.g. information on IP
								addresses, browsers, internet service providers, referring
								pages, exit pages, operating systems, date stamps, time stamps
								and clickstream data). This information won’t be linked to any
								other information we collect about you unless you have consented
								to it.
							</p>
							<p className='answer'>
								Both we and our third-party tracking partners use browser
								storage, app storage, cookies, pixels, beacons, scripts and tags
								to analyze trends, administer the site, track user movement
								through the site and collect demographic information about our
								overall user base. We may receive reports on these from our
								third-party tracking partners on an individual and aggregate
								basis and those partners may combine that information with other
								information they have collected from you.
							</p>

							<h3 className='question'>
								The cookies we use fall into three categories.
							</h3>
							<p className='answer'>
								Required Cookies: These cookies are required to enable core site
								functionality and are therefore always enabled. Includes
								remembering your selected country and language, tracking your
								movement on and usage of our site for statistical purposes,
								storing whether you are logged in or not and storing your
								shopping bag and wish list items. We won’t ask for your consent
								to place those cookies because we have a legitimate purpose for
								setting them, but you can find a list of the cookies in our
								third party cookie list (linked below).
							</p>

							<p className='answer'>
								Functional Cookies: These cookies are optional and allow us to
								track your experience on the site, to optimize your shopping
								experience, to invite you to provide feedback, and to allow you
								to interact with product reviews. We only ask for permission to
								place these types of cookies on sites that are intended for
								young people that are 16 years or older or adults. If we know
								that you are under the age of 16 those cookies are not
								appropriate for you and we will not ask to get your permission
								to place them.
							</p>
							<p className='answer'>
								Marketing Cookies: These cookies are used by advertising
								companies to serve ads that are relevant to your interests and
								to personalize marketing both within and beyond the
								shop.LEGO.com website. Those partners ( e.g. Facebook and
								Google) may combine that information with other information they
								have collected from you. We only ask for permission to place
								these types of cookies on sites that are intended for young
								people that are 16 year or older or adults. If we know that you
								are under the age of 16 those cookies are not appropriate for
								you and we will not ask to get your permission to place them.
							</p>

							<h3 className='question'>What about your privacy?</h3>
							<p className='answer'>
								We respect your privacy. Read how to manage and control what
								information we collect from you in our full Privacy Policy{' '}
								<Link to='/privacypolicy' className='link'>
									here
								</Link>
								.
							</p>

							<h3 className='question'>
								For how long are those cookies alive:
							</h3>
							<p className='answer'>
								To keep your choices, cookies are stored on your devise for up
								to 800 days since your last visit. Some cookies are set by third
								party media and advertising partners, as well as other service
								providers.
							</p>

							<h3 className='question'>What if I do not want cookies:</h3>
							<p className='answer'>
								Required cookies are essential for the website and you cannot
								opt out of them, but you can delete required cookies after use –
								see how below.
							</p>

							<h3 className='question'>How to get rid of your cookies:</h3>
							<p className='answer'>
								The cookies are placed on your device. This means that we cannot
								delete them for you. You must do that yourself in the way
								prescribed by your specific device. If you are on a website
								operated by LEGO System A/S, you can also avoid cookies being
								placed by adjusting the browser settings in your device. If you
								are using an app published by LEGO System A/S, please note that
								cookies set in an app work in a different way and you will have
								to control this via your device directly. Real browser cookies
								are set to expire. Similar types of technologies like local
								storage on your device do not have expiration built-in but must
								be deleted by you.
							</p>
						</div>
					</div>
				</div>
			</div>
      <Footer/>
		</div>
	);
};

export default PrivacyPolicyCookies;

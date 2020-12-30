import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import PrivacyPolicyHeader from '../components/PrivacyPolicyHeader/PrivacyPolicyHeader';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
	return (
		<div id='PrivacyPolicy'>
			<Header />

			<PrivacyPolicyHeader />

			<div className='row p-0 m-0 w-100'>
				<div className='col-12'>
					<div className='row m-0'>
						<div className='col-12'>
							<h1 id='title'>Privacy Policy</h1>
						</div>
					</div>

					<div className='row m-0' id='main-content'>
						<div className='col-12 col-sm-8 offset-sm-2 p-0'>
							<h3 className='question'>Our Privacy Policy</h3>
							<p className='answer'>
								Welcome to our privacy policy! It’s great that you’d like to
								know more about how we keep your information safe. This policy
								will give you information about how we look after your personal
								data when you visit our website (regardless of where you visit
								it from) or use our services or our applications (apps). The
								policy also tells you about your privacy rights and how the law
								protects you.
							</p>
							<p className='answer'>
								So, if you’re looking for more information on how we collect,
								store, use and share your personal data we collect, this is the
								place for you!
							</p>
							<p className='answer'>
								Now to start us off with, a couple of practical but highly
								important details for you to take note of!
							</p>
							<h3 className='question'>Who we are</h3>
							<p className='answer'>
								The LEGO Group is made up by several different legal entities
								spread around the world. Read more about the LEGO Group{' '}
								<Link to='/aboutus' className='link'>
									here
								</Link>
							</p>
							<p className='answer'>
								This privacy policy is issued on behalf of all the companies in
								the LEGO Group. All the companies in the LEGO Group has decided
								that the Danish company LEGO System A/S is our global data
								controller (the one responsible and in charge of the data). So,
								when we use “we”, “us” or “our” in this policy, we are actually
								talking about LEGO System A/S.
							</p>
							<h3 className='question'>How to contact us</h3>
							<p className='answer'>
								We have appointed a data protection officer (“DPO”) who is
								responsible for overseeing questions in relation to this privacy
								policy. If you have any questions about this policy, please
								contact our DPO at:
								<p>LEGO System A/S</p>
								<p>Aastvej 1,</p>
								<p>7190 Billund,</p>
								<p>Denmark</p>
								<p>Att: Data Protection Officer</p>
								<p>Or by email: privacy.officer@LEGO.com</p>
								<p>Telephone: +44 1 753 826 000</p>
							</p>
							<p className='answer'>
								Please include your name and if you know it, the relevant LEGO
								Group company. If you don’t have that information, it’s
								absolutely fine and we will then, treat your request as if it
								the question relates directly to LEGO System A/S.
							</p>
							<p className='answer'>
								Your rights as a someone we have personal data about (data
								subject)
							</p>
							<p className='answer'>
								You can make changes to your account information yourself by
								editing them from within your account settings. If you wish to
								unsubscribe from e.g. newsletters or marketing emails you will
								be able to do so via the link provided in those emails. If you
								wish to delete cookies placed, our cookie policy will help show
								you how to do that (more on that later in the Policy under
								Cookies).
							</p>
							<p className='answer'>
								At any point while we are in possession of or processing your
								personal data, you have the following rights:
								<ol className='ol'>
									<li>
										Right of access – you have the right to request a copy of
										the information that we hold about you.
									</li>
									<li>
										Right of rectification – you have a right to correct data
										that we hold about you that is inaccurate or incomplete.
									</li>
									<li>
										Right to be forgotten – in certain circumstances you can ask
										for the data we hold about you to be erased from our
										records. If we are legally obligated to keep the information
										or if it is impossible or unproportionate, we won’t delete
										it but we will only keep it for as long as it is needed and
										we have time limits on our data systems.
									</li>
									<li>
										Right to restriction of processing – where certain
										conditions apply to have a right to restrict the processing.
									</li>
									<li>
										Right of portability – you have the right to have the data
										we hold about you transferred to another organization.
									</li>
									<li>
										Right to object – you have the right to object to certain
										types of processing such as direct marketing.
									</li>
									<li>
										Right to object to automated processing, including profiling
										– you also have the right not to have a computer make
										decisions about you directly (this doesn’t include general
										marketing based on your age or gender).
									</li>
									<li>
										Right to judicial review – if we refuse your request under
										rights of access, we will provide you with a reason as to
										why. You have the right to complain.
									</li>
								</ol>
							</p>
							<p className='answer'>
								One thing to bear in mind before contacting us. Our sites and
								applications may contain links to other sites not owned or
								controlled by us. It could as an example be social media
								platforms/services. We are not responsible for the privacy
								practices of those sites, so if you have questions regarding
								such sites, you need to contact the site directly. We also
								really encourage you to be aware and read the privacy policies
								of other sites because they may very easily be collecting,
								storing, using and sharing your personal information.
							</p>
							<h3 className='question'>Complaints about our behavior</h3>
							<p className='answer'>
								You have the right to complain if you don’t feel the LEGO Group
								is living up to our responsibilities when it comes to your data.
							</p>
							<p className='answer'>
								We have a Global Data Protection Officer at the LEGO Group, who
								takes your complaint very serious. You can contact our Global
								Data Protection Officer on this email privacy.officer@lego.com.
								We will send you a confirmation within 5 days and do our very
								best to deal with the issue within 1 month. If the issue is
								difficult or requires a lot of work it may take longer, but we
								will keep you updated.
							</p>
							<p className='answer'>
								You always have the right to complain to the authorities as
								well, but because we take privacy matters very seriously, we
								would really appreciate it, if you would talk to us. The
								authority having the right to look at us, is the Danish Data
								Protection Agency. You can see further information on their
								webpage: https://www.datatilsynet.dk/.
							</p>
							<h3 className='question'>You can complain about:</h3>
							<p className='answer'>
								<ol className='ol'>
									<li>how your personal data has been processed;</li>
									<li>how your request for access to data has been handled;</li>
									<li>how your complaint has been handled;</li>
									<li>
										appeal against any decision made following a complaint.
									</li>
								</ol>
							</p>
							<h3 className='question'>Our rules for collecting data</h3>
							<p className='answer'>
								We take your privacy really seriously, so we’ll only ask for the
								information we need to have so we can give you great service.
							</p>
							<p className='answer'>
								Whenever we collect customer data, we make sure:
								<ul className='ul'>
									<li>We ask for permission to collect the data</li>
									<li>
										We only use the data for the agreed reason and for the time
										it’s needed
									</li>
									<li>
										We will as a minimum meet the local data protection laws in
										the country where we provide you with a service via our
										website or our applications.
									</li>
									<li>
										We keep data that we’re legally required to have on record
									</li>
									<li>
										We explain why we need the data and how we’ll use it (unless
										we have legitimate reason not to)
									</li>
									<li>
										We check and update privacy information on a regular basis
										(we might also cross-check the data against other database
										to make sure it’s correct)
									</li>
									<li>
										We don’t share data with anyone unless we have a legal or
										legitimate reason, or we have permission from you or if you
										are a child under 16 from your parents.
									</li>
								</ul>
							</p>
							<h3 className='question'>
								Collecting data in our online channels
							</h3>
							<p className='answer'>
								We collect your personal and anonymous information from you when
								you visit any of the sites on our LEGO.com domain or when you
								use one of our applications. When you visit our online channels,
								you’ll be able to check if we’re collecting data under terms and
								conditions of the site.
							</p>
							<p className='answer'>
								We also receive information via third party when you visit our
								page on social media sites or channels (e.g Facebook, Twitter,
								Youtube, Instagram, Wechat etc).
							</p>
							<h3 className='question'>
								Types of personal information we collect
							</h3>
							<p className='answer'>
								When you’re visiting any of these online channels, we may
								collect:
								<ul className='ul'>
									<li>
										Registration information that we use to help you set up an
										account (e.g. your name, country, gender, date of birth,
										email address, username and password).
									</li>
									<li>
										Payment or transactional information that we use when you
										buy products or use online services (e.g. postal address,
										phone number or credit card number).
									</li>
									<li>
										Location information or your IP Address that we use to give
										you relevant online content.
									</li>
									<li>Information you’ve shared publicly on our forums.</li>
									<li>
										Information you’ve sent to an individual or group using our
										messaging, chat or post services
									</li>
									<li>
										Information you provide when you use our own online channels
										or third-party channels (such as social networks) or if you
										link your LEGO registration account to a third-party
										platform.
									</li>
								</ul>
							</p>
							<h3 className='question'>Why we need to process personal data</h3>
							<p className='answer'>
								In legal terms, the way we ‘process data’ describes how we
								collect, store, use, share and delete the data we receive from
								customers. When you share your personal information with us on
								our online channels, we’ll process your data as described in
								this Privacy Policy.
							</p>
							<p className='answer'>
								As we’re a global company that sells toys directly to customers
								and offers many different experiences for our fans, we need to
								process personal customer data, so that:
								<ul className='ul'>
									<li>
										Customers can buy products from our online LEGO Shop and
										have them delivered where they want
									</li>
									<li>
										Customers are able register for any accounts and services
										they want to use
									</li>
									<li>
										Customers can use the online and offline LEGO experiences
										we’ve created for them
									</li>
									<li>Customers can share information on our public forums</li>
									<li>
										We can send customers any information they’ve asked us for
										or answer their questions
									</li>
									<li>
										We can ask customers to give us feedback on our services
										through questionnaires and surveys
									</li>
									<li>
										We can provide our customers with relevant marketing
										information about our products.
									</li>
								</ul>
							</p>
							<p className='answer'>
								Always keep in mind, that if you’re using a LEGO service through
								a third-party channel like social media or a LEGO app, your
								personal data may also be processed by that third-party
								according to their own privacy processes.
							</p>
							<p className='answer'>
								We may use automated decision making in processing your personal
								information for some services and products. An example is our
								fraud prevention and detection efforts on shop.LEGO.com. You can
								request a manual review of the accuracy of an automated decision
								if you are unhappy with it.
							</p>
							<h3 className='question'>How we process personal data</h3>
							<p className='answer'>
								When you visit our online channels or when you use third-party
								sites or platforms, we use technology such as cookies, flash
								cookies, pixels and web beacons to process your personal data.
							</p>
							<p className='answer'>
								Please visit our{' '}
								<Link to='/privacypolicycookies' className='link'>
									Cookie Policy
								</Link>{' '}
								for more information, including information about how to delete
								cookies places on your device and how to prevent them from being
								put there in the first place!
							</p>
							<p className='answer'>
								Be mindful that if you do enable a prevent cookies functionality
								on your device, some of our services and functionalities on the
								site will no longer work.
							</p>
							<p className='answer'>
								We also collect information from other trusted sources, so we
								can update or add to the personal information we’ve collected
								ourselves.
							</p>
							<h3 className='question'>
								Sharing information with trusted subsidiaries (other LEGO
								companies)
							</h3>
							<p className='answer'>
								Our subsidiaries (the other companies in the LEGO Group) may
								sometimes need to access your information to provide services to
								you on our behalf. Because the LEGO Group is passionate about
								your privacy, we have made a decision to implement the same
								privacy protection all over the world, so you can feel safe no
								matter which LEGO Group company is using your data. Legally,
								other LEGO Group companies will then be acting as ‘data
								processors’ and will be subject to data processing laws. They
								need your personal data so they can:
								<ul className='ul'>
									<li>Deliver products and services you’ve requested</li>
									<li>
										Get in touch with you about your account or transactions
									</li>
									<li>
										Send you information about our sites, applications and
										policies
									</li>
									<li>
										Send you any newsletters you’ve signed up for (you can
										unsubscribe at any time)
									</li>
									<li>
										Process information that the subsidiary is formally
										contracted to process on our behalf, e.g. carry out a
										purchase placed by you, manage your LEGO ID account activity
										or your VIP account data.
									</li>
									<li>
										Identify, review and stop any activities that could breach
										our policies or break the law
									</li>
								</ul>
							</p>
							<h3 className='question'>
								Sharing information on public forums and chat
							</h3>
							<p className='answer'>
								As our public forums and chat services can be read by everyone,
								any personal information you share on them can be seen publicly.
								If you’d like us to remove any of your personal information from
								public areas of the site, please email our{' '}
								<Link to='/service' className='link'>
									Customer Service
								</Link>
								. If we can’t remove your personal information for any reason,
								we’ll let you know why. If you’re under 16 years old, you’ll
								need the permission of a parent or guardian to use our public
								forums or chat features.
							</p>
							<h3 className='question'>Sharing your LEGO ID</h3>
							<p className='answer'>
								You can use your LEGO ID on our trusted partners’ third-party
								websites, so you can play virtual games without creating a
								separate account. If you choose to use your LEGO ID, we’ll have
								access to some information that you provide to the third-party
								websites. We’ll collect, store, use and process that information
								according to this Privacy Policy. Third-party sites will also be
								able to access some information from your LEGO ID profile, so
								you can to take part in experiences on their site. Please read
								their privacy policy if you’d like to know more about how they
								use your information.
							</p>
							<h3 className='question'>
								Sharing information on Social Media (Features) and Widgets
							</h3>
							<p className='answer'>
								Some of our websites may include social media links such as the
								Facebook ‘like’ button, widgets like ‘Share this button’ and
								interactive mini-programs. If you click on any of these links,
								the features may collect your IP Address and record which page
								you were visiting at the time. The features may also use cookies
								so that the feature can function properly. Social media features
								and widgets are hosted by third parties or may be hosted
								directly on our website. When you’re using these features and
								widgets, your personal data will be processed by that
								third-party according to their own privacy policies.
							</p>
							<h3 className='question'>
								How long do we keep your personal information
							</h3>
							<p className='answer'>
								We’ll keep your personal information as long as your account is
								active or as long as it’s needed to provide a service. We have
								so called retention polices for each of the categories of
								personal information that we process.
							</p>
							<p className='answer'>
								If you’d like to cancel your account or for us to delete your
								data, we’ll only keep information that we need for legal
								reasons, to resolve disputes or to enforce our agreements.
							</p>
							<h3 className='question'>Our Cookie Policy</h3>
							<p className='answer'>
								Cookies are small data files that your browser places on your
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
								other information we collect about you unless you have given
								your consent that we may do this.
							</p>
							<p className='answer'>
								Both we and our third-party tracking utility partners use
								browser storage, app storage, cookies, pixls, beacons, scripts
								and tags to analyze trends, administer the site, track user
								movement through the site and collect demographic information
								about our overall user base. We may receive reports on these
								from our third-party tracking utility partners on an individual
								and aggregate basis. For more information about cookies, please
								read our full{' '}
								<Link to='/privacypolicycookies' className='link'>
									Cookie Policy
								</Link>
								.
							</p>
							<h3 className='question'>Keeping children safe online</h3>
							<p className='answer'>
								We care deeply about making sure children are safe online and
								have extra privacy processes in place to make sure we’re keeping
								our younger fans safe when they’re using our online channels. In
								fact, some features have age gates so to prevent children from
								inadvertently using such features. We also take all reasonable
								care to secure that we don’t knowingly collect, store, use or
								process personal information from children who may use those
								features without proper parental consent.
							</p>
							<p className='answer'>
								We’ve joined a digital child safety program which audits our
								company on a yearly basis to make sure we follow the rules in
								the way interact with children online.
							</p>
							<p className='answer'>
								We also follow all relevant laws for children aged between 13
								and 18 and when it comes to personal data, we consider anyone
								under the age of 16 years a child
							</p>
							<p className='answer'>
								If you have any questions or concerns about our Privacy Policy,
								please contact our Data Protection Officer at
								privacy.officer@lego.com.
							</p>
							<p className='answer'>
								If you have an unresolved privacy or data use concern that we
								have not addressed satisfactorily, please contact our U.S.-based
								third party dispute resolution provider (free of charge) at
								https://feedback-form.truste.com/watchdog/request. To view a
								list of properties covered by our Dispute Resolution provider,
								please click the seal located at the top of this section.
							</p>
							<h3 className='question'>
								What if we accidentally collect children’s data?
							</h3>
							<p className='answer'>
								If we discover that we’ve unintentionally collected information
								from a child in a way that doesn’t meet COPPA requirements, we
								will delete the information immediately.
							</p>
							<h3 className='question'>Requesting parental consent</h3>
							<p className='answer'>
								If we need to collect a child’s personal information, we’ll ask
								for parental consent according to COPPA legal requirements.
								We’ll send the child’s parent or guardian an email explaining
								what information we’re collecting, how we plan to use it and ask
								the parent to give or deny their consent. If we don’t receive
								parental consent in a reasonable time, we’ll delete all
								information we’ve collected from the child including the adult’s
								contact information that we asked for in order to request
								consent.
							</p>
							<h3 className='question'>Our employees</h3>
							<p className='answer'>
								Whether you’re an existing employee or applying for a job with
								us, we’ll process specific information relevant for your
								employment and application. The principles in this Privacy
								Policy will also apply to your employment and application.
							</p>
							<h3 className='question'>LEGO Partners</h3>
							<p className='answer'>
								We define LEGO Partners as other companies doing business with
								the LEGO Group. We process information on our LEGO Partner
								companies for collaboration and evaluation purposes.
							</p>
							<h3 className='question'>Data security and integrity</h3>
							<p className='answer'>
								The security, integrity and confidentiality of customer
								information is extremely important to us. We use technical,
								administrative and physical security measures to protect
								personal information from unauthorized access, disclosure, use
								and modification. All external transfers that contain personal
								information are done using encrypted technology. Credit card
								information is handled by approved service providers that meet
								PCI (Payment Card Industry) standards and have appropriate
								safeguards in place.
							</p>
							<p className='answer'>
								Although we regularly review our security procedures and
								evaluate new technology and methods to make our online channels
								safer, no security measures are perfect or impenetrable.
							</p>
							<p className='answer'>
								Our customers, employees and partners also play an important
								role in protecting information. We encourage customers to choose
								passwords that are difficult for others to guess and to keep
								their personal passwords secret.
							</p>
							<p className='answer'>
								Should you notice any flaws or concerns in our security, please
								contact our LEGO Customer Service team as soon as possible.
							</p>
							<p className='answer'>
								If we ever experience a data breach in which customer
								information is at risk of being misused, we’ll contact customers
								according to legal requirements. If necessary, we’ll also
								contact data protection authorities.
							</p>
							<h3 className='question'>
								Data transfers, storage and processing globally
							</h3>
							<p className='answer'>
								As we’re a global company, we may transfer your personal
								information to individual subsidiaries of the LEGO Group or
								third parties in locations around the world for the purposes
								described in this Privacy Policy. Whenever your personal
								information is transferred, stored or processed by us or by
								companies carrying out such services on our behalf, we’ll take
								reasonable steps to safeguard the privacy of your personal
								information. Additionally, when using or disclosing personal
								information we abide by our Binding Corporate Rules, when these
								become effective.
							</p>
							<p className='answer'>
								The Binding Corporate Rules provide the highest security to you
								when it comes to how your information is processed.
							</p>
							<h3 className='question'>
								Binding Corporate Rules and local legal requirements
							</h3>
							<p className='answer'>
								We want to make sure we as a minimum use the standards of data
								privacy and security that follows from the European General Data
								Protection Regulation (“GDPR”) anywhere in the world where we
								collect, store, use or share your personal data. Where your
								local rules require more from us than that, we will adjust our
								practice to make sure your data is safe with us no matter where
								in the world you are! To bind us to that promise we have
								implemented something called with Binding Corporate Rules with
								effect from June/2016 ‘Binding Corporate Rules. These rules are
								set by European data authorities across the European Union (EU)
								and set the some of the highest standards in the world on data
								collection, storage, use and sharing.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PrivacyPolicy;

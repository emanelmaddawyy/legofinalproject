import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import './LegoFAQAccordion.css';

const LegoFAQAppAccordion = () => {
	useEffect(() => {
		const items4 = document.querySelectorAll('#accordionOpenCloseBtn');
		// console.log('items',items);
		function myToggleFun() {
			// debugger;
			const itemToggle4 = this.getAttribute('aria-expanded');
			console.log(itemToggle4);

			// for (let i = 0; i < items.length; i++) {
			// 	items[i].setAttribute('aria-expanded', 'false');
			// }

			if (itemToggle4 === 'false') {
				this.setAttribute('aria-expanded', 'true');
			} else {
				this.setAttribute('aria-expanded', 'false');
			}
		}
		items4.forEach((item) => item.addEventListener('click', myToggleFun));
	});

	return (
		<>
			<div id='accordion3'>
				<div class='accordion-item'>
					<button aria-expanded='false' id='accordionOpenCloseBtn'>
						<span class='accordion-title'>
							How do I sign up to the LEGO® Life app?
						</span>
						<span class='icon' aria-hidden='true'></span>
					</button>
					<div class='accordion-content row specifications'>
						<div className='col-12 col-md-10 order-md-first p-4 '>
							<p className='specificationsParagraph'>
								In the welcome screen in the app, select “Start”. You then need
								to choose your unique LEGO® Nickname. The Nickname Generator
								allows you to select the name that others will see in the app
								and creates randomized options for you to choose from. It will
								appear on your child’s profile, photos and comments. Once the
								nick name is selected, your child can:
							</p>
							<ul className='specificationsUl mb-3'>
								<li>like something</li>
								<li>follow a group</li>
								<li>create their own avatar</li>
								<li>add products to their digital collection.</li>
							</ul>
							<p className='specificationsParagraph'>
								If your child wants to do more in the app like sharing
								creations, commenting etc., they need a parent to help them
								create a LEGO Account that they can sign in with.
							</p>
							<p className='specificationsParagraph'>
								To do that, just tap on the minifigure head and then the
								settings icon in the top right-hand corner of the screen and
								click on the button “Sign up”.
							</p>
						</div>
					</div>
				</div>

				<div class='accordion-item'>
					<button aria-expanded='false' id='accordionOpenCloseBtn'>
						<span class='accordion-title'>
							What can I do without signing in?
						</span>
						<span class='icon' aria-hidden='true'></span>
					</button>
					<div class='accordion-content row specifications'>
						<div className='col-12 col-md-10 order-md-first p-4 '>
							<p className='specificationsParagraph'>
								Your child can still see the content in the app BUT can’t upload
								creations, comment, receive personalized content suggestions,
								save favorite pictures, videos or challenges. Logging in with a
								LEGO Account allows your child to use all of these great
								features! <br />
								<br />
								To sign in, just tap on the minifigure head and then the
								settings icon in the top right-hand corner of the screen.
							</p>
						</div>
					</div>
				</div>

				<div class='accordion-item'>
					<button aria-expanded='false' id='accordionOpenCloseBtn'>
						<span class='accordion-title'>What’s Parental Consent?</span>
						<span class='icon' aria-hidden='true'></span>
					</button>
					<div class='accordion-content row specifications'>
						<div className='col-12 col-md-10 order-md-first p-4 '>
							<p className='specificationsParagraph'>
								As a parent or legal guardian, you can decide which online
								activities, such as commenting and sharing images, you want your
								child to access in the online LEGO® experiences including the
								LEGO Life app.
							</p>
						</div>
					</div>
				</div>

				<div class='accordion-item'>
					<button aria-expanded='false' id='accordionOpenCloseBtn'>
						<span class='accordion-title'>Do I have to verify myself?</span>
						<span class='icon' aria-hidden='true'></span>
					</button>
					<div class='accordion-content row specifications'>
						<div className='col-12 col-md-10 order-md-first p-4 '>
							<p className='specificationsParagraph'>
								If you’d prefer not to verify your identity, your child can
								still enjoy the LEGO® Life app, but some features won’t be
								available.
							</p>
						</div>
					</div>
				</div>

				<div class='accordion-item'>
					<button aria-expanded='false' id='accordionOpenCloseBtn'>
						<span class='accordion-title'>
							I’m verified. What does this mean?
						</span>
						<span class='icon' aria-hidden='true'></span>
					</button>
					<div class='accordion-content row specifications'>
						<div className='col-12 col-md-10 order-md-first p-4 '>
							<p className='specificationsParagraph'>
								Amazing! Thanks for helping us keep our experiences safe for
								children. Your child can now upload their creations, comment on
								other children’s creations, enter competitions, join building
								challenges and more. However, this is only if you choose to let
								them!
							</p>
						</div>
					</div>
				</div>

				<div class='accordion-item'>
					<button aria-expanded='false' id='accordionOpenCloseBtn'>
						<span class='accordion-title'>
							What can I use for verification?
						</span>
						<span class='icon' aria-hidden='true'></span>
					</button>
					<div class='accordion-content row specifications'>
						<div className='col-12 col-md-10 order-md-first p-4 '>
							<p className='specificationsParagraph'>
								It is possible to verify by Visa, Mastercard, Diners Club,
								Discover and JCB credit card as well as all debit cards.
							</p>
						</div>
					</div>
				</div>

				<div class='accordion-item'>
					<button aria-expanded='false' id='accordionOpenCloseBtn'>
						<span class='accordion-title'>Why does the LEGO Group need my credit/debit card details for verification?</span>
						<span class='icon' aria-hidden='true'></span>
					</button>
					<div class='accordion-content row specifications'>
						<div className='col-12 col-md-10 order-md-first p-4 '>
							<p className='specificationsParagraph'>The LEGO Group adheres to the COPPA and GDPR regulations to protect children online. Under these laws, credit/debit card verification is one of the recognized ways to confirm that a child’s parent is indeed a grown-up.</p>
						</div>
					</div>
				</div>

				<div class='accordion-item'>
					<button aria-expanded='false' id='accordionOpenCloseBtn'>
						<span class='accordion-title'>In which countries is the LEGO® Life app available?</span>
						<span class='icon' aria-hidden='true'></span>
					</button>
					<div class='accordion-content row specifications'>
						<div className='col-12 col-md-10 order-md-first p-4 '>
							<p className='specificationsParagraph'>Algeria, Argentina, Australia, Austria, Azerbaijan, Belarus, Belgium, Bolivia, Botswana, Brazil, Canada, Chile, Colombia, Costa Rica, Czech Republic, Denmark, Ecuador, Egypt, Estonia, Finland, France, Germany, Greece, Hong Kong, Hungary, India, Indonesia, Iran, Ireland, Israel, Italy, Japan, Jordan, Kazakhstan, Kenya, Kuwait, Latvia, Lebanon, Lithuania, Macau, Malaysia, Mexico, Moldova, Morocco, Mozambique, Namibia, Netherlands, New Zealand, Nigeria, Norway, Oman, Panama, Paraguay, Peru, Philippines, Poland, Portugal, Qatar, Romania, Russia, Saudi Arabia, Singapore, Slovakia, South Africa, South Korea, Spain, Sweden, Switzerland, Taiwan, Tunisia, Turkey, UAE, Ukraine, United Kingdom, United States, Uruguay, Uzbekistan, Zimbabwe.</p>
						</div>
					</div>
				</div>

				<div class='accordion-item'>
					<button aria-expanded='false' id='accordionOpenCloseBtn'>
						<span class='accordion-title'>What are the minimum technical requirements for the app?</span>
						<span class='icon' aria-hidden='true'></span>
					</button>
					<div class='accordion-content row specifications'>
						<div className='col-12 col-md-10 order-md-first p-4 '>
							<p className='specificationsParagraph'><em>Min. requirements – ANDROID</em></p>
							<ul className='specificationsUl'>
                                <li><em>Android version 5.0 or higher (API Level: 21 aka <em>Lollipop</em>)</em></li>
                                <li><em>1024 MB of RAM </em></li>
                                <li><em>Touchscreen </em></li>
                                <li><em>Device Camera</em></li>
                                <li><em>Normal screen, HDPI or higher (minimum 480x800, 240dpi)</em></li>
                                <li><em>Open GL ES 2.0 Support</em></li>
							</ul>
						</div>
						{/* <Link to='/'>
                            <button className='btn btn-primary order-last ml-4 specificationsBtn'>
                                Building Instructions
                            </button>
                        </Link> */}
					</div>
				</div>

				<div class='accordion-item'>
					<button aria-expanded='false' id='accordionOpenCloseBtn'>
						<span class='accordion-title'>Which codes can I scan?</span>
						<span class='icon' aria-hidden='true'></span>
					</button>
					<div class='accordion-content row specifications'>
						<div className='col-12 col-md-10 order-md-first p-4 '>
                        <p className='specificationsParagraph'>Most of the new LEGO® sets have a LEGO QR code on the front cover of the building instructions.</p>
                        <p className='specificationsParagraph'>You can only scan official LEGO QR codes from the cover of the building instructions, and not other QR codes. You cannot scan other QR codes or bar codes that appear on a LEGO box or on set bags.</p>
						</div>
					</div>
				</div>

				<div class='accordion-item'>
					<button aria-expanded='false' id='accordionOpenCloseBtn'>
						<span class='accordion-title'>I have a new box with a LEGO® QR code, but it says that the code is not valid?!</span>
						<span class='icon' aria-hidden='true'></span>
					</button>
					<div class='accordion-content row specifications'>
						<div className='col-12 col-md-10 order-md-first p-4 '>
							<p className='specificationsParagraph'>Poor lighting conditions can make the code scanning fail even though you may have a valid code. Please try scanning again in better lighting conditions.</p>
							<p className='specificationsParagraph'>You can also find the set by searching for the set number in the search function. If problems persist, please contact <Link to="/service">Customer Service.</Link> </p>
						</div>
					</div>
				</div>

				<div class='accordion-item'>
					<button aria-expanded='false' id='accordionOpenCloseBtn'>
						<span class='accordion-title'>
							Which phone or tablet do I need for the AR Photo Shoot?
						</span>
						<span class='icon' aria-hidden='true'></span>
					</button>
					<div class='accordion-content row specifications'>
						<div className='col-12 col-md-10 order-md-first p-4 '>
							<p className='specificationsParagraph'>
								You need to make sure you have a recent Android phone or an
								iPhone from 2017 and up. Android phones need to support Android
								version 8.1. and above and iPhones need to support iOS version
								11 and above.
							</p>
						</div>
						{/* <Link to='/'>
                            <button className='btn btn-primary order-last ml-4 specificationsBtn'>
                                Building Instructions
                            </button>
                        </Link> */}
					</div>
				</div>

				<div class='accordion-item'>
					<button aria-expanded='false' id='accordionOpenCloseBtn'>
						<span class='accordion-title'>
							Does the AR Photo Shoot require a LEGO set?
						</span>
						<span class='icon' aria-hidden='true'></span>
					</button>
					<div class='accordion-content row specifications'>
						<div className='col-12 col-md-10 order-md-first p-4 '>
							<p className='specificationsParagraph'>
								No, AR Photo Shoot does not require any LEGO sets or bricks. All
								your child needs is their avatar, a well-lit space or open area
								and their imagination.​
							</p>
						</div>
						{/* <Link to='/'>
                            <button className='btn btn-primary order-last ml-4 specificationsBtn'>
                                Building Instructions
                            </button>
                        </Link> */}
					</div>
				</div>

				<div class='accordion-item'>
					<button aria-expanded='false' id='accordionOpenCloseBtn'>
						<span class='accordion-title'>
							I'm worried about my children accidentally sharing a picture of
							themselves.
						</span>
						<span class='icon' aria-hidden='true'></span>
					</button>
					<div class='accordion-content row specifications'>
						<div className='col-12 col-md-10 order-md-first p-4 '>
							<p className='specificationsParagraph'>
								No need to worry! We have a team of highly trained moderators
								who look through every single image sent to LEGO Life before it
								goes live. If your child accidentally share a picture of
								themselves, our moderators will spot it and prevent it from
								going live. Instead, they will send a message back and ask your
								child to submit a new image without showing their face. ​
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default LegoFAQAppAccordion;

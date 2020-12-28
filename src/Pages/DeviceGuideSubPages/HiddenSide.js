import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import DeviceGuideHeader from '../../components/DeviceGuideHeader/DeviceGuideHeader';
import Header from '../../components/Header/Header';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './DeviceGuideSubPages.css';

const HiddenSide = (props) => {
	useEffect(() => {
		const items5 = document.querySelectorAll('#accordionOpenCloseBtn');
		// console.log('items',items);
		function myToggleFun() {
			// debugger;
			const itemToggle5 = this.getAttribute('aria-expanded');
			console.log(itemToggle5);

			for (let i = 0; i < items5.length; i++) {
				items5[i].setAttribute('aria-expanded', 'false');
			}

			if (itemToggle5 === 'false') {
				this.setAttribute('aria-expanded', 'true');
			}
		}
		items5.forEach((item) => item.addEventListener('click', myToggleFun));
	});

	return (
		<div id='DeviceGuideSubStyle'>
			<Header />

			<DeviceGuideHeader />

			<header className='row p-0 m-0 w-100'>
				<div className='col-12 title'>Device Guide</div>
			</header>

			<div className='row p-0 m-0 w-100'>
				<div className='col-12 p-0'>
					<div className='row m-0'>
						<div className='col-12'>
							<button
								className='btn d-flex align-items-center'
								id='backBtn'
								onClick={props.history.goBack}>
								<img src='/left-arrow.svg' alt='' height='10px' />
								<div id='back-text'>Back to all Help Topics</div>
							</button>

							<h1 className='title'>Hidden Side™ App</h1>
						</div>
					</div>
					<div className='row m-0' id='main-content'>
						<div className='col-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 p-0'>
							<p className='answer'>
								The easiest way to find out whether your device works with the
								LEGO® Super Mario™ app experience is to find and download the
								app in the Apple App Store or the Google Play store. Devices
								that can download and install the app from official app stores
								will likely work with our products.
							</p>
							<p className='answer'>
								Because of the significant number of different models, variants,
								and manufacturing standards of available devices, we can only
								assure the compatibility of devices that are actively tested
								internally. If your device cannot find and download a particular
								LEGO app from an official app store, this means that your device
								does not support that product.
							</p>

							<div className='row m-0 p-0'>
								{/* IOS */}
								<div className='col-6'>
									<h3 className='question'>iOS compatibility</h3>
									<strong>
										To know which operating system your iOS device is running
										follow this quick guide:
									</strong>
									<p className='answer'>
										<ol className='ol'>
											<li>
												Open <strong>Settings</strong>
											</li>
											<li>
												Scroll down and tap <strong>General</strong> (Gear icon)
											</li>
											<li>
												Tap <strong>About</strong>
											</li>
											<li>
												The OS version of your device is shown next to{' '}
												<strong>Software version</strong> in the second row.
											</li>
										</ol>
									</p>

									<strong>Operating System</strong>
									<p className='answer'>
										<ul className='ul'>
											<li>iOS 11 and newer with ARKit 2 support</li>
										</ul>
									</p>
								</div>

								{/* Android */}
								<div className='col-6'>
									<h3 className='question'>Android compatibility</h3>
									<strong>
										To know Android device and operation system your device is
										running follow this quick guide:
									</strong>
									<p className='answer'>
										<ol className='ol'>
											<li>
												Swipe down from the top and tap the{' '}
												<strong>Gear icon</strong> (System Settings)
											</li>
											<li>
												Scroll towards the bottom and tap{' '}
												<strong>About Phone</strong> <br />
												Depending on your device you will either see Android
												Version defined here, or you may need to follow the next
												step to view it.
											</li>
											<li>
												Tap <strong>Software Info</strong>
											</li>
											<li>
												The OS version of your device is shown under{' '}
												<strong>Android Version</strong>
											</li>
										</ol>
									</p>
									<strong>Operating System</strong>
									<p className='answer'>
										<ul className='ul'>
											<li>Android 7.0 or newer with ARCore</li>
										</ul>
									</p>
								</div>
							</div>
							<h3 className='question text-center'>Compatible devices</h3>
							<p className='answer'>
								The following are the devices and their operating systems that
								the LEGO Group is using to validate the app experience. This
								list of validated devices may change at any time and without any
								notice. We will do what we can to keep this list as up to date
								as possible.
							</p>
						</div>

						<div className='col-12 p-0'>
							<div className='row m-0 '>
								<div id='DeviceGuideAccordion'>
									{/* ios */}
									<div class='accordion-item'>
										<button aria-expanded='false' id='accordionOpenCloseBtn'>
											<span class='accordion-title'>iOS devices</span>
											<span class='icon' aria-hidden='true'>
												<i class='fas fa-chevron-down'></i>
											</span>
										</button>
										<div class='accordion-content row specifications'>
											<div className='col-4 col-lg-3 cell bg-white'>
												iPhone XS
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												iPhone XS Max
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												iPhone XR
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												iPhone X
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												iPhone 8
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												iPhone 8 Plus
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												iPhone 7
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												iPhone 7 Plus
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												iPhone 6s
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												iPhone 6s Plus
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												iPhone SE
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												iPad Pro (all models)
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												iPad Air (3rd generation)
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												iPad (5th and 6th generation)
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												iPad mini (5th generation)
											</div>
											<p className='specificationsParagraph col-12'>
												Please note that any additional compatible device
												outside this list of tested devices may not provide an
												optimal experience.
											</p>
										</div>
									</div>

									{/* andriod */}
									<div class='accordion-item'>
										<button aria-expanded='false' id='accordionOpenCloseBtn'>
											<span class='accordion-title'>Android devices</span>{' '}
											<span class='icon' aria-hidden='true'>
												<i class='fas fa-chevron-down'></i>
											</span>
										</button>
										<div class='accordion-content row specifications'>
											<div className='col-4 col-lg-3 cell bg-white'>
												ASUS Rog Phone (8.1.0 Oreo)
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Google Pixel 1 (9.0 Pie)
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Google Pixel 2 XL (8.1.0 Oreo)
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Huawei Honor 10 (8.1.0 Oreo)
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Huawei Nexus 6P (8.1.0 Oreo)
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Huawei P30 Pro (9.0 Pie)
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Huawei Mate 20 Lite (8.1.0 Oreo)
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Huawei Mate 20 X (9.0 Pie)
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												LG Q6 (7.1.1 Nougat)
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Nokia 7 Plus (9.0 Pie)
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												OnePlus 5 (7.1.1 Nougat)
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Samsung Galaxy A5 2017 (7.0 Nougat)
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Samsung Galaxy A8 2018 (7.1.1 Nougat)
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Samsung Galaxy J7 2017 (7.1.1 Nougat)
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Samsung Galaxy Note 8 (7.1.1 Nougat)
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Samsung Galaxy Note 9 (8.1.0 Oreo)
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Samsung Galaxy S7 Edge (7.0 Nougat)
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Samsung Galaxy S8+ (7.0 Nougat)
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Samsung Galaxy S9 (8.0.0 Oreo)
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Samsung Galaxy S10+ (9.0 Pie)
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Sony Xperia XZ 3 (9.0 Pie)
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Samsung Galaxy Tab S3 (8.0.0 Oreo)
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Samsung Galaxy Tab S4 WiFi (8.1.0 Oreo)
											</div>
											<p className='specificationsParagraph col-12'>
												Please note that any additional compatible device
												outside this list of tested devices may not provide an
												optimal experience.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default withRouter(HiddenSide);

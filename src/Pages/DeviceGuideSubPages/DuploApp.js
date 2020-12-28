import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import DeviceGuideHeader from '../../components/DeviceGuideHeader/DeviceGuideHeader';
import Header from '../../components/Header/Header';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './DeviceGuideSubPages.css';

const DuploApp = (props) => {
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

							<h1 className='title'>LEGO® DUPLO® Connected Train app</h1>
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
									<strong>Hardware</strong>
									<p className='answer'>
										<ul className='ul'>
											<li>iPhone SE, iPad Air 2 and iPad Mini 4 or newer</li>
										</ul>
									</p>
									<strong>Operating System</strong>
									<p className='answer'>
										<ul className='ul'>
											<li>Requires iOS 10.3 and newer</li>
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
									<p>
										<strong>Hardware</strong>
									</p>
									<p className='answer'>
										<ul className='ul'>
											<li>
												Bluetooth low power technology (Bluetooth 4.1 or higher)
											</li>
											<li>1.5 GB ram</li>
											<li>Dual core processor 1.4 ghz</li>
											<li>Must have landscape multitouch screen</li>
										</ul>
									</p>
									<strong>Operating System</strong>
									<p className='answer'>
										<ul className='ul'>
											<li>Android 5.1 or above</li>
										</ul>
									</p>
								</div>

								{/* fire OS  */}
								<div className='col-6'>
									<h3 className='question'>Fire OS compatibility</h3>
									<strong>Follow these steps to locate your OS version:</strong>
									<p className='answer'>
										<ol className='ol'>
											<li>Swipe a finger down from the top of the tablet.</li>
											<li>
												Tap <strong>Settings</strong>
											</li>
											<li>
												Tap <strong>Device Options</strong>
											</li>
											<li>
												Tap <strong>System Updates</strong>
											</li>
											<li>
												Your OS version will be displayed toward the top of the
												screen.
											</li>
										</ol>
									</p>
									<strong>Operating System</strong>
									<p className='answer'>
										<ul className='ul'>
											<li>Fire OS 5 or 6</li>
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
												iPad Pro
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												iPad Air 2
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												iPad Air 3
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												iPad Air 4
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												iPad mini 2
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												iPad mini 3
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												iPad mini 4
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												iPad 4th generation
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												iPhone 6 / 6 Plus / 6s / 6s Plus
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												iPhone SE
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												iPhone 7 / 7 Plus
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												iPhone 8 / 8 Plus
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												iPhone X
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
												Acer Predator 8
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												ASUS (Google) Nexus 7
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Google Nexus 10
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Google Pixel
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Google Pixel2
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												HTC Nexus 9
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												HTC One (M8)
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												HTC One (M9)
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Huawei Mate 9 Pro
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Huawei Nexus 6p
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Huawei P8 Lite
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Lenovo Yoga Book
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Lenovo Yoga Tablet 2
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Lenovo Yoga Tablet 2 8”
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												LG Nexus 5
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												LG Nexus 5x
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Motorola Droid Turbo 2
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Nvidia SHIELD Tablet (LTE)
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Samsung Galaxy A5
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Samsung Galaxy J7
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Samsung Galaxy Note 3
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Samsung Galaxy Note 4
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Samsung Galaxy S4
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Samsung Galaxy S5
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Samsung Galaxy S5 Mini
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Samsung Galaxy S5 Neo
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Samsung Galaxy S6 Edge
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Samsung Galaxy S7 Edge
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Samsung Galaxy S8
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Samsung Galaxy Tab A 10.1
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Samsung Galaxy Tab A 7.0
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Samsung Galaxy Tab S2 Nook 8.0
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Sony Xperia Z2 Tablet (LTE)
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Sony Xperia Z3 Compact
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Sony Xperia Z3 Tablet Compact (LTE)
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Xiaomi Mi 5c
											</div>
											<p className='specificationsParagraph col-12'>
												Please note that any additional compatible device
												outside this list of tested devices may not provide an
												optimal experience.
											</p>
										</div>
									</div>

									{/* fire */}
									<div class='accordion-item'>
										<button aria-expanded='false' id='accordionOpenCloseBtn'>
											<span class='accordion-title'>Fire OS devices</span>
											<span class='icon' aria-hidden='true'>
												<i class='fas fa-chevron-down'></i>
											</span>
										</button>
										<div class='accordion-content row specifications'>
											<div className='col-4 col-lg-3 cell bg-white'>
												Amazon Kindle Fire HD 8 (5th generation, 2015)
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Amazon Kindle Fire HD 8 (6th generation, 2016)
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Amazon Kindle Fire HD 10 (7th generation, 2017)
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Amazon Kindle Fire HDX 8.9 (4th Generation+, 2014)
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

export default withRouter(DuploApp);

import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import DeviceGuideHeader from '../../components/DeviceGuideHeader/DeviceGuideHeader';
import Header from '../../components/Header/Header';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './DeviceGuideSubPages.css';
import BackButton from '../../components/BackButton/BackButton';

const ControlPlus = (props) => {
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
						<BackButton data="Back to all apps" />
							<h1 className='title'>LEGO® Technic™ Control+</h1>
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
											<li>Requires iOS 11 and newer</li>
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
											<li>5” display or larger</li>
											<li>Speaker</li>
										</ul>
									</p>
									<strong>Operating System</strong>
									<p className='answer'>
										<ul className='ul'>
											<li>Android 6 or above</li>
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
												iPad 2017
											</div>{' '}
											<div className='col-4 col-lg-3 cell bg-white'>
												iPad 2018
											</div>{' '}
											<div className='col-4 col-lg-3 cell bg-white'>
												iPad Pro
											</div>{' '}
											<div className='col-4 col-lg-3 cell bg-white'>
												iPhone 6+
											</div>{' '}
											<div className='col-4 col-lg-3 cell bg-white'>
												iPhone 7
											</div>{' '}
											<div className='col-4 col-lg-3 cell bg-white'>
												iPhone 8
											</div>{' '}
											<div className='col-4 col-lg-3 cell bg-white'>
												iPhone X
											</div>{' '}
											<div className='col-4 col-lg-3 cell bg-white'>
												iPhone XR
											</div>{' '}
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
												Asus Zen phone 3 max (6.0.1)
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Samsung Tab S3 (7.0)
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Honor 9 Lite (8.0.0)
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Google Pixel C (8.1)
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Google Pixel 3 (9.0)
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Motorola One (9.0)
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Pixel 2 (9.0)
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Oppo A5
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												vivo y81
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Sony Xperia R1
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Nokia 5.1
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Samsung Galaxy Note 9
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

export default withRouter(ControlPlus);

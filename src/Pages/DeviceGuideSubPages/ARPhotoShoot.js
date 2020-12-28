import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import DeviceGuideHeader from '../../components/DeviceGuideHeader/DeviceGuideHeader';
import Header from '../../components/Header/Header';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './DeviceGuideSubPages.css';

const ARPhotoShoot = (props) => {
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

							<h1 className='title'>LEGO® LIFE AR PHOTO SHOOT</h1>
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
												iPhone 6s
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												iPhone 6s Plus
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												iPhone 7
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												iPhone 7 Plus
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												iPhone SE
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												iPad Pro (9.7, 10.5 or 12.9) – 1st gen. + 2nd gen.
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												iPad (2017)
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												iPhone 8
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												iPhone 8 Plus
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
												Asus Zenfone AR
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Asus Zenfone ARES
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Google Nexus 5X
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Google Nexus 6P
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Google Pixel
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Google Pixel XL
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Google Pixel 2
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Google Pixel 2 XL
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Google Pixel 3
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Google Pixel 3 XL
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Nokia 6 (2018)
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Nokia 6.1 Plus
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Nokia 7 Plus
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Nokia 8
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Nokia 7.1
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Nokia 8 Sirocco
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Honor 8X
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Honor View 10 Lite
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Honor 10
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Honor V20
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>Nova 3</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Nova 3i
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Huawei Mate 20 Lite
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Huawei Mate 20 Pro
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Huawei Mate 20 X
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>Nova 4</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Huawei y9 (2019)
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Huawei P20
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Huawei P20 Pro
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Huawei Mate RS Porsche Design
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>LG G6</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												LG G7 One
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												LG G7 ThinQ
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>LG V30</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												LG V30+ JOJO
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												LG V35 ThinQ
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>LG Q6</div>
											<div className='col-4 col-lg-3 cell bg-white'>LG V40</div>
											<div className='col-4 col-lg-3 cell bg-white'>LG Q8</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Moto G5S Plus
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Moto G6
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Moto Z2 Force
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Moto Z3
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Moto Z3 Play
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Moto Z2 Force
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Moto X4
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Moto One
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Moto One Power
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												OnePlus 3T
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												OnePlus 5
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												OnePlus 6
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												OnePlus 6T
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Samsung Galaxy A5 (2017)
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Samsung Galaxy A7 (2017)
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Samsung Galaxy A8
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Samsung Galaxy A8+ (2018)
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Samsung Galaxy Note 8
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Samsung Galaxy S7
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Samsung Galaxy S7 Edge
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Samsung Galaxy S8
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Samsung Galaxy S8+
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Samsung Galaxy S9
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Samsung Galaxy S9+
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Samsung Galaxy Tab S3
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Samsung Galaxy Tab S4
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Xiaomi Mi Mix 2S
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Xiaomi Mi 8
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Xiaomi Mi 8 SE
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Mi Mix 3
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Pocofone F1
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Vivo Nex S
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Vivo Nex Dual Display
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Sony Xperia XZ Premium
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Xperia XZ1
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Xperia XZ1 Compact
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Xperia XZ2
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Xperia XZ2 C
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

export default withRouter(ARPhotoShoot);

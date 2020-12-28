import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import DeviceGuideHeader from '../../components/DeviceGuideHeader/DeviceGuideHeader';
import Header from '../../components/Header/Header';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './DeviceGuideSubPages.css';

const MindStormRobot = (props) => {
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

							<h1 className='title'>LEGO® MINDSTORMS® Robot Inventor</h1>
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
											<li>Requires iOS 13 and newer</li>
										</ul>
									</p>
								</div>

								{/* mac  */}
								<div className='col-6'>
									<h3 className='question'>macOS compatibility</h3>
									<p className='answer'>
										<strong>
											From the Apple menu in the corner of your screen, choose
											About This Mac. You should see the macOS name, such as
											macOS Mojave, followed by its version number. If you need
											to know the build number as well, click the version number
											to see it.
										</strong>
									</p>
									<strong>Hardware</strong>
									<p className='answer'>
										<ul className='ul'>
											<li>
												1.5 GHz Intel® Core Duo processor - or equivalent or
												better
											</li>
											<li>4 GB RAM</li>
											<li>2 GB available storage space</li>
											<li>Bluetooth 4.0 or above</li>
										</ul>
									</p>
									<strong>Operating System</strong>
									<p className='answer'>
										<ul className='ul'>
											<li>MacOS Mojave 10.14 or newer</li>
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
											<li>4.5” display or larger</li>
											<li>3 GB RAM</li>
											<li>3 GB available storage space</li>
											<li>Bluetooth 4.0 or above</li>
										</ul>
									</p>
									<strong>Operating System</strong>
									<p className='answer'>
										<ul className='ul'>
											<li>Android 7 or above</li>
										</ul>
									</p>
								</div>

								{/* windows */}
								<div className='col-6'>
									<h3 className='question'>Windows compatibility</h3>
									<p className='answer'>
										<strong>
											To find out which version of Windows your device is
											running, press the Windows logo key + R, type winver in
											the Open box, and then select OK. <br />
											Here’s how to learn more:
										</strong>
									</p>
									<p className='answer'>
										<ol className='ol'>
											<li>
												Select the Start button &gt; Settings &gt; System &gt;
												About .
											</li>
											<li>
												Under Device specifications &gt; System type, see if
												you’re running a 32-bit or 64-bit version of Windows.
											</li>
											<li>
												Under Windows specifications, check which edition and
												version of Windows your device is running.
											</li>
										</ol>
									</p>
									<strong>Hardware</strong>
									<p className='answer'>
										<ul className='ul'>
											<li>
												1.5 GHz Intel® Core Duo processor - or equivalent or
												better
											</li>
											<li>4 GB RAM</li>
											<li>2 GB available storage space</li>
											<li>Bluetooth 4.0 or above</li>
										</ul>
									</p>
									<strong>Operating System</strong>
									<p className='answer'>
										<ul className='ul'>
											<li>Windows 10, version 1809 or newer</li>
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
									<strong>Hardware</strong>
									<p className='answer'>
										<ul className='ul'>
											<li>Bluetooth 4.0 or higher</li>
											<li>3 GB ram</li>
											<li>Quad core processor 1.3 ghz</li>
										</ul>
									</p>
									<strong>Operating System</strong>
									<p className='answer'>
										<ul className='ul'>
											<li>Fire OS 7 or above</li>
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
												iPad 6th Generation
											</div>{' '}
											<div className='col-4 col-lg-3 cell bg-white'>
												iPhone 7
											</div>{' '}
											<div className='col-4 col-lg-3 cell bg-white'>
												iPhone SE
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												iPad beta
											</div>{' '}
											<p className='specificationsParagraph col-12'>
												Please note that any additional compatible device
												outside this list of tested devices may not provide an
												optimal experience.
											</p>
										</div>
									</div>
									{/* mac*/}
									<div class='accordion-item'>
										<button aria-expanded='false' id='accordionOpenCloseBtn'>
											<span class='accordion-title'>macOS devices</span>
											<span class='icon' aria-hidden='true'>
												<i class='fas fa-chevron-down'></i>
											</span>
										</button>
										<div class='accordion-content row specifications'>
											<div className='col-4 col-lg-3 cell bg-white'>
												Mac(v10.14.1) Device Name:Mac Book Pro(Retina, 13 inch
												Early 2015) Version: Mac OS Mojave(10.14.1) Processor -
												3.1GHZ Intel Core i7 Installed RAM - 8 GB 1867Mhz DDR3
											</div>{' '}
											<div className='col-4 col-lg-3 cell bg-white'>
												Mac(v10.15.4) Device Name:Mac Book Air(13 inch Early
												2014) Version: Mac OS catalina(10.15.4) Processor -
												1.4GHZ Dual-Core Intel Core i5 Installed RAM - 4 GB
												1600Mhz DDR3
											</div>{' '}
											<div className='col-4 col-lg-3 cell bg-white'>
												Mac(v10.15.5) Device Name:Mac Book Pro(13 inch Mid 2012)
												Version: Mac OS catalina(10.15.5) Processor - 2.5GHZ
												Dual-Core Intel Core i5 Installed RAM - 8 GB 1600Mhz
												DDR3
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Mac(v11.0 Beta(20A5374i)) Device Name: Mac Book Air(13
												inch Early 2014) Version: Mac OS Big Sur(13 inch, 2017)
												Processor - 1.8GHZ Dual-Core Intel Core i5 Installed RAM
												- 8 GB 1600Mhz DDR3
											</div>{' '}
											<p className='specificationsParagraph col-12'>
												Please note that any additional compatible device
												outside this list of tested devices may not provide an
												optimal experience.
											</p>
										</div>
									</div>

									<div class='accordion-item'>
										<button aria-expanded='false' id='accordionOpenCloseBtn'>
											<span class='accordion-title'>Android devices</span>{' '}
											<span class='icon' aria-hidden='true'>
												<i class='fas fa-chevron-down'></i>
											</span>
										</button>
										<div class='accordion-content row specifications'>
											<div className='col-4 col-lg-3 cell bg-white'>
												Samsung Tab A
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Xiaomi MiA2
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Samsung Galaxy On NXT
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Vivo Y81
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Nokia 5.1 Plus
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Samsung Galaxy A7
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Google Pixel 2
											</div>{' '}
											<div className='col-4 col-lg-3 cell bg-white'>
												Google Pixel 3
											</div>{' '}
											<div className='col-4 col-lg-3 cell bg-white'>
												Huawei P30 Lite
											</div>{' '}
											<p className='specificationsParagraph col-12'>
												Please note that any additional compatible device
												outside this list of tested devices may not provide an
												optimal experience.
											</p>
										</div>
									</div>

									<div class='accordion-item'>
										<button aria-expanded='false' id='accordionOpenCloseBtn'>
											<span class='accordion-title'>Windows devices</span>{' '}
											<span class='icon' aria-hidden='true'>
												<i class='fas fa-chevron-down'></i>
											</span>
										</button>
										<div class='accordion-content row specifications'>
											<div className='col-4 col-lg-3 cell bg-white'>
												Desktop: windows 10 pro v 1803 Device Name: DT000992
												Processor - Intel(R) Core(TM) i5-4590 CPU @ 3.30GHz 3.30
												GHz Installed RAM - 8.00 GB Edition - Windows10 Pro
												Version - 1809 OS Build:17763.1158
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Windows 10 pro v 1809 MS Surface laptop Device Name:
												Desktop-OVRGRTK Processor - Intel(R) Core(TM) i5-6300U
												CPU @ 2.40GHz 2.50 GHz Installed RAM - 4.00 GB Edition -
												Windows10 Pro Version - 1809 OS Build:17763.1158
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Windows 10 Home v 1903 Surface laptop (Lenovo Mix)
												Device Name - DESKTOPQR2E3HL Processor - Intel(R)
												Core(TM) i3-6100U CPU @ 2.30GHz 2.30 GHz Installed RAM -
												4.00 GB Edition - Windows 10 Home Single Language
												Version - 1903 OS Build: 18362.1016
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Windows 10 Home v 1909 HP laptop Device Name -
												LAPTOP-2J15QQT1 Processor - Intel(R) Core(TM) i5-7200U
												CPU @ 2.50GHz 2.70GHz Installed RAM - 8.00 GB Edition -
												Windows 10 Home Single Language Version - `1909
											</div>
											<div className='col-4 col-lg-3 cell bg-white'>
												Windows 10 pro v 2004 Asus laptop Device Name:
												Laptop-00QCCTD2 processor: intel (R) Core(TM) i3-7020U
												CPU @2.30GHZ 2.30GHZ RAM: 8GB Edition: Windows10 Home
												single Language Version: 2004 OS Build: 19041.508
											</div>
											<p className='specificationsParagraph col-12'>
												Please note that any additional compatible device
												outside this list of tested devices may not provide an
												optimal experience.
											</p>
										</div>
									</div>

									<div class='accordion-item'>
										<button aria-expanded='false' id='accordionOpenCloseBtn'>
											<span class='accordion-title'>Fire OS devices</span>
											<span class='icon' aria-hidden='true'>
												<i class='fas fa-chevron-down'></i>
											</span>
										</button>
										<div class='accordion-content row specifications'>
											<div className='col-4 col-lg-3 cell bg-white'>
												Fire 7 (9th generation)
											</div>{' '}
											<div className='col-4 col-lg-3 cell bg-white'>
												Fire HD (8th generation)
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

export default withRouter(MindStormRobot);

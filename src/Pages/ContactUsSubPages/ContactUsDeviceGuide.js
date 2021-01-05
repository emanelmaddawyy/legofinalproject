import React from 'react';

import './ContactUsDeviceGuide.css';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import DeviceGuideHeader from '../../components/DeviceGuideHeader/DeviceGuideHeader';

const ContactUsDeviceGuide = () => {
	return (
		<div id='DeviceGuide'>
			<Header />

			<DeviceGuideHeader />

			<div className='row p-0 m-0 w-100'>
				<div className='col-12 p-0'>
					<div className='row m-0' id='main-content'>
						<div className='col-12' id='title'>
							Device Guide
							<div className='col-12' class='subtitle'>
								Select the app below you wish to check device compatibility
								with.
							</div>
						</div>
					</div>
					<div className='row m-0 bg-white pt-5'>
						<div className='col-12 col-sm-6 col-lg-4 mb-5'>
							<Link to='/marioapp'>
								<Card style={{ width: '100%' }}>
									<Card.Img variant='top' src='/71360_Lifestyle_01.png' />
									<Card.Body className='px-0'>
										<Card.Text className='text-left'>
											LEGO® Super Mario™ app
										</Card.Text>
										<Button variant='secondary btn-block'>
											Check compatibility
										</Button>
									</Card.Body>
								</Card>
							</Link>
						</div>
						<div className='col-12 col-sm-6 col-lg-4 mb-5'>
							<Link to='/mindstormrobot'>
								<Card style={{ width: '100%' }}>
									<Card.Img variant='top' src='/51515_Lifestyle_17.jpg' />
									<Card.Body className='px-0'>
										<Card.Text className='text-left'>
											LEGO® MINDSTORMS® Robot Inventor
										</Card.Text>
										<Button variant='secondary btn-block'>
											Check compatibility
										</Button>
									</Card.Body>
								</Card>
							</Link>
						</div>
						<div className='col-12 col-sm-6 col-lg-4 mb-5'>
							<Link to='/booststarwars'>
								<Card style={{ width: '100%' }}>
									<Card.Img variant='top' src='/starwars-boost.jpg' />
									<Card.Body className='px-0'>
										<Card.Text className='text-left'>
											LEGO® BOOST Star Wars™ App
										</Card.Text>
										<Button variant='secondary btn-block'>
											Check compatibility
										</Button>
									</Card.Body>
								</Card>
							</Link>
						</div>
						<div className='col-12 col-sm-6 col-lg-4 mb-5'>
							<Link to='/controlplus'>
								<Card style={{ width: '100%' }}>
									<Card.Img variant='top' src='/Thumbnail_com_1116x627.jpg' />
									<Card.Body className='px-0'>
										<Card.Text className='text-left'>
											LEGO® Technic™ Control+
										</Card.Text>
										<Button variant='secondary btn-block'>
											Check compatibility
										</Button>
									</Card.Body>
								</Card>
							</Link>
						</div>
						<div className='col-12 col-sm-6 col-lg-4 mb-5'>
							<Link to='/poweredup'>
								<Card style={{ width: '100%' }}>
									<Card.Img variant='top' src='/thumbnail_pu.jpg' />
									<Card.Body className='px-0'>
										<Card.Text className='text-left'>
											LEGO® Powered Up
										</Card.Text>
										<Button variant='secondary btn-block'>
											Check compatibility
										</Button>
									</Card.Body>
								</Card>
							</Link>
						</div>
						<div className='col-12 col-sm-6 col-lg-4 mb-5'>
							<Link to='/hiddenside'>
								<Card style={{ width: '100%' }}>
									<Card.Img variant='top' src='/hidden-side.png' />
									<Card.Body className='px-0'>
										<Card.Text className='text-left'>
											Hidden Side™ App
										</Card.Text>
										<Button variant='secondary btn-block'>
											Check compatibility
										</Button>
									</Card.Body>
								</Card>
							</Link>
						</div>
						<div className='col-12 col-sm-6 col-lg-4 mb-5'>
							<Link to='/arphotoshoot'>
								<Card style={{ width: '100%' }}>
									<Card.Img variant='top' src='/thumb_528x297.jpg' />
									<Card.Body className='px-0'>
										<Card.Text className='text-left'>
											LEGO® LIFE AR PHOTO SHOOT{' '}
										</Card.Text>
										<Button variant='secondary btn-block'>
											Check compatibility
										</Button>
									</Card.Body>
								</Card>
							</Link>
						</div>
						<div className='col-12 col-sm-6 col-lg-4 mb-5'>
							<Link to='/boostapp'>
								<Card style={{ width: '100%' }}>
									<Card.Img
										variant='top'
										src='/v1_google_play_LEGO-BOOST_1024x500px_banner.png'
									/>
									<Card.Body className='px-0'>
										<Card.Text className='text-left'>LEGO® BOOST app</Card.Text>
										<Button variant='secondary btn-block'>
											Check compatibility
										</Button>
									</Card.Body>
								</Card>
							</Link>
						</div>
						<div className='col-12 col-sm-6 col-lg-4 mb-5'>
							<Link to='/moviemakerapp'>
								<Card style={{ width: '100%' }}>
									<Card.Img variant='top' src='/01_-_Splash_screen.png' />
									<Card.Body className='px-0'>
										<Card.Text className='text-left'>
											THE LEGO® MOVIE 2™ Movie Maker app
										</Card.Text>
										<Button variant='secondary btn-block'>
											Check compatibility
										</Button>
									</Card.Body>
								</Card>
							</Link>
						</div>
						<div className='col-12 col-sm-6 col-lg-4 mb-5'>
							<Link to='/duploapp'>
								<Card style={{ width: '100%' }}>
									<Card.Img
										variant='top'
										src='/v1_google_play_LEGO-DUPLO_Connected_Train_1024x500px_banner.png'
									/>
									<Card.Body className='px-0'>
										<Card.Text className='text-left'>
											LEGO® DUPLO® Connected Train app
										</Card.Text>
										<Button variant='secondary btn-block'>
											Check compatibility
										</Button>
									</Card.Body>
								</Card>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactUsDeviceGuide;

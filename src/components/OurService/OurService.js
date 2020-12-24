import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './OurService.css';

const OurService = () => {
	function MailUs() {
		const [show, setShow] = useState(false);

		const handleClose = () => setShow(false);
		const handleShow = () => setShow(true);

		return (
			<>
				<li className=' justify-content-center' id="mailus" onClick={handleShow}>
					<div className='row  align-items-center'>
						<div className='col-1'>
							<i class='far fa-envelope-open'></i>
						</div>
						<div className='col-10'>
							<div className='row'>Mail Us</div>
							<div className='row'>
								<small>
									Send us an mail and we’ll get back to you as soon as possible.
								</small>
							</div>
						</div>
						<div className='col-1'>
							<img src='/right-arrow.svg' alt='' className='right-arrow' />
						</div>
					</div>
				</li>

				<Modal show={show} onHide={handleClose} className='m1'>
					<Modal.Header closeButton></Modal.Header>
					<Modal.Body>
						<p className="custom">LEGO® Customer Service</p>
						<p>PO Box 1138</p> <p>Enfield</p>
						<p>CT 06083-1138</p>
						<p>USA</p>
					</Modal.Body>
				</Modal>
			</>
		);
	}

	function PhoneUs() {
		const [show, setShow] = useState(false);

		const handleClose = () => setShow(false);
		const handleShow = () => setShow(true);

		return (
			<>
				<li className=' justify-content-center' id="phoneus" onClick={handleShow}>
					<div className='row  align-items-center'>
						<div className='col-1'>
							<i class='fas fa-phone'></i>
						</div>
						<div className='col-10'>
							<div className='row'>Phone Us</div>
							<div className='row'>
								<small>Talk to our friendly LEGO experts.</small>
							</div>
						</div>
						<div className='col-1'>
							<img src='/right-arrow.svg' alt='' className='right-arrow' />
						</div>
					</div>
				</li>

				<Modal show={show} onHide={handleClose} className='m1' id="m2">
					<Modal.Header closeButton></Modal.Header>
					<Modal.Body>
						<p className="custom">LEGO® Customer Service</p>
						<p>1-800-835-4386</p>
                        <p>Monday to Friday 8am - 8pm ET</p>
						<p>Saturday and Sunday 11am - 3pm ET</p>
                        <br/><br/>
						<p>Spanish assistance is available Monday to Friday 10am to 6pm ET</p>
                        <br/><br/>
                        <p>French service in North America</p>
                        <p>1-877-518-5346</p>
						<p>Monday to Friday 8:30 am to 2:30 pm ET</p>
                        <br/><hr/><br/>
                        <p className="custom">LEGO Education Tech Support</p>
						<p>1-866-349-5346</p>
                        <p>Monday to Friday 8:00 am to 8:00 pm ET</p>
                        <br/><hr/><br/>
                        <p className="custom">MINDSTORMS Tech Support</p>
						<p>1-877-680-2800</p>
                        <p>Monday to Friday 8:00 am to 8:00 pm ET</p>
					</Modal.Body>
                    <Modal.Footer>
                        Our free number might be blocked by some telecom providers and may incur charges when called from a mobile phone. Please contact your provider for more details.
                    </Modal.Footer>
				</Modal>
			</>
		);
	}

	return (
		<div id='OurService'>
			<div className='row p-0 m-0 w-100 hero'>
				<div
					className='col-lg-8 pl-0 order-lg-1'
					style={{
						backgroundImage: 'url("/bg--contact-us-section.jpg")',
						backgroundSize: 'cover',
						backgroundPosition: '50%',
					}}>
					<div className='layout__main-inner align-items-center'>
						<div className='grid--center'>
							<div className='grid__item'>
								<ul>
									<MailUs></MailUs>
									<PhoneUs />
								</ul>
							</div>
						</div>
					</div>
					{/* <img
						src='/bg--contact-us-section.jpg'
						alt=''
					/> */}
				</div>

				<div className='col-lg-4 order-lg-2 my-auto'>
					<section className='content-item__secondary'>
						<div className='content-item__secondary-inner p-5'>
							<h3 className='cta__title'>How's our service?</h3>
							<div className='w-100 text-center ourServiceStat'>
								<img src='/ourService.png' alt='our service' />
							</div>
							<p className='cta__txt'>
								<p>
									<strong>Busy!</strong>
								</p>
								<p>We’re very busy taking calls and answering emails.</p>
							</p>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
};

export default OurService;

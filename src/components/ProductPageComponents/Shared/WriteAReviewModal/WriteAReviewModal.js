import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './WriteAReviewModal.css';
import { withRouter } from 'react-router-dom';

const WriteAReview = (props) => {
	// console.log(props.location.state);
	// console.log('WriteAReview props', props.data.data.location.state);
	function WriteAReviewModel() {
		const [show, setShow] = useState(false);

		const handleClose = () => setShow(false);
		const handleShow = () => setShow(true);

		function validateModel() {
			let modalNicknameLength = document.getElementById('modalNickname').value
				.length;
			let modalReviewLength = document.getElementById('modalReview').value
				.length;

			let modalNickname = document.getElementById('modalNickname');
			let modalReview = document.getElementById('modalReview');
			let modalNicknameLabel = document.getElementById('modalNicknameLabel');
			let modalReviewLabel = document.getElementById('modalReviewLabel');
			let modalErrors = document.getElementById('modalErrors');

			if (modalNicknameLength > 4 && modalReviewLength > 50) {
				// alert('valid');
				handleClose();
			} else if (modalNicknameLength < 4 && modalReviewLength > 50) {
				// alert('error modalNickname');
				modalNickname.style.border = '1px solid red';
				modalNicknameLabel.style.color = 'red';
				modalErrors.innerHTML = `
				<p>
								We're sorry, but we have encountered the following issue(s):
							</p>
							<ul>
								<li>You must enter a nickname.</li>
							</ul>

				`;

				return false;
			} else if (modalNicknameLength > 4 && modalReviewLength < 50) {
				// alert('error modalReview');
				modalReview.style.border = '1px solid red';
				modalReviewLabel.style.color = 'red';
				modalErrors.innerHTML = `
				<p>
								We're sorry, but we have encountered the following issue(s):
							</p>
							<ul>
								<li>You must enter review text.</li>
							</ul>

				`;

				return false;
			} else {
				// alert('error modalNickname .. modalReview');
				modalNicknameLabel.style.color = 'red';
				modalReviewLabel.style.color = 'red';
				modalNickname.style.border = '1px solid red';
				modalReview.style.border = '1px solid red';
				modalErrors.innerHTML = `
				<p>
								We're sorry, but we have encountered the following issue(s):
							</p>
							<ul>
								<li>You must enter a nickname.</li>
								<li>You must enter review text.</li>
							</ul>

				`;

				return false;
			}
		}

		return (
			<>
				<Button
					variant='primary'
					className='btn btn-primary order-last ml-4 specificationsBtn'
					onClick={handleShow}>
					Write a Review
				</Button>

				<Modal show={show} onHide={handleClose} id='WriteReviewModal'>
					<Modal.Header closeButton>
						<img
							src='/customer-reviews.svg'
							alt='custReview'
							className='mr-2'
							width='40px'
						/>
						<Modal.Title>Customer Reviews</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<div className='row text-danger' id='modalErrors'>
							{/* <p>
								We're sorry, but we have encountered the following issue(s):
							</p>
							<ul>
								<li>You must enter a nickname.</li>
								<li>You must enter review text.</li>
							</ul> */}
						</div>
						<div className='row m-0'>
							<div className='section1'>
								<img
									src={props.location.state.imgSrc}
									alt='props.location.state.name'
									id='reviewModalimg'
								/>
							</div>
						</div>
						<form>
							<img src='{props.data.location.state.imgSrc}' alt='' />
							<div class='form-group'>
								<label for='modalNickname' id='modalNicknameLabel'>
									Your Nickname
								</label>
								<input type='text' class='form-control' id='modalNickname' />
							</div>
							<div class='form-group'>
								<label for='modalReview' id='modalReviewLabel'>
									Review
								</label>
								<textarea
									type='text'
									class='form-control'
									id='modalReview'
									rows='10'
									cols='25'
								/>
								<small>
									You must write at least 50 characters for this field
								</small>
							</div>
						</form>
					</Modal.Body>
					<Modal.Footer>
						<Button
							variant='primary'
							onClick={() => {
								validateModel();
							}}
							id='ModalSubmit'>
							Submit
						</Button>

						<span onClick={handleClose} className='cancel'>
							Cancel
						</span>
					</Modal.Footer>
				</Modal>
			</>
		);
	}

	return (
		<div>
			<WriteAReviewModel />
		</div>
	);
};

export default withRouter(WriteAReview);

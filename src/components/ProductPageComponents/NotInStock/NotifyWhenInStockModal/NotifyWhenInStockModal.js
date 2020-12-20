import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './NotifyWhenInStockModal.css';

const NotifyWhenInStockModal = () => {
	function ModalFun() {
		const [show, setShow] = useState(false);

		const handleClose = () => setShow(false);
		const handleShow = () => setShow(true);

		function validateModel() {
			let checkboxes1 = document.getElementById('CheckBox1').checked;
			let checkboxes2 = document.getElementById('CheckBox2').checked;
			// let NotifyWhenInStockEmail = document.getElementById(
			// 	'NotifyWhenInStockEmail',
			// ).value;

			if (checkboxes1 && checkboxes2 && validateEmail()) {
				handleClose();
			} else {
				return false;
			}
		}

		function validateEmail() {
			let inputEmail = document
				.getElementById('NotifyWhenInStockEmail')
				.value.trim();
			let myinput = document.getElementById('NotifyWhenInStockEmail');

			let emailValidationMsg = document.getElementById('emailValidationMsg');

			if (inputEmail) {
				// console.log('inputEmail', inputEmail);
				if (/(?=.*[a-zA-Z])(?=.+[#$%@!{}\[\]^&*()?_]).{3,}/.test(inputEmail)) {
					emailValidationMsg.textContent = '';
					myinput.style.borderBottom = '0px';
					return true;
				} else {
					emailValidationMsg.textContent = 'invalid email address';
					myinput.style.borderBottom = '2px solid red';
					return false;
				}
			} else {
				myinput.style.borderBottom = '2px solid red';
				emailValidationMsg.textContent = 'email is a required field';
				return false;
			}
		}

		return (
			<>
				<span onClick={handleShow} class='AddToWishlistStyle pl-1'>
					<i class='far fa-envelope pr-2'></i>
					<span>Notify When In Stock</span>
				</span>

				<Modal show={show} onHide={handleClose} dialogClassName='modal-90w' id="NotifyWhenInStock">
					<Modal.Header closeButton>
						<Modal.Title>Notify When in Stock</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<p>Get emailed when Statue of Liberty is back in stock</p>

						<input
							type='email'
							class='form-control'
							id='NotifyWhenInStockEmail'
							placeholder='Email address'
							onKeyUp={validateEmail}
							required
						/>
						<span id='emailValidationMsg' className='text-danger'></span>

						<label className='checkbox-label'>
							<input type='checkbox' className='getCheckBox' id='CheckBox1' />
							<span>I am over 18</span>
						</label>

						<label className='checkbox-label'>
							<input type='checkbox' className='getCheckBox' id='CheckBox2' />
							<span>I have read and agree to the Terms below</span>
						</label>

						<small>
							<p>
								By signing up for this reminder email, you agree to receive a
								one-time marketing communication regarding set availability from
								LEGO.com pertaining to Statue of Liberty (21042) only. This
								email signup is intended as a one-time marketing communication
								only and will not sign you up for ongoing email marketing
								communications from LEGO.com. Upon sign up, we will send you a
								service email confirming your sign up. If you regret signing up
								to the one-time back-in-stock marketing email, please use the
								link in the service email to opt-out of the Statue of Liberty
								(21042) one-time back-in-stock marketing email.
							</p>

							<p>
								Please note, if you are subscribed to receive marketing email
								communications from LEGO.com you may receive additional emails
								containing information about these sets, and sets from other
								themes.
							</p>

							<p>
								We care about your privacy, LEGO.com will not rent or sell your
								personal information to third party vendors. For more
								information about how you can control your personal information,
								please see our Privacy Policy.
							</p>
						</small>
					</Modal.Body>
					<Modal.Footer>
						<Button variant='secondary btn-block' onClick={validateModel}>
							Submit
						</Button>
					</Modal.Footer>
				</Modal>
			</>
		);
	}

	return (
		<div>
			<ModalFun />
		</div>
	);
};

export default NotifyWhenInStockModal;

//------------------------------------------------------------
//!making button disabled and unable it after all input are valid
//!problem modal not closing :\
//------------------------------------------------------------
// import React, { useState } from 'react';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import './NotifyWhenInStockModal.css';

// const NotifyWhenInStockModal = () => {
// 	function ModalFun() {
// 		const [show, setShow] = useState(false);

// 		const handleClose = () => setShow(false);
// 		const handleShow = () => setShow(true);

// 		function validateModel() {
// 			let checkboxes1 = document.getElementById('CheckBox1').checked;
// 			let checkboxes2 = document.getElementById('CheckBox2').checked;
// 			let submitBtnModal = document.getElementById('submitBtnModal');
// 			if (checkboxes1 && checkboxes2 && validateEmail()) {
// 				submitBtnModal.disabled = false;

// 			} else {
// 				submitBtnModal.disabled = true;
// 				return false;
// 			}
// 		}

// 		function validateEmail() {
// 			let inputEmail = document
// 				.getElementById('NotifyWhenInStockEmail')
// 				.value.trim();
// 			let myinput = document.getElementById('NotifyWhenInStockEmail');

// 			let emailValidationMsg = document.getElementById('emailValidationMsg');

// 			if (inputEmail) {
// 				console.log('inputEmail', inputEmail);
// 				if (/(?=.*[a-zA-Z])(?=.+[#$%@!{}\[\]^&*()?_]).{3,}/.test(inputEmail)) {
// 					emailValidationMsg.textContent = '';
// 					myinput.style.borderBottom = '0px';
// 					return true;
// 				} else {
// 					emailValidationMsg.textContent = 'invalid email address';
// 					myinput.style.borderBottom = '2px solid red';
// 					return false;
// 				}
// 			} else {
// 				myinput.style.borderBottom = '2px solid red';
// 				emailValidationMsg.textContent = 'email is a required field';
// 				return false;
// 			}
// 		}

// 		return (
// 			<>
// 				<span onClick={handleShow} class='AddToWishlistStyle pl-1'>
// 					<i class='far fa-envelope pr-2'></i>
// 					<span>Notify When In Stock</span>
// 				</span>

// 				<Modal show={show} onHide={handleClose} dialogClassName='modal-90w'>
// 					<Modal.Header closeButton>
// 						<Modal.Title>Notify When in Stock</Modal.Title>
// 					</Modal.Header>
// 					<Modal.Body>
// 						<p>Get emailed when Statue of Liberty is back in stock</p>

// 						<input
// 							type='email'
// 							class='form-control'
// 							id='NotifyWhenInStockEmail'
// 							placeholder='Email address'
// 							onKeyUp={()=>{validateEmail(); validateModel()}}
// 							required
// 						/>
// 						<span id='emailValidationMsg' className='text-danger'></span>

// 						<label className='checkbox-label'>
// 							<input
// 								type='checkbox'
// 								className='getCheckBox'
// 								id='CheckBox1'
// 								onClick={validateModel}
// 							/>
// 							<span>I am over 18</span>
// 						</label>

// 						<label className='checkbox-label'>
// 							<input
// 								type='checkbox'
// 								className='getCheckBox'
// 								id='CheckBox2'
// 								onClick={validateModel}
// 							/>
// 							<span>I have read and agree to the Terms below</span>
// 						</label>

// 						<small>
// 							<p>
// 								By signing up for this reminder email, you agree to receive a
// 								one-time marketing communication regarding set availability from
// 								LEGO.com pertaining to Statue of Liberty (21042) only. This
// 								email signup is intended as a one-time marketing communication
// 								only and will not sign you up for ongoing email marketing
// 								communications from LEGO.com. Upon sign up, we will send you a
// 								service email confirming your sign up. If you regret signing up
// 								to the one-time back-in-stock marketing email, please use the
// 								link in the service email to opt-out of the Statue of Liberty
// 								(21042) one-time back-in-stock marketing email.
// 							</p>

// 							<p>
// 								Please note, if you are subscribed to receive marketing email
// 								communications from LEGO.com you may receive additional emails
// 								containing information about these sets, and sets from other
// 								themes.
// 							</p>

// 							<p>
// 								We care about your privacy, LEGO.com will not rent or sell your
// 								personal information to third party vendors. For more
// 								information about how you can control your personal information,
// 								please see our Privacy Policy.
// 							</p>
// 						</small>
// 					</Modal.Body>
// 					<Modal.Footer>
// 						<Button
// 							variant='secondary btn-block'
// 							id='submitBtnModal'
// 							onClick={handleClose}
// 							disabled>
// 							Submit
// 						</Button>
// 					</Modal.Footer>
// 				</Modal>
// 			</>
// 		);
// 	}

// 	return (
// 		<div>
// 			<ModalFun />
// 		</div>
// 	);
// };

// export default NotifyWhenInStockModal;

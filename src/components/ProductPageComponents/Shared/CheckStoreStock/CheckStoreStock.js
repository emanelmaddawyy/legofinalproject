import React, { useEffect } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import './CheckStoreStock.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const CheckStoreStock = () => {
	
	useEffect(() => {
		const items = document.querySelectorAll('.accordion button');

		function toggleAccordion() {
			const itemToggle = this.getAttribute('aria-expanded');
			console.log(itemToggle);

			// for (let i = 0; i < items.length; i++) {
			// 	items[i].setAttribute('aria-expanded', 'false');
			// }

			if (itemToggle === 'false') {
				this.setAttribute('aria-expanded', 'true');
			} else {
				this.setAttribute('aria-expanded', 'false');
			}
		}

		items.forEach((item) => item.addEventListener('click', toggleAccordion));
	});

	return (
		<>
			<div class='accordion'>
				<div class='accordion-item'>
					<button aria-expanded='false'>
						<span class='accordion-title'>Check Store Stock</span>
						<span class='icon' aria-hidden='true'></span>
					</button>
					<div class='accordion-content'>
						<p>
							Enter your address to find a LEGO® Store near you then please call
							to ensure item availability.
						</p>

						<InputGroup className='mb-3'>
							<FormControl
								id="EnterCityState"
								placeholder='Enter a city and state or zip code'
								aria-label='Enter a city and state or zip code'
								aria-describedby='basic-addon2'
							/>
							<InputGroup.Append>
								<InputGroup.Text id='basic-addon2'>
									<i class='fas fa-search' />
								</InputGroup.Text>
							</InputGroup.Append>
						</InputGroup>
					</div>
				</div>
			</div>
		</>
	);
};

export default CheckStoreStock;

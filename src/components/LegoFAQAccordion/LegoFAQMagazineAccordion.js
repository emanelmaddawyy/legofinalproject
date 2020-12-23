import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LegoFAQAccordion.css';

const LegoFAQMagazineAccordion = () => {
	useEffect(() => {
		const items = document.querySelectorAll('#accordionOpenCloseBtn');
		// console.log('items',items);
		function myToggleFun() {
			// debugger;
			const itemToggle3 = this.getAttribute('aria-expanded');
			console.log(itemToggle3);

			// for (let i = 0; i < items.length; i++) {
			// 	items[i].setAttribute('aria-expanded', 'false');
			// }

			if (itemToggle3 === 'false') {
				this.setAttribute('aria-expanded', 'true');
			} else {
				this.setAttribute('aria-expanded', 'false');
			}
		}
		items.forEach((item) => item.addEventListener('click', myToggleFun));
	});

	return (
		<>
			<div id='accordion3'>
				<div class='accordion-item'>
					<button aria-expanded='false' id='accordionOpenCloseBtn'>
						<span class='accordion-title'>
							What is the LEGO® Life Magazine?
						</span>
						<span class='icon' aria-hidden='true'></span>
					</button>
					<div class='accordion-content row specifications'>
						<div className='col-12 col-md-10 order-md-first p-4 '>
							<p className='specificationsParagraph'>
								LEGO® Life Magazine is a FREE magazine created towards kids
								between ages 5 and 9 that is mailed to your home 4 times a year.
								Every issue is packed full of LEGO news and behind-the-bricks
								interviews, comic adventures, games and puzzles, building
								challenges and Cool Creations built by LEGO fans. Not to
								mention, sneak peeks at the latest sets and themes.
							</p>
						</div>
					</div>
				</div>

				<div class='accordion-item'>
					<button aria-expanded='false' id='accordionOpenCloseBtn'>
						<span class='accordion-title'>When will my next issue arrive?</span>
						<span class='icon' aria-hidden='true'></span>
					</button>
					<div class='accordion-content row specifications'>
						<div className='col-12 col-md-10 order-md-first p-4 '>
							<p className='specificationsParagraph'>
								<p>The next issue will be delivered: </p>
								<p>
									<strong>JANUARY 2021</strong>
								</p>
								<p>
									As a new subscriber, please check your subscription
									confirmation email for more information on when your child
									will receive the first magazine.
								</p>
							</p>
						</div>
					</div>
				</div>

				<div class='accordion-item'>
					<button aria-expanded='false' id='accordionOpenCloseBtn'>
						<span class='accordion-title'>
							How long will I have to wait for my child’s first magazine to
							arrive?
						</span>
						<span class='icon' aria-hidden='true'></span>
					</button>
					<div class='accordion-content row specifications'>
						<div className='col-12 col-md-10 order-md-first p-4 '>
							<p className='specificationsParagraph'>
								Depending on the time of month you signed up and the shipping
								schedule of the magazine, it can take anywhere from 6 to 16
								weeks before your child’s first magazine arrives. We know this
								can feel like a terribly long time for a child, so we are
								constantly working to bring this timescale down.
							</p>
						</div>
					</div>
				</div>

				<div class='accordion-item'>
					<button aria-expanded='false' id='accordionOpenCloseBtn'>
						<span class='accordion-title'>
							What does it cost to get the magazine?
						</span>
						<span class='icon' aria-hidden='true'></span>
					</button>
					<div class='accordion-content row specifications'>
						<div className='col-12 col-md-10 order-md-first p-4 '>
							<p className='specificationsParagraph'>
								It really is absolutely free! The magazine is printed and posted
								to you free of charge. It’s our way of celebrating LEGO® fans
								all around the world.
							</p>
						</div>
					</div>
				</div>

				<div class='accordion-item'>
					<button aria-expanded='false' id='accordionOpenCloseBtn'>
						<span class='accordion-title'>
							Why is my child not getting the physical magazine anymore?
						</span>
						<span class='icon' aria-hidden='true'></span>
					</button>
					<div class='accordion-content row specifications'>
						<div className='col-12 col-md-10 order-md-first p-4 '>
							<p className='specificationsParagraph'>
								We would love to continue sending the magazine to LEGO® fans of
								all ages but in order for us to keep the magazine free, we have
								to set an age limit. If you would like your child to continue
								getting the magazine, please reach out to{' '}
								<Link to='/service'>Customer Service</Link>
							</p>
						</div>
					</div>
				</div>

				<div class='accordion-item'>
					<button aria-expanded='false' id='accordionOpenCloseBtn'>
						<span class='accordion-title'>In which countries is the magazine available?</span>
						<span class='icon' aria-hidden='true'></span>
					</button>
					<div class='accordion-content row specifications'>
						<div className='col-12 col-md-10 order-md-first p-4 '>
							<p className='specificationsParagraph'>
							United States, Canada, United Kingdom, Ireland, France, Germany, Austria, Switzerland, Belgium, Netherlands, Denmark, Sweden, Australia, New Zealand.
							</p>
						</div>
					</div>
				</div>

				<div class='accordion-item'>
					<button aria-expanded='false' id='accordionOpenCloseBtn'>
						<span class='accordion-title'>
							Are there different versions of the magazine?
						</span>
						<span class='icon' aria-hidden='true'></span>
					</button>
					<div class='accordion-content row specifications'>
						<div className='col-12 col-md-10 order-md-first p-4 '>
							<p className='specificationsParagraph'>
								Starting with Issue 4 2020, there are two versions of the LEGO
								Life Magazine available. These feature unique material for
								children younger than 7 and children above 7
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default LegoFAQMagazineAccordion;

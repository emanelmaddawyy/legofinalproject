import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from '../../../../components/Header/Header';
import HelpTopicsHeader from '../../../../components/HelpTopicsHeader/HelpTopicsHeader';
import OurService from '../../../../components/OurService/OurService';
import './Answers.css';

const BuyingIndividualParts = (props) => {
	return (
		<div id='Answers'>
			<Header />

			<HelpTopicsHeader />

			<div className='row p-0 m-0 w-100'>
				<div className='col-12'>
					<div className='row m-0'>
						<div className='col-12'>
							<button
								className='btn d-flex align-items-center'
								id='backBtn'
								onClick={props.history.goBack}>
								<img src='/left-arrow.svg' alt='' height='10px' />
								<div id='back-text'>Back to all Help Topics</div>
							</button>
							<h1 id='title'>Buying individual LEGO® parts</h1>
						</div>
					</div>

					<div className='row m-0' id='main-content'>
						<div className='col-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 p-0'>
							<p className='answer'>
								Building is great! And as all builders know, the sky is the
								limit.
							</p>

							<p className='answer'>
								Our sets are fantastic but sometimes you might want to purchase
								some extra pieces to create your own models.
							</p>

							<p className='answer'>
								You can order individual bricks online through our Pick A Brick
								and Bricks & Pieces services. You can also order Bricks & Pieces
								by{' '}
								<Link to='/service' className='link'>
									giving us a call.
								</Link>
							</p>

							<p className='answer'>
								You can find our most popular bricks in the Pick A Brick section
								of our LEGO® Shop website and they’ll sometimes be available at
								a lower price. You can search by color, category, part name, as
								well as element and design number to find the pieces you want.
								Through Pick A Brick, you can buy up to 999 pieces of each part.
							</p>

							<p className='answer'>
								If you couldn’t find what you were looking for on Pick A Brick,
								our Bricks & Pieces service offers you a wider selection of
								parts. You’ll need to enter either the element or design number
								of the part you want to order or the number of a set that
								contains the part. You can also buy LEGO® DUPLO® parts through
								this service.
							</p>

							<p className='answer'>
								Bricks & Pieces can also be ordered over the phone. We can also
								help you find alternatives for elements if you can’t find the
								right part online. Since we make so many different pieces, it’s
								always a huge help if you can give us the element, design or set
								number for the brick you need.
							</p>

							<p className='answer'>
								You’ll be able to earn and redeem LEGO® VIP points on both
								Bricks & Pieces and Pick A Brick orders, but Bricks & Pieces
								don't qualify for any LEGO® Shop promotions.
							</p>

							<p className='answer'>
								If you have any trouble placing your parts order or you can’t
								find a part, feel free to{' '}
								<Link to='/service' className='link'>
									get in touch with our friendly Customer Service team anytime!
								</Link>
							</p>

						</div>
					</div>
				</div>
			</div>
			<OurService />
		</div>
	);
};

export default withRouter(BuyingIndividualParts);

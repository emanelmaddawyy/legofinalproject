import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from '../../../../components/Header/Header';
import HelpTopicsHeader from '../../../../components/HelpTopicsHeader/HelpTopicsHeader';
import OurService from '../../../../components/OurService/OurService';
import './Answers.css';

const WhenPartsDelivered = (props) => {
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
							<h1 id='title'>When will my parts be delivered?</h1>
						</div>
					</div>

					<div className='row m-0' id='main-content'>
						<div className='col-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 p-0'>
							<p className='answer'>
								Are you waiting for a parts order to arrive so you can continue
								building? If so, you’ve come to the right place! Keep in mind
								that all parts orders are hand-picked and packed, so they take a
								bit longer to get to you and they’ll always arrive separately
								from any other items ordered through LEGO® Shop.
							</p>

							<h3 className='question'>Pick a Brick</h3>
							<p className='answer'>
								Pick a Brick orders are sent from a special warehouse in
								Strykow, Poland and shipped by DHL. You can see the status of
								your delivery by logging into your LEGO® Account on our Order
								Status page. Tracking information won’t be available until the
								order has shipped and may be limited until the order has reached
								its destination country.
							</p>

							<p className='answer'>
								Delivery to the <strong>US</strong> takes <strong>13-18</strong>{' '}
								business days, while delivery to
								<strong> Canada</strong> takes <strong>17-22</strong> business
								days.
							</p>

							<h3 className='question'>Bricks & Pieces (Replacement Parts)</h3>
							<p className='answer'>
								Bricks & Pieces orders are sent directly from our headquarters
								in Billund, Denmark! They are also shipped by DHL, but these
								orders can’t be tracked.
							</p>

							<p className='answer'>
								Delivery to the <strong>US</strong> takes <strong>7-10</strong>{' '}
								business days, while delivery to
								<strong> Canada</strong> takes <strong>10-14</strong> business
								days.
							</p>
						</div>
					</div>
				</div>
			</div>
			<OurService />
		</div>
	);
};

export default withRouter(WhenPartsDelivered);

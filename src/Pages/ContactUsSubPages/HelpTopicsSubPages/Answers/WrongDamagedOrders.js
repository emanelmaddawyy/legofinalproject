import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from '../../../../components/Header/Header';
import HelpTopicsHeader from '../../../../components/HelpTopicsHeader/HelpTopicsHeader';
import OurService from '../../../../components/OurService/OurService';
import './Answers.css';

const WrongDamagedOrders = (props) => {
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
							<h1 id='title'>Wrong or damaged orders</h1>
						</div>
					</div>

					<div className='row m-0' id='main-content'>
						<div className='col-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 p-0'>
							<p className='answer'>
								We try hard to make sure all orders are perfect and we’re sorry
								if part of your order was damaged or you received the wrong
								item!
							</p>

							<p className='answer'>
								If you were logged into your LEGO® Account when you placed your
								order, you can return the order using our website. All you have
								to do is visit your Order Status page, click ‘Return Items’ and
								follow the instructions.
							</p>

							<p className='answer'>
								If you would like us to set up the return for you, please{' '}
								<Link to='/service' className='link'>
									get in touch with us
								</Link>
								. We'll be happy to help make things right!
							</p>
						</div>
					</div>
				</div>
			</div>
			<OurService />
		</div>
	);
};

export default withRouter(WrongDamagedOrders);

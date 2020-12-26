import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from '../../../../components/Header/Header';
import HelpTopicsHeader from '../../../../components/HelpTopicsHeader/HelpTopicsHeader';
import OurService from '../../../../components/OurService/OurService';
import './Answers.css';

const CancelOrder = (props) => {
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
							<h1 id='title'>
								When can I cancel or change a LEGO® Shop order?
							</h1>
						</div>
					</div>

					<div className='row m-0' id='main-content'>
						<div className='col-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 p-0'>
							<p className='answer'>
								When you place a LEGO® Shop or parts order with us, we aim to
								send your package as soon as we can to make sure it reaches you
								on time. This means there’s a very small window when you’re able
								to cancel or make changes by{' '}
								<Link to='/service' className='link'>
									calling us
								</Link>
								.
							</p>

							<p className='answer'>
								After that, we won’t be able to change the order because our
								warehouse team will have already started packing it. We also
								won’t be able to change the delivery address.{' '}
							</p>
						</div>
					</div>
				</div>
			</div>
			<OurService />
		</div>
	);
};

export default withRouter(CancelOrder);

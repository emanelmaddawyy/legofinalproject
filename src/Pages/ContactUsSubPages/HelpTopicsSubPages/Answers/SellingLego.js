import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from '../../../../components/Header/Header';
import HelpTopicsHeader from '../../../../components/HelpTopicsHeader/HelpTopicsHeader';
import OurService from '../../../../components/OurService/OurService';
import './Answers.css';

const SellingLego = (props) => {
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
							<h1 id='title'>Selling LEGO® products in your shop</h1>
						</div>
					</div>

					<div className='row m-0' id='main-content'>
						<div className='col-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 p-0'>
							<p className='answer'>
								How fantastic that you want to sell our LEGO® sets in your
								store!
							</p>

							<p className='answer'>
								Just to{' '}
								<Link to='/service' className='link'>
									get in touch with us
								</Link>{' '}
								and we can give you the phone numbers and email addresses you’ll
								need to contact our retailer service team.
							</p>

							<p className='answer'>
								You can also write us an email and we will forward it to them.
							</p>

							<p className='answer'>
								They’ll get in touch with you to let you know our conditions and
								all the opportunities and possibilities LEGO® toys can offer.
							</p>
						</div>
					</div>
				</div>
			</div>
			<OurService />
		</div>
	);
};

export default withRouter(SellingLego);

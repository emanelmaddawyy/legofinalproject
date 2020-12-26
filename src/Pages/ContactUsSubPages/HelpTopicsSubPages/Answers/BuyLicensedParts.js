import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from '../../../../components/Header/Header';
import HelpTopicsHeader from '../../../../components/HelpTopicsHeader/HelpTopicsHeader';
import OurService from '../../../../components/OurService/OurService';
import './Answers.css';

const BuyLicensedParts = (props) => {
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
							<h1 id='title'>Why can't I buy licensed parts?</h1>
						</div>
					</div>

					<div className='row m-0' id='main-content'>
						<div className='col-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 p-0'>
							<p className='answer'>
								A lot of our sets are based on stories and characters we didn’t
								create, like Star Wars™, Disney™, DC Comics™, and Marvel Super
								Heroes. We’re really sorry, but we aren’t able to sell the
								minifigures or specialty bricks from “licensed” themes, or NEXO
								KNIGHTS™ and NINJAGO®. Our licensing agreements with the
								original creators specify that we can’t sell these “licensed”
								parts individually but only as part of a set.
							</p>
						</div>
					</div>
				</div>
			</div>
			<OurService />
		</div>
	);
};

export default withRouter(BuyLicensedParts);

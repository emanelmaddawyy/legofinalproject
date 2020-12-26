import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from '../../../../components/Header/Header';
import HelpTopicsHeader from '../../../../components/HelpTopicsHeader/HelpTopicsHeader';
import OurService from '../../../../components/OurService/OurService';
import './Answers.css';

const NewSetsAvailable = (props) => {
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
							<h1 id='title'>Finding out when new sets are available</h1>
						</div>
					</div>

					<div className='row m-0' id='main-content'>
						<div className='col-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 p-0'>
							<p className='answer'>
								Isn’t it exciting that there are so many new LEGO® sets every
								year? The best way to find out about new LEGO® sets as soon as
								they’re announced is to keep an eye on our{' '}
								<Link to='/' className='link'>
									site
								</Link>
								.
							</p>

							<p className='answer'>
								If you’re over the age of 18, you might also be interested in{' '}
								<Link to='/vip' className='link'>
									joining our LEGO® VIP Program
								</Link>
								. Along with several other benefits, you’ll get exclusive access
								to some sets before they’re released!{' '}
							</p>
						</div>
					</div>
				</div>
			</div>
			<OurService />
		</div>
	);
};

export default withRouter(NewSetsAvailable);

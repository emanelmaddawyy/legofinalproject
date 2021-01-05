import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import BackButton from '../../../../components/BackButton/BackButton';
import Header from '../../../../components/Header/Header';
import HelpTopicsHeader from '../../../../components/HelpTopicsHeader/HelpTopicsHeader';
import OurService from '../../../../components/OurService/OurService';
import './Answers.css';

const BricksTakingLong = (props) => {
	return (
		<div id='Answers'>
			<Header />

			<HelpTopicsHeader />

			<div className='row p-0 m-0 w-100'>
				<div className='col-12'>
					<div className='row m-0'>
						<div className='col-12'>
						<BackButton data="Back to all Help Topics" />
							<h1 id='title'>Why are my bricks taking so long?</h1>
						</div>
					</div>

					<div className='row m-0' id='main-content'>
						<div className='col-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 p-0'>

							<p className='answer'>We understand that waiting for your replacement parts to arrive can be frustrating, especially if the part was missing from a new set and you can’t continue building.

</p>

							<p className='answer'>The reason parts orders take a little longer is because all the pieces are hand-picked by our warehouse team. We have thousands of different bricks available so, as you can imagine, it’s quite a large warehouse!

</p>

							<p className='answer'>If we receive many more orders than we had anticipated, there may be delays. We'll do our best to get your bricks sent out as quickly as possible – our experienced team members can pick up to 130 bricks per hour! You’ll receive an email confirmation once your parts are on their way.

</p>

							<p className='answer'>For updates about our service, please have a look at the main page of our <Link to='/service' className='link'>customer service site</Link> or to <Link to='/service' className='link'>get in touch with us</Link>.</p>

						</div>
					</div>
				</div>
			</div>
			<OurService />
		</div>
	);
};

export default withRouter(BricksTakingLong);

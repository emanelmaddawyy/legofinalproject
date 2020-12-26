import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from '../../../../components/Header/Header';
import HelpTopicsHeader from '../../../../components/HelpTopicsHeader/HelpTopicsHeader';
import OurService from '../../../../components/OurService/OurService';
import './Answers.css';

const IdentifyingLegoSet = (props) => {
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
							<h1 id='title'>Identifying LEGO® set and part numbers</h1>
						</div>
					</div>

					<div className='row m-0' id='main-content'>
						<div className='col-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 p-0'>
							<h3 className='question'>Identifying LEGO® set numbers</h3>
							<p className='answer'>
								Over our long history, we’ve made loads of unique sets, many
								with similar names. We use numbers as a quick and convenient way
								to instantly identify any LEGO® set. Numbers on the first sets
								we made were 3 digits long, but as we made more and more sets,
								we started using longer numbers. Currently, set numbers are 5-7
								digits long and are featured prominently on the box and
								instructions for the set.
							</p>

							<p className='text-center'>
								<img src='/instructionssetnumber.png' alt='' width='50%' />
							</p>
							<p className='text-center'>
								<img src='/boxsetnumber.png' alt='' width='50%' />
							</p>

							<p className='answer'>
								You can also find the set number when you’re browsing{' '}
								<Link to='/' className='link'>
									LEGO® Shop
								</Link>{' '}
								or on our{' '}
								<Link to='/architecture' className='link'>
									product pages.
								</Link>
							</p>

							<p className='text-center'>
								<img src='/productdetailsnumber.png' alt='' width='50%' />
							</p>
							<p className='text-center'>
								<img src='/productpagenumber.png' alt='' width='50%' />
							</p>

							<h3 className='question'>Identifying part numbers</h3>
							<p className='answer'>
								Just like sets, each LEGO® piece has a unique element number.
								For newer sets, element numbers are listed in the back of your
								set’s building instructions:
							</p>

							<p className='text-center'>
								<img src='/bielementnumbers.png' alt='' width='50%' />
							</p>

							<p className='answer'>
								In addition to the element number, many parts have a 4- or
								5-digit design number molded on the inside of the piece. The
								number will be small, so you may need to rotate the brick under
								bright light to see it. The design number along with the color
								is a great way to identify a piece.
							</p>
						</div>
					</div>
				</div>
			</div>
			<OurService />
		</div>
	);
};

export default withRouter(IdentifyingLegoSet);

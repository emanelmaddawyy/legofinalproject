import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import BackButton from '../../../../components/BackButton/BackButton';
import Header from '../../../../components/Header/Header';
import HelpTopicsHeader from '../../../../components/HelpTopicsHeader/HelpTopicsHeader';
import OurService from '../../../../components/OurService/OurService';
import './Answers.css';

const RecyclingLego = (props) => {
	return (
		<div id='Answers'>
			<Header />

			<HelpTopicsHeader />

			<div className='row p-0 m-0 w-100'>
				<div className='col-12'>
					<div className='row m-0'>
						<div className='col-12'>
							<BackButton data='Back to all Help Topics' />
							<h1 id='title'>Recycling LEGO® pieces & warehouse recycling</h1>
						</div>
					</div>

					<div className='row m-0' id='main-content'>
						<div className='col-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 p-0'>
							<p className='answer'>
								LEGO Replay is our way of helping fans donate bricks to kids in
								need. We’re currently trying it out in the United States. Just
								go to{' '}
								<a
									href='http://givebackbox.com/LEGO'
									target='_blank'
									className='link'>
									givebackbox.com/LEGO
								</a>{' '}
								, print out a shipping label, box up your bricks and get them to
								the post office. You can also visit one of our LEGO Stores to
								get a free shipping label or drop your donation off in person.
								The bricks you send will be sorted and cleaned before being
								donated to Teach for America or Boys & Girls Clubs of Boston.
							</p>

							<p className='answer'>
								If you're deciding what to do with LEGO® bricks when you don't
								want to play with them anymore, we recommend passing them on to
								someone else or donating them to a local charity shop.
							</p>

							<p className='answer'>
								Bricks that don’t meet our high standards after being molded
								aren’t just thrown away. We can sometimes grind them down to
								make new pieces. Pieces that can’t be ground down and reused in
								molding help generate power in our facilities. When we make too
								many bricks of one kind, we donate them through our LEGO
								Foundation to charities all over the world!
							</p>
						</div>
					</div>
				</div>
			</div>
			<OurService />
		</div>
	);
};

export default withRouter(RecyclingLego);

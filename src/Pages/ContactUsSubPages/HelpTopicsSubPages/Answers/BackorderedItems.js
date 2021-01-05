import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import BackButton from '../../../../components/BackButton/BackButton';
import Header from '../../../../components/Header/Header';
import HelpTopicsHeader from '../../../../components/HelpTopicsHeader/HelpTopicsHeader';
import OurService from '../../../../components/OurService/OurService';
import './Answers.css';

const BackorderedItems = (props) => {
	return (
		<div id='Answers'>
			<Header />

			<HelpTopicsHeader />

			<div className='row p-0 m-0 w-100'>
				<div className='col-12'>
					<div className='row m-0'>
						<div className='col-12'>
						<BackButton data="Back to all Help Topics" />
							<h1 id='title'>Ordering backordered items</h1>
						</div>
					</div>

					<div className='row m-0' id='main-content'>
						<div className='col-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 p-0'>
							<h3 className='question'>What are backordered items?</h3>
							<p className='answer'>
								We say sets or parts are available for ‘Backorder’ when they’re
								not currently available but we expect them to come back soon.
								You can order these items, but they won’t ship until more arrive
								in our warehouse. We do our best to estimate when these items
								will be available, but the backorder date can sometimes change.
								You’ll find the date on the LEGO® Shop product page for the
								item.
							</p>

							<p class='text-center'>
								<img src='/backorder.jpg' alt='' width='100%' />
							</p>

							<h3 className='question'>
								Will backordered items hold up the rest of my order?
							</h3>
							<p className='answer'>
								We always ship LEGO® sets as soon as they’re available, meaning
								that a backordered set in your order won’t hold up your other
								items. The only exception to this is free promotional items,
								which won't ship separately if the rest of your order is on
								backorder.
							</p>

							<p className='answer'>
								On the other hand, parts are always shipped together to make
								sure we don’t miss any of the bricks you need. If there’s a
								backordered part in your order, we’ll wait until all your parts
								are available before sending them out.
							</p>
						</div>
					</div>
				</div>
			</div>
			<OurService />
		</div>
	);
};

export default withRouter(BackorderedItems);

import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import BackButton from '../../../../components/BackButton/BackButton';
import Header from '../../../../components/Header/Header';
import HelpTopicsHeader from '../../../../components/HelpTopicsHeader/HelpTopicsHeader';
import OurService from '../../../../components/OurService/OurService';
import './Answers.css';

const MissingParts = (props) => {
	return (
		<div id='Answers'>
			<Header />

			<HelpTopicsHeader />

			<div className='row p-0 m-0 w-100'>
				<div className='col-12'>
					<div className='row m-0'>
						<div className='col-12'>
						<BackButton data="Back to all Help Topics" />
							<h1 id='title'>Missing all or part of an order</h1>
						</div>
					</div>

					<div className='row m-0' id='main-content'>
						<div className='col-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 p-0'>
							<p className='answer'>
								We try hard to make sure all orders are perfect we're sorry if
								all or part of your order is missing!
							</p>

							<p className='answer'>
								Sometimes we split orders between multiple boxes. This means
								that your missing items could still be coming in another
								shipment.
							</p>

							<p className='answer'>
								If you see multiple tracking numbers on your order, it means
								there’s more than one shipment.
							</p>

							<p className='answer'>
								Keep in mind that Bricks & Pieces and Pick A Brick orders are
								always shipped separately from other items and take a bit longer
								to arrive. These orders are hand-picked just for you and shipped
								from special warehouses in Poland and Denmark.{' '}
							</p>

							<p className='answer'>
								If you don’t see another shipment, please{' '}
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

export default withRouter(MissingParts);

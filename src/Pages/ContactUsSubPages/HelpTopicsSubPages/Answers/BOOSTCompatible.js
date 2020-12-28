import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import BackButton from '../../../../components/BackButton/BackButton';
import Header from '../../../../components/Header/Header';
import HelpTopicsHeader from '../../../../components/HelpTopicsHeader/HelpTopicsHeader';
import OurService from '../../../../components/OurService/OurService';
import './Answers.css';

const BOOSTCompatible = (props) => {
	return (
		<div id='Answers'>
			<Header />

			<HelpTopicsHeader />

			<div className='row p-0 m-0 w-100'>
				<div className='col-12'>
					<div className='row m-0'>
						<div className='col-12'>
						<BackButton data="Back to all Help Topics" />
							<h1 id='title'>BOOST-compatible LEGO® sets</h1>
						</div>
					</div>

					<div className='row m-0' id='main-content'>
						<div className='col-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 p-0'>
							<p className='answer'>
								You can BOOST several LEGO® sets by adding the 17101 LEGO® BOOST
								Creative Toolbox (sold separately) to create an even more
								awesome experience!
							</p>

							<p className='answer'>
								Get your LEGO® Creator Expert 10261 Roller Coaster moving with
								the motor, movement sensor and realistic sound effects.
							</p>

							<p className='answer'>
								Bring the LEGO® City 60194 Arctic Scout Truck to life with
								forklift controls and a color sensor.
							</p>

							<p className='answer'>
								Code the LEGO® NINJAGO® 70652 Stormbringer to fire shooters and
								activate the ejector seat.
							</p>
						</div>
					</div>
				</div>
			</div>
			<OurService />
		</div>
	);
};

export default withRouter(BOOSTCompatible);

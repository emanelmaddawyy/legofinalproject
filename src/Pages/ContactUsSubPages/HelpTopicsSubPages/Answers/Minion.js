import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import BackButton from '../../../../components/BackButton/BackButton';
import Header from '../../../../components/Header/Header';
import HelpTopicsHeader from '../../../../components/HelpTopicsHeader/HelpTopicsHeader';
import OurService from '../../../../components/OurService/OurService';
import './Answers.css';

const Minion = (props) => {
	return (
		<div id='Answers'>
			<Header />

			<HelpTopicsHeader />

			<div className='row p-0 m-0 w-100'>
				<div className='col-12'>
					<div className='row m-0'>
						<div className='col-12'>
						<BackButton data="Back to all Help Topics" />
							<h1 id='title'>
								LEGO® Minions 75551 Brick-built Minions and their Lair
							</h1>
						</div>
					</div>

					<div className='row m-0' id='main-content'>
						<div className='col-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 p-0'>
							<p className='answer'>
								Builders may find Kevin's eye falls off easily while playing or
								building with this set. We've made a change to the building
								instructions (pages 39 – 41, steps 63 – 65) to correct this
								issue.
							</p>

							<p class='text-center'>
								<img src='/minions-pg1.png' alt='' width='100%' />
							</p>
							<p class='text-center'>
								<img src='/minions-pg2.png' alt='' width='100%' />
							</p>
							<p class='text-center'>
								<img src='/minions-pg3.png' alt='' width='100%' />
							</p>
							<p class='text-center'>
								<img src='/minions-pg4.png' alt='' width='100%' />
							</p>
						</div>
					</div>
				</div>
			</div>
			<OurService />
		</div>
	);
};

export default withRouter(Minion);

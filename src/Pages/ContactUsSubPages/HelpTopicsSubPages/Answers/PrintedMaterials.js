import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from '../../../../components/Header/Header';
import HelpTopicsHeader from '../../../../components/HelpTopicsHeader/HelpTopicsHeader';
import OurService from '../../../../components/OurService/OurService';
import BackButton from '../../../../components/BackButton/BackButton'
import './Answers.css';

const PrintedMaterials = (props) => {
	return (
		<div id='Answers'>
			<Header />

			<HelpTopicsHeader />

			<div className='row p-0 m-0 w-100'>
				<div className='col-12'>
					<div className='row m-0'>
						<div className='col-12'>
							
							<BackButton data='Back to all Help Topics' />
							<h1 id='title'>FSC® logo on printed materials</h1>
						</div>
					</div>

					<div className='row m-0' id='main-content'>
						<div className='col-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 p-0'>
							<p className='answer'>
								The environment is very important to us. For this reason, we’ve
								worked on strict guidelines related to the Forest Stewardship
								Council® (FSC®). The FSC® is an international, non-governmental
								organization dedicated to promoting responsible management of
								the world’s forests. This certification guarantees that animal
								and plant life in the forest are protected. It also sets high
								standards for training and safety equipment for everyone who
								works in the forest as well as a fair pay.
							</p>
						</div>
					</div>
				</div>
			</div>
			<OurService />
		</div>
	);
};

export default withRouter(PrintedMaterials);

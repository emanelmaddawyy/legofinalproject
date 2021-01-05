import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import BackButton from '../../../../components/BackButton/BackButton';
import Header from '../../../../components/Header/Header';
import HelpTopicsHeader from '../../../../components/HelpTopicsHeader/HelpTopicsHeader';
import OurService from '../../../../components/OurService/OurService';
import './Answers.css';

const Jobs = (props) => {
	return (
		<div id='Answers'>
			<Header />

			<HelpTopicsHeader />

			<div className='row p-0 m-0 w-100'>
				<div className='col-12'>
					<div className='row m-0'>
						<div className='col-12'>
						<BackButton data="Back to all Help Topics" />
							<h1 id='title'>Jobs with The LEGO Group</h1>
						</div>
					</div>

					<div className='row m-0' id='main-content'>
						<div className='col-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 p-0'>
							<p className='answer'>
								If you’re interested in working for The LEGO Group, then you
								should check out the current job postings on our website. Simply
								go to LEGO.com/careers and follow the directions to submit your
								resume. We'd love to hear from you!
							</p>

							<p className='answer'>
								For LEGOLAND® vacancies, please go to LEGOLAND.com.
							</p>
						</div>
					</div>
				</div>
			</div>
			<OurService />
		</div>
	);
};

export default withRouter(Jobs);

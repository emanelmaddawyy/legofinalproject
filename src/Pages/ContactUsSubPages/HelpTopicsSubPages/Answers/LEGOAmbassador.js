import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from '../../../../components/Header/Header';
import HelpTopicsHeader from '../../../../components/HelpTopicsHeader/HelpTopicsHeader';
import OurService from '../../../../components/OurService/OurService';
import './Answers.css';

const LEGOAmbassador = (props) => {
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
							<h1 id='title'>
								About the LEGO® Ambassador Network (LAN) and LEGO® User Groups
								(LUGs)
							</h1>
						</div>
					</div>

					<div className='row m-0' id='main-content'>
						<div className='col-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 p-0'>
							<p className='answer'>
								It's great to hear that you'd like to know more about our
								community for AFOLs (Adult fans of LEGO®).
							</p>

							<p className='answer'>
								A LEGO® User Group (LUG) is a group of fans that holds regular
								club meetings, builds together or even goes to conventions and
								exhibitions!
							</p>

							<p className='answer'>
								To help our AFOLs get involved, we have the LEGO® Ambassador
								Network where you can find out more about the community and help
								create the future with other LEGO® fans.
							</p>
						</div>
					</div>
				</div>
			</div>
			<OurService />
		</div>
	);
};

export default withRouter(LEGOAmbassador);

import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import BackButton from '../../../../components/BackButton/BackButton';
import Header from '../../../../components/Header/Header';
import HelpTopicsHeader from '../../../../components/HelpTopicsHeader/HelpTopicsHeader';
import OurService from '../../../../components/OurService/OurService';
import './Answers.css';

const DesignInstructions = (props) => {
	return (
		<div id='Answers'>
			<Header />

			<HelpTopicsHeader />

			<div className='row p-0 m-0 w-100'>
				<div className='col-12'>
					<div className='row m-0'>
						<div className='col-12'>
						<BackButton data="Back to all Help Topics" />
							<h1 id='title'>How we design our building instructions</h1>
						</div>
					</div>

					<div className='row m-0' id='main-content'>
						<div className='col-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 p-0'>
							<p className='answer'>
								The building instructions you find in any LEGO® set are an
								essential part of every set. Coming up with how they’ll look
								only starts once the LEGO® set is in its final form.
							</p>

							<p className='answer'>
								Once everybody in the design team is happy with the set, the
								building instruction team starts designing the instructions with
								3D software that was created just for us. The team gives and
								gets feedback and decides on the individual steps, how many
								pieces to add in each step, and the angle shown in the booklet
								among other things. They also have LEGO® bricks at hand and
								build the model many, many times in different ways to come up
								with the best way of building.
							</p>

							<p className='answer'>
								It’s a very thorough process and although they have a built
								model for reference, they start building from the ground up -
								just like you.
							</p>

							<p className='answer'>
								By the way… before we used computers and 3D software, everything
								was photographed. The final steps would be hand-drawn on a light
								table using the photos.
							</p>
						</div>
					</div>
				</div>
			</div>
			<OurService />
		</div>
	);
};

export default withRouter(DesignInstructions);

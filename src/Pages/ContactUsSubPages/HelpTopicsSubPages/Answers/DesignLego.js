import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import BackButton from '../../../../components/BackButton/BackButton';
import Header from '../../../../components/Header/Header';
import HelpTopicsHeader from '../../../../components/HelpTopicsHeader/HelpTopicsHeader';
import OurService from '../../../../components/OurService/OurService';
import './Answers.css';

const DesignLego = (props) => {
	return (
		<div id='Answers'>
			<Header />

			<HelpTopicsHeader />

			<div className='row p-0 m-0 w-100'>
				<div className='col-12'>
					<div className='row m-0'>
						<div className='col-12'>
						<BackButton data="Back to all Help Topics" />
							<h1 id='title'>How we design LEGO® sets</h1>
						</div>
					</div>

					<div className='row m-0' id='main-content'>
						<div className='col-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 p-0'>
							<p className='answer'>
								Our designers in Denmark create and test new LEGO® sets, toys
								and themes every day. We work hard to make sure our toys are
								surprising, fun and can be passed down for generations!
							</p>

							<p className='answer'>
								First, we come up with the idea for an exciting new theme, like
								LEGO® Hidden Side, or a new series within an existing theme,
								like LEGO® City Space Explorers. Then the design team works on
								coming up with different sized sets with loads of cool features
								that will appeal to a wide range of LEGO® fans.
							</p>

							<p className='answer'>
								Once they’ve figured out what kind of sets are the right ones,
								they’ll build those ideas using existing pieces, and sometimes
								design new LEGO® pieces when necessary. We do lots of testing to
								make sure the sets are fun to build and play with and can stay
								together when they’re flying or driving around.
							</p>

							<p className='answer'>
								Then, it’s on to designing the instructions, working out what
								sort of boxes the sets will need to go in, and determining what
								pictures will be on the packaging. Finally, we ship the finished
								sets off to all the stores!
							</p>
						</div>
					</div>
				</div>
			</div>
			<OurService />
		</div>
	);
};

export default withRouter(DesignLego);

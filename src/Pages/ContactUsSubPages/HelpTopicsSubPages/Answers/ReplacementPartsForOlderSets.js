import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import BackButton from '../../../../components/BackButton/BackButton';
import Header from '../../../../components/Header/Header';
import HelpTopicsHeader from '../../../../components/HelpTopicsHeader/HelpTopicsHeader';
import OurService from '../../../../components/OurService/OurService';
import './Answers.css';

const ReplacementPartsForOlderSets = (props) => {
	return (
		<div id='Answers'>
			<Header />

			<HelpTopicsHeader />

			<div className='row p-0 m-0 w-100'>
				<div className='col-12'>
					<div className='row m-0'>
						<div className='col-12'>
						<BackButton data="Back to all Help Topics" />
							<h1 id='title'>Replacement parts for older sets</h1>
						</div>
					</div>

					<div className='row m-0' id='main-content'>
						<div className='col-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 p-0'>
							<p className='answer'>
								While our designers invent new pieces all the time to make our
								toys better and more fun, we try to keep as many of the older
								parts as possible in stock!
							</p>

							<p className='answer'>
								Sometimes – and this is especially true for older sets – we run
								out of a part and don’t have the exact replacement anymore. If
								you couldn’t find the right part through our Bricks & Pieces or
								Pick A Brick services, we might still have something similar in
								our current assortment. After all, creating a new, fantastic toy
								often involves re-using our tried and tested older molds!
							</p>

							<p className='answer'>
								Of course, there are also a bunch of fan websites and other
								retailers around that might still have the part you’re looking
								for. Keep in mind that these aren’t our sites so the LEGO Group
								isn’t responsible for their content, and the items they’re
								selling could be new or used.
							</p>

							<p className='answer'>
								If you’d like a different piece or want some help finding out
								what might work instead, <Link to="/service" className="link">please to get in touch with us.</Link>
							</p>

						</div>
					</div>
				</div>
			</div>
			<OurService />
		</div>
	);
};

export default withRouter(ReplacementPartsForOlderSets);

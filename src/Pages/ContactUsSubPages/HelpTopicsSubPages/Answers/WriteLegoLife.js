import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import BackButton from '../../../../components/BackButton/BackButton';
import Header from '../../../../components/Header/Header';
import HelpTopicsHeader from '../../../../components/HelpTopicsHeader/HelpTopicsHeader';
import OurService from '../../../../components/OurService/OurService';
import './Answers.css';

const WriteLegoLife = (props) => {
	return (
		<div id='Answers'>
			<Header />

			<HelpTopicsHeader />

			<div className='row p-0 m-0 w-100'>
				<div className='col-12'>
					<div className='row m-0'>
						<div className='col-12'>
							<BackButton data='Back to all Help Topics' />
							<h1 id='title'>Write to LEGO® Life</h1>
						</div>
					</div>

					<div className='row m-0' id='main-content'>
						<div className='col-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 p-0'>
							<p className='answer'>
								Have you ever wanted to share an awesome story with other LEGO®
								Life members? You can send us letters, drawings…anything you’d
								like to share. There’s a chance it’ll get printed in the LEGO®
								Life magazine!
							</p>

							<p className='answer'>Here are some submission guidelines:</p>

							<p className='answer'>
								<ol className='ol'>
									<li>Don’t write your letter by hand, type it instead.</li>
									<li>
										If you’re sending a drawing or picture, please don’t write
										on that page.
									</li>
									<li>
										Submissions can only be sent to the email address on the
										form.
									</li>
									<li>
										Fill out the form in ALL CAPS so it’s easy for us to read!
									</li>
								</ol>
							</p>

							<p className='answer'>
								We get a lot of letters from LEGO® fans all over the world. We
								read each and every one, but we don’t have space to print all of
								them in the magazine. If your letter doesn’t make it, thank you
								for taking the time to share it with us. We love seeing the
								fantastic things our fans create!
							</p>

							<p className='answer'>We look forward to hearing from you!</p>
						</div>
					</div>
				</div>
			</div>
			<OurService />
		</div>
	);
};

export default withRouter(WriteLegoLife);

import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import BackButton from '../../../../components/BackButton/BackButton';
import Header from '../../../../components/Header/Header';
import HelpTopicsHeader from '../../../../components/HelpTopicsHeader/HelpTopicsHeader';
import OurService from '../../../../components/OurService/OurService';
import './Answers.css';

const RegisteredAccountToChild = (props) => {
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
								What to do if you registered your LEGO® Account to your child
							</h1>
						</div>
					</div>

					<div className='row m-0' id='main-content'>
						<div className='col-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 p-0'>
							<p className='answer'>
								Don’t worry, there’s an easy fix to this! When you’ve created a
								LEGO® Account using your child’s date of birth instead of your
								own, the best thing to do is to create a completely new LEGO®
								Account. To order from LEGO® Shop, you must be an adult. To
								ensure children remain safe online, we restrict child accounts
								from making any online orders.
							</p>

							<p className='answer'>
								You can use the same email address for your new LEGO® Account,
								but make sure you use your own date of birth. Once you’ve
								created a LEGO® Account for yourself, you’ll be able to check
								out online and even sign up for our LEGO® VIP Program!
							</p>

							<p className='answer'>
								If you just created your child’s LEGO® Account, you may need to
								wait up to an hour before you’re allowed to create a new one
								with your own date of birth. This is part of our effort to keep
								children safe online.
							</p>

							<p className='answer'>
								As for the LEGO® Account that’s registered to your child, you
								can keep that one so they can play safely on LEGO.com. They can
								save their best game scores, upload pictures of their awesome
								models to the galleries, and even take part in competitions.
							</p>
						</div>
					</div>
				</div>
			</div>
			<OurService />
		</div>
	);
};

export default withRouter(RegisteredAccountToChild);

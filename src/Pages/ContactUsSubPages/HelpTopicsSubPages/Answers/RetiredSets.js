import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import BackButton from '../../../../components/BackButton/BackButton';
import Header from '../../../../components/Header/Header';
import HelpTopicsHeader from '../../../../components/HelpTopicsHeader/HelpTopicsHeader';
import OurService from '../../../../components/OurService/OurService';
import './Answers.css';

const RetiredSets = (props) => {
	return (
		<div id='Answers'>
			<Header />

			<HelpTopicsHeader />

			<div className='row p-0 m-0 w-100'>
				<div className='col-12'>
					<div className='row m-0'>
						<div className='col-12'>
						<BackButton data="Back to all Help Topics" />
							<h1 id='title'>Retired LEGO® sets</h1>
						</div>
					</div>

					<div className='row m-0' id='main-content'>
						<div className='col-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 p-0'>
							<p className='answer'>
								All good things come to an end and LEGO® sets are no exception.
								Our Product Developers in Denmark invent new LEGO® toys all the
								time. They spend hours trying to create models that are better
								and more fun than ever before. This means we sometimes have to
								stop making a few of the older sets and our selection does
								change regularly.
							</p>

							<p className='answer'>
								I hope one of our many new LEGO® toys will inspire you. To take
								a look through the hundreds of sets we currently have available,
								go to{' '}
								<Link to='/' className='link'>
									LEGO.com
								</Link>{' '}
								and see what catches your eye.
							</p>

							<p className='answer'>
								You may be able to still find some older sets through different
								retailers or online shops. Keep in mind that these aren’t our
								websites so the LEGO Group isn’t responsible for their content,
								and the items they’re selling could be new or used.
							</p>

							<p className='answer'>
								<p className='row'>
									<p className='col-6'>
										Here’s a list of some popular retired LEGO® themes:
										<ul className='ul'>
											<li>LEGO® BIONICLE®</li>
											<li>LEGO® Castle</li>
											<li>LEGO® Elves</li>
											<li>LEGO® FUSION</li>
											<li>LEGO® Games</li>
											<li>LEGO® Hero Factory</li>
											<li>LEGO® Legends of CHIMA™</li>
											<li>LEGO® Life of George</li>
											<li>LEGO® The Lord of the Rings™</li>
											<li>LEGO® Master Builder Academy</li>
											<li>LEGO® Mixels™</li>
											<li>The LEGO® Movie™</li>
											<li>LEGO® Pirates</li>
											<li>LEGO® Scooby-Doo™</li>
											<li>LEGO® The Hobbit™</li>
										</ul>
									</p>
									<p className='col-6'>
										<p class='text-center'>
											<img src='/HT0069_1.png' alt='' width='100%' />
										</p>
									</p>
								</p>
							</p>

							<p className='answer'></p>

							<p className='answer'></p>

							<p className='answer'></p>

							<h3 className='question'></h3>
							<p className='answer'></p>

							<h3 className='question'></h3>
							<p className='answer'></p>

							<h3 className='question'></h3>
							<p className='answer'></p>

							<h3 className='question'></h3>
							<p className='answer'></p>

							<h3 className='question'></h3>
							<p className='answer'></p>
						</div>
					</div>
				</div>
			</div>
			<OurService />
		</div>
	);
};

export default withRouter(RetiredSets);

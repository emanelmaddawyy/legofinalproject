import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from '../../../../components/Header/Header';
import HelpTopicsHeader from '../../../../components/HelpTopicsHeader/HelpTopicsHeader';
import OurService from '../../../../components/OurService/OurService';
import './Answers.css';

const ComparingBricksPlates = (props) => {
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
								Comparing LEGO® bricks, plates, and DUPLO® bricks
							</h1>
						</div>
					</div>

					<div className='row m-0' id='main-content'>
						<div className='col-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 p-0'>
							<p className='answer'>
								When it comes to understanding how our designers can create such
								elaborate and detailed sets, it all comes back to the humble
								LEGO® brick. One of the things that makes our bricks unique is
								that our factory teams work really hard to make sure they’re
								super accurate… every single brick we make must fit together
								exactly to make sure our fans can enjoy the best building
								experience.
							</p>
							<p class='text-center'>
								<img src='/HT0280_1.png' alt='' width='50%' />
							</p>
							<p className='answer'>
								If you’d like to know more, here’s some more info on how the
								most common bricks stack up.
							</p>

							<h3 className='question'>Flat plate</h3>
							<p className='answer'>
								Meet the ‘flat plate’. This is one of our smallest bricks… but
								it’s super handy for detailed models. And, if you stack three of
								these on top of each other, they’ll be exactly the same size as
								our regular 1x1 brick. Top tip: If you need to separate these
								bricks again later, it’s best to use a brick separator as they
								have a lot of clutch power.
							</p>

							<h3 className='question'>‘Two by one’ and ‘two by four’</h3>
							<p className='answer'>
								Next, let’s introduce you to the 2x1 and the 2x4. You’ll find
								these in pretty much every LEGO® Set (except LEGO® Technic
								models which use a different building system). The 2x1 brick is
								one of our oldest elements around… we started making it in 1952!
								If you turn the 2x1 brick upside down, you’ll see it’s designed
								with a solid tube that gives it extra clutch power.
							</p>

							<h3 className='question'>‘Two by four’</h3>
							<p className='answer'>
								As you might have guessed by the name, the 2x4 brick is four
								times as long as the 2x1.
							</p>

							<p className='answer'>
								Over time, the black 2x4 brick has made an appearance in over
								540 LEGO® Sets! It features three hollow tubes on the inside so
								it sticks really well to other bricks.
							</p>

							<h3 className='question'>DUPLO® bricks</h3>
							<p class='text-center'>
								<img src='/HT0280_2.png' alt='' width='50%' />
							</p>

							<p className='answer'>
								Our DUPLO® bricks are scaled up to be twice the size of our
								regular LEGO® bricks. Our research has shown that the larger
								size makes them perfect for younger LEGO® builders.
							</p>
						</div>
					</div>
				</div>
			</div>
			<OurService />
		</div>
	);
};

export default withRouter(ComparingBricksPlates);

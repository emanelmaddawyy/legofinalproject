import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import BackButton from '../../../../components/BackButton/BackButton';
import Header from '../../../../components/Header/Header';
import HelpTopicsHeader from '../../../../components/HelpTopicsHeader/HelpTopicsHeader';
import OurService from '../../../../components/OurService/OurService';
import './Answers.css';

const HowBricksMade = (props) => {
	return (
		<div id='Answers'>
			<Header />

			<HelpTopicsHeader />

			<div className='row p-0 m-0 w-100'>
				<div className='col-12'>
					<div className='row m-0'>
						<div className='col-12'>
						<BackButton data="Back to all Help Topics" />
							<h1 id='title'>How LEGO® bricks are made</h1>
						</div>
					</div>

					<div className='row m-0' id='main-content'>
						<div className='col-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 p-0'>
							<h3 className='question'>Trucks arrive</h3>
							<p className='answer'>
								It all starts with tiny plastic grains called granules which
								come in a bunch of different colors. Trucks filled with granules
								drive up to one of the LEGO® factories all around the world,
								where giant hoses suck up the granules and then dump them into
								three-story high metal silos. There are 14 silos and each one
								can hold up to 33 tons of granules. From the silos, the plastic
								granules are fed down pipes to the molding machines.
							</p>

							<h3 className='question'>We turn up the heat</h3>
							<p className='answer'>
								Inside the molding machines, the granules are superheated to a
								temperature of about 450 degrees Fahrenheit (230°C). This melted
								plastic goo is fed into molds, little metal containers shaped
								like hollow LEGO® bricks. Think of these as very complicated
								versions of the ice cube trays you keep in your own freezer. The
								molding machine applies hundreds of tons of pressure to make
								sure the bricks are shaped with perfect accuracy. Then they are
								cooled and ejected, which only takes about 10 seconds.
							</p>

							<h3 className='question'>Robots lend a hand</h3>
							<p className='answer'>
								Because of the dangerous conditions and high precision required,
								the molding process is almost completely automated. Finished
								pieces roll down conveyor belts into boxes. When a box is full,
								the molding machine sends a radio signal to one of the robot
								trucks that patrol the hall. The robot trucks are guided by
								grooves in the factory floor. They pick up full boxes and place
								them onto another conveyor belt that takes them onto the next
								step of the manufacturing process.
							</p>

							<h3 className='question'>Time to decorate</h3>
							<p className='answer'>
								What would our bricks be without lots of cool details and
								decorations? The next stop in the manufacturing process is the
								assembly halls where details are printed on and multi-part
								pieces are put together. Faces, control panels, numbers, words
								and other decorative details are stamped onto bricks by a giant
								printer. Some LEGO® pieces like minifigure legs are made up of
								several pieces that fit together. These complex pieces are
								snapped together by machines that apply pressure with great
								precision.
							</p>

							<h3 className='question'>We pack it up</h3>
							<p className='answer'>
								The final step is putting all the right pieces together to make
								complete LEGO® sets. Sets can have hundreds of different pieces,
								so the packaging process has to be fast and accurate. Boxes
								called cassettes roll on conveyor belts underneath the bins that
								hold each type of piece. The bins open and close to release the
								right number of pieces into each cassette. Finally, packing
								operators fold the boxes, add the building instructions and
								additional pieces and watch out for any machine-made mistakes.
							</p>
						</div>
					</div>
				</div>
			</div>
			<OurService />
		</div>
	);
};

export default withRouter(HowBricksMade);

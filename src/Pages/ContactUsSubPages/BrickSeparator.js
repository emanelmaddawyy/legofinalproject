import React from 'react';
import ContactUsHeader from '../../components/ContactUsHeader/ContactUsHeader';
import Header from '../../components/Header/Header';
import './BrickSeparator.css';

const BrickSeparator = () => {
	return (
		<div id='BrickSeparator'>
			<Header />

			<ContactUsHeader />

			<div className='row p-0 m-0 w-100'>
				<div className='col-12'>
					<div className='row m-0'>
						<div className='col-12'>
							<h1 id='title'></h1>
						</div>
					</div>

					<div className='row m-0' id='main-content'>
						<div className='col-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 p-0'>
							<p className='question'>
								How to use the LEGO® Art Brick Separator
							</p>
							<p className='answer'>
								Are you ready to break down your LEGO® creation and build
								something completely new with the pieces? No need to strain your
								fingers to separate hard-to-remove elements—there’s a better,
								safer way! The brick separator is the ultimate tool for taking
								apart your bricks! Just follow these un-building instructions
								and you’ll be on your way to your next LEGO build.
							</p>
							<hr />
							<p className='question'>Unsticking plates</p>
							<p className='answer'>
								Similar to our LEGO Classic Brick Separator, you can use our
								LEGO Art Brick Separator to get your plates to unstick from
								studs.
								<ol className="ol">
									<li>
										Press the stud side of the brick separator down on top of
										the piece you want to remove. You should feel it click into
										place.
									</li>
									<li>
										While holding down your creation, press down on the handle
										of the brick separator. You can use the ridges to get a good
										grip.
									</li>
									<li>
										As you press down, the angle of the brick separator should
										make the plate come off easily.
									</li>
								</ol>
							</p>
							<hr />
							<h3 className='question'>Removing bottom plates</h3>
							<p className='answer'>
								LEGO plates are excellent at sticking to the bottom of other
								LEGO elements. The brick separator can unstick them!
								<ol className="ol">
									<li>
										Attach the studs on the brick separator to the bottom of the
										LEGO plate. You should feel it click into place.
									</li>
									<li>
										Lift up on the handle, using the ridges for a secure grip.
										You may need to keep the rest of your creation from moving
										around.
									</li>
									<li>
										As you lift up, the angle of the brick separator should get
										the plate to easily pop off.
									</li>
								</ol>
							</p>
							<hr />
							<h3 className='question'>Removing multiple tiles</h3>
							<p className='answer'>
								Here’s where the LEGO Art Brick Separator really shines.
								<ol className="ol">
									<li>
										Put the flat end of the brick separator next to the tiles
										you want to remove.
									</li>
									<li>
										Press down so it lifts up the other side like a lever. Make
										sure the rest of your LEGO set isn’t moving – you may need
										to hold it in place.
									</li>
									<li>The tiles should pop right off!</li>
								</ol>
							</p>
							<hr />

							<h3 className='question'>Removing side tiles</h3>
							<p className='answer'>
								This technique works for unsticking tiles on the edge of your
								piece of art.
								<ol className="ol">
									<li>
										Put the corner of the brick separator’s flat side next to
										the tile you want to remove.
									</li>
									<li>
										Press down so it lifts up the other side like a lever. Make
										sure the rest of your LEGO set isn’t moving – you may need
										to hold it in place.
									</li>
									<li>The tile should come right off.</li>
								</ol>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BrickSeparator;

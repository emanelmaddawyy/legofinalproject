import React from 'react';
import './Slider.css';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

class Slider extends React.Component {
	render() {
		return (
			<>
				<div className='sliderWrapper'>
					<Container>
						<Carousel>
							<Carousel.Item interval={50000}>
								<Carousel.Caption>
									<p>
										<img
											src='/BFCM-live-Sitewide-Banner-1.png'
											alt='BFCM-live-Sitewide-Banner-1'
										/>
										Order volumes are high so deliveries may take longer
										<Link to='#'> Learn more</Link>
									</p>
								</Carousel.Caption>
							</Carousel.Item>

							<Carousel.Item interval={50000}>
								<Carousel.Caption>
									<p>
										<img
											src='/BFCM-live-Sitewide-Banner-2.png'
											alt='BFCM-live-Sitewide-Banner-2'
										/>
										Hurry! Black Friday offers last 11/27-11/30.
										<Link to='#'>Shop now</Link>
									</p>
								</Carousel.Caption>
							</Carousel.Item>

							<Carousel.Item>
								<Carousel.Caption interval={50000}>
									<p>
										{' '}
										<img
											src='/BFCM-live-Sitewide-Banner-6.png'
											alt='BFCM-live-Sitewide-Banner-6'
										/>
										FREE Charles Dickens set with $150 purchase*{' '}
										<Link to='#'>Shop now</Link>
									</p>
								</Carousel.Caption>
							</Carousel.Item>

							<Carousel.Item>
								<Carousel.Caption interval={50000}>
									<p>
										<img
											src='/BFCM-live-Sitewide-Banner-5.png'
											alt='BFCM-live-Sitewide-Banner-5'
										/>
										Save up to 20% on selected sets, 11/27-11/30{' '}
										<Link to='#'>Shop now</Link>
									</p>
								</Carousel.Caption>
							</Carousel.Item>
						</Carousel>
					</Container>
				</div>
			</>
		);
	}
}

export default Slider;

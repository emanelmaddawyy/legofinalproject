import React from 'react';
import './CardContainer.css';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

class CardContainer extends React.Component {
	state = {
		title: this.props.title,
		data: this.props.data || [],
	};

	render() {
		// console.log(this.props);
		// console.log('data', this.props.data);
		return (
			<div className='m-5'>
				<h2 className='mb-3'>{this.state.title}</h2>
				<CardDeck>
					{this.state.data.map((item, i) => {
						return (
							<Card key={i}>
								<Card.Img variant='top' src={item.cardImg} />
								<Card.Body>
									<Card.Title>{item.cardTitle}</Card.Title>
									<Card.Text> {item.cardBody}</Card.Text>
								</Card.Body>

								<Card.Footer>
									<Link to='#'>
										Learn More
										<img
											src='https://img.icons8.com/ios-glyphs/30/000000/chevron-right.png'
											alt=''
											height='50%'></img>
									</Link>
								</Card.Footer>
							</Card>
						);
					})}

					{/* <CardContent/> */}
				</CardDeck>
			</div>
		);
	}
}

export default CardContainer;

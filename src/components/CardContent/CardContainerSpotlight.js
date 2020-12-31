import React from 'react';
import './CardContainer.css';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import SpinnerLoader from '../common/SpinnerLoader/SpinnerLoader';
const config = require('../../config.json');


class CardContainerSpotlight extends React.Component {
	state = {
		title: this.props.title,
    products: [],
    showLoading:false
	};
  componentDidMount = async()=>{
    this.setState({showLoading: true});
    try {
      const response = await Axios.get(`${config.apiUrl}/products?limit=3spotlight=true`);
      if (response.status === 200) {
         this.setState({
          products : response.data,
          showLoading:false
         })
      } else {
        alert("Something went wrong");
      } 
    } catch (error) {
      this.setState({showLoading: false});
      alert(error);
    }
  }
	render() {
		// console.log(this.props);
		// console.log('data', this.props.data);
		return (
			<div className='m-5'>
     
				<h2 className='mb-3'>{this.state.title}</h2>
        <SpinnerLoader visible={this.state.showLoading} />
				<CardDeck>
					{this.state.products.map((item, i) => {
						return (
							<Card key={i}>
								<Card.Img variant='top' src={item.images.length > 0 ? config.imagesEndpoint+item.images[0] : "../images/def-product.png"} />
								<Card.Body>
									<Card.Title>{item.title}</Card.Title>
									<Card.Text> {item.subTitle}</Card.Text>
								</Card.Body>

								<Card.Footer>
                  <Link to={{ pathname: `/product/${item._id}` }}>
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

export default CardContainerSpotlight;

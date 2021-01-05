import React from 'react';
import './CardContainer.css';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import SpinnerLoader from '../../components/common/SpinnerLoader/SpinnerLoader';
import { toast } from 'react-toastify';
const config = require('../../config.json');


class CardContainer extends React.Component {
	state = {
		title: this.props.title,
    products: [],
    showLoading:false
	};
  componentDidMount = async()=>{
    this.setState({showLoading: true});
    try {
      const response = await Axios.get(`${config.apiUrl}/products?limit=4?trending=true`);
      if (response.status === 200) {
         this.setState({
          products : response.data,
          showLoading:false
         })
      } else {
        toast.error("Something went wrong");
      } 
    } catch (error) {
      this.setState({showLoading: false});
      toast.error(error.message);
    }
  }
	render() {
		// console.log(this.props);
		// console.log('data', this.props.data);
		return (
			<div className='m-5'>
     
				<h2 className='mb-3'>{this.state.title}</h2>
        <SpinnerLoader visible={this.state.showLoading} />
        <div className="container">
          <div className="row">
				<CardDeck>
					{this.state.products.map((item, i) => {
						return (
              <div className="col-md-3">
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
              </div>
						);
					})}

					{/* <CardContent/> */}
				</CardDeck>
        </div>
        </div>
			</div>
		);
	}
}

export default CardContainer;

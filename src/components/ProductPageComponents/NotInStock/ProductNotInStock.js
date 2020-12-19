import React from 'react';
import { withRouter } from 'react-router-dom';
import AddToWishlistBtn from '../Shared/AddToWishlistBtn/AddToWishlistBtn';

import NotifyWhenInStockModal from './NotifyWhenInStockModal/NotifyWhenInStockModal';

import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';

import './ProductNotInStock.css';

const ProductNotInStock = (props) => {
	return (
		<>
			<ListGroup.Item className='priceStyle px-0'>
				{props.location.state.price}
			</ListGroup.Item>
			<ListGroup.Item className='notAvailable px-0'>
				Temporarily out of stock
			</ListGroup.Item>
			<ListGroup.Item className='px-0'>
				<Row>
					<Col lg={6} className='mb-2'>
						<AddToWishlistBtn />
					</Col>
					<Col lg={6}>
						<NotifyWhenInStockModal />
					</Col>
				</Row>
			</ListGroup.Item>
		</>
	);
};

export default withRouter(ProductNotInStock);

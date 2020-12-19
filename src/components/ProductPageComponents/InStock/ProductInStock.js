// import React, { useEffect } from 'react';
import React from 'react';

import { withRouter } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';
import NumberInput from './NumberInput/NumberInput';
import Tooltip from './Tooltip/Tooltip';
import TooltipLeft from './Tooltip/TooltipLeft';
import AddToBagBtn from './AddToBagBtn/AddToBagBtn';
import AddToWishlistBtn from '../Shared/AddToWishlistBtn/AddToWishlistBtn';

import './ProductInStock.css';

const ProductInStock = (props) => {
	// console.log('ProductInStock props', props.function1)

	// useEffect(() => {
	// 	console.log(document.getElementsByClassName('add2bag ')[0],props.location.state.numberOfProduct)
	// 	console.log(`i've been called ${functionCounter} times`);
	// });
	// 	// }, []);

	return (
		<>
			<ListGroup.Item className='priceStyle px-0 pt-0'>
				{props.location.state.price}
			</ListGroup.Item>

			<ListGroup.Item className='available px-0'>Available now</ListGroup.Item>

			<ListGroup.Item className='px-0'>
				<NumberInput />
				<small className='ml-3 limitStyle'>{`Limit: ${props.location.state.numberOfProduct}`}</small>
				<Tooltip />
				<TooltipLeft />
			</ListGroup.Item>

			<ListGroup.Item className='px-0'>
				<AddToBagBtn
					limit={props.location.state.numberOfProduct}
					showToastFunction={props.showToastFunction}
				/>
				<AddToWishlistBtn />
			</ListGroup.Item>
		</>
	);
};

export default withRouter(ProductInStock);

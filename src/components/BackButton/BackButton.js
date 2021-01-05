import React from 'react';
import { withRouter } from 'react-router-dom';
// import './BackButton.css';
// get the style from the page instead of taking it from the component so you can have different styles for the same component and you won't have to make multiple component doing the same functionality

const BackButton = (props) => {
	return (
		<>
			<button
				className='btn d-flex align-items-center'
				id='backBtn'
				onClick={props.history.goBack}>
				<img src='/left-arrow.svg' alt='' height='10px' />
				<div id='back-text'>{props.data}</div>
			</button>
		</>
	);
};

export default withRouter(BackButton);

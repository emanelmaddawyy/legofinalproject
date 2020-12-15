import React from 'react';
import './checkbox.css';

class Checkbox extends React.Component {
	render() {
		return (
			<div className='checkbox-wrapper'>
				<input type='checkbox' id='check' hidden />
				<label for='check' class='checkmark'></label>
			</div>
		);
	}
}

export default Checkbox;

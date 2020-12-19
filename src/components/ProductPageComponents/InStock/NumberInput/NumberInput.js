import React from 'react';
import { withRouter } from 'react-router-dom';
import './NumberInput.css';

const NumberInput = (props) => {
	// console.log('NumberInput',props.location.state);

	function increaseValue() {
		var value = parseInt(document.getElementById('number').value, 10);
		value = isNaN(value) ? 0 : value;
		if (value >= props.location.state.countInStock-1) {
            value = props.location.state.countInStock;
            document.getElementsByClassName('input-number-increment')[0].classList.add("lowOpacity")
		} else {
            value++;
            document.getElementsByClassName('input-number-decrement')[0].classList.remove("lowOpacity")
		}
		document.getElementById('number').value = value;
	}

	function decreaseValue() {
		var value = parseInt(document.getElementById('number').value, 10);
		// value = isNaN(value) ? 0 : value;
		if (value <= 2) {
            value = 1;
            document.getElementsByClassName('input-number-decrement')[0].classList.add("lowOpacity")
		} else {
            value--;
            document.getElementsByClassName('input-number-increment')[0].classList.remove("lowOpacity")
		}

		document.getElementById('number').value = value;
	}

	return (
		<>
			<span class='input-number-decrement' onClick={decreaseValue}>
				–
			</span>
			<input class='input-number' id='number' type='text' value='1' />
			<span class='input-number-increment' onClick={increaseValue}>
				+
			</span>
		</>
	);
};

export default withRouter(NumberInput);

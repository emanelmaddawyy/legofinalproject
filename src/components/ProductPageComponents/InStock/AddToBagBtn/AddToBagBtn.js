// import React, { useState, useEffect } from 'react';
import React from 'react';
import './AddToBagBtn.css';
// import Alert from 'react-bootstrap/Alert';
// import Button from 'react-bootstrap/Button';


const AddToBagBtn = (props) => {
	// console.log('AddToBagBtn props limit',props.limit)
	// console.log('AddToBagBtn props',props.function2)

	// let [addToBag, SetAddToBag] = useState(false);



	let functionCounter = 0;

	function addToBagFun() {
		functionCounter++;
		let add2bag = document.getElementsByClassName('add2bag')[0];
		if (props.limit === functionCounter) {
			// console.log('reached the limit');
			add2bag.innerText = 'limit Exceeded';
			add2bag.classList.add('limitExceeded');
			add2bag.classList.remove('add2bag');
			add2bag.setAttribute('disabled', true);
		} else {
			// console.log(props.limit + '      ' + functionCounter);
		}
	}





	return (
		<div>
			<button
				onClick={() => {
					addToBagFun();
					props.showToastFunction();
				}}
				class='btn add2bag col-6 col-lg-12 p-2'>
				Add to Bag
			</button>
		</div>
	);
};

export default AddToBagBtn;








// import React from 'react';
// import './AddToBagBtn.css';


// const AddToBagBtn = (props) => {
// 	// console.log('AddToBagBtn props limit',props.limit)
// 	// console.log('AddToBagBtn props',props.function2)

// 	// let [addToBag, SetAddToBag] = useState(false);



// 	let functionCounter = 0;

// 	function addToBagFun() {
// 		functionCounter++;
// 		let add2bag = document.getElementsByClassName('add2bag')[0];
// 		if (props.limit === functionCounter) {
// 			// console.log('reached the limit');
// 			add2bag.innerText = 'limit Exceeded';
// 			add2bag.classList.add('limitExceeded');
// 			add2bag.classList.remove('add2bag');
// 			add2bag.setAttribute('disabled', true);
// 		} else {
// 			// console.log(props.limit + '      ' + functionCounter);
// 		}
// 	}



// 	return (
// 		<div>
// 			<button
// 				onClick={() => {
// 					addToBagFun();
// 					props.showToastFunction();
// 				}}
// 				class='btn add2bag col-6 col-lg-12 p-2'>
// 				Add to Bag
// 			</button>
// 		</div>
// 	);
// };

// export default AddToBagBtn;

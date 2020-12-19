import React, { useEffect } from 'react';
import Accordion from '../Accordion/Accordion';
import './Filter.css';

const Filter = (props) => {
	console.log('Filter props', props.ArchitectureAccordion)

	//will run after the page is loaded
	// uncheck checked boxes
	useEffect(() => {
		let resetBtn = document.getElementById('resetBtnStyle');
		let checkboxes = document.getElementsByClassName('getCheckBox');

		resetBtn.addEventListener('click', () => {
			for (let i = 0; i < checkboxes.length; i++) {
				if (checkboxes[i].checked) {
					checkboxes[i].checked = false;
				}
			}
		});
	}, []);

	// disable - enable reset button according to if checkbox unchecked - checked
	function checkboxClickedFun() {
		console.log('checkboxClicked');
		let checkboxes = document.getElementsByClassName('getCheckBox');
		let resetBtn = document.getElementById('resetBtnStyle');

		for (let i = 0; i < checkboxes.length; i++) {
			if (checkboxes[i].checked) {
				resetBtn.disabled = false;
				break;
			} else {
				resetBtn.disabled = true;
			}
		}
	}

	return (
		<>
			{/* <button id='resetBtnStyle' disabled onClick={EnableReset}> */}
			<button id='resetBtnStyle' disabled>
				Reset All
			</button>

			{props.ArchitectureAccordion.map((item, i) => {
				// console.log('item!!!!', item);
				return (
					<Accordion
						title={item.title}
						filters={item.filters}
						checkboxClickedFun={checkboxClickedFun}
						key={i}></Accordion>
				);
			})}
		</>
	);
};

export default Filter;

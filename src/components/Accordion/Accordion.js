import './Accordion.css';
import React, { useState, useRef, useEffect } from 'react';

const Accordion = (props) => {
	// console.log('accordion props!', props);

	const [active, setActive] = useState(false);
	const contentRef = useRef(null);

	useEffect(() => {
		contentRef.current.style.maxHeight = active
			? `${contentRef.current.scrollHeight}px`
			: '0px';
	}, [contentRef, active]);

	const toogleActive = () => {
		setActive(!active);
		// console.log('active',active);
	};

	return (
		<>
			<div className='accordion-section'>
				<button className='accordion-title' onClick={toogleActive}>
					<p className='titleStyle'>{props.title}</p>
					<span className={active ? 'accordion-icon rotate' : 'accordion-icon'}>
						<img
							src='https://img.icons8.com/metro/24/000000/chevron-down.png'
							alt=''
						/>
					</span>
				</button>

				<div ref={contentRef} className='accordion-content'>
					<ul className='accordionUlStyle'>
						{props.filters.map((item, i) => {
							// console.log('item',Object.values(item))
							return (
								<li className='accordionListStyle'>
									<label className='checkbox-label'>
										<input
											type='checkbox'
											className='getCheckBox'
											onClick={props.checkboxClickedFun}
										/>
										<span>{Object.values(item)}</span>
										{/* <span>{props.children}</span> */}
									</label>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</>
	);
};

export default Accordion;

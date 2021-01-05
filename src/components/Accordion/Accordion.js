import './Accordion.css';
import React, { useState, useRef, useEffect } from 'react';

const Accordion = (props) => {
	const [active, setActive] = useState(false);
  const contentRef = useRef(null);

	useEffect(() => {
		contentRef.current.style.maxHeight = active
			? `${contentRef.current.scrollHeight}px`
			: '0px';
	}, [contentRef, active]);

	const toogleActive = () => {
		setActive(!active);
  };

	return (
		<>
			<div className='accordion-section'>
				<button className='accordion-title' onClick={toogleActive}>
					<p className='titleStyle'>{props.filter.title}</p>
					<span className={active ? 'accordion-icon rotate' : 'accordion-icon'}>
						<img
							src='https://img.icons8.com/metro/24/000000/chevron-down.png'
							alt=''
						/>
					</span>
				</button>

				<div ref={contentRef} className='accordion-content'>
					<ul className='accordionUlStyle'>
						{props.filter.data.map((item, i) => {
							return (
								<li className='accordionListStyle'>
									<label className='checkbox-label'>
										<input
											type='checkbox'
                      className='getCheckBox'
                      checked={item.checked || false}
											onChange={() => props.filterChangeHandler(props.filter.key, item._id)}
										/>
										<span>{item.title}</span>
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
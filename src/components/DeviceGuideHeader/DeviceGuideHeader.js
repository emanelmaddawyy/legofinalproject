import React from 'react';
import { Link } from 'react-router-dom';
import './DeviceGuideHeader.css';

const DeviceGuideHeader = () => {
	return (
		<>
			<header className='headerStyle2'>
				<div>
					<Link to='/service'>
						<h1 className='m-0'>Customer Service</h1>
					</Link>
				</div>
				<nav>
					<ul className='nav_list'>
						<Link to='/help'>
							<li>Help Topics</li>
						</Link>

						<Link to='/deviceguide'>
							<li className='activeHelpTopics'>Device Guide</li>
						</Link>
					</ul>
				</nav>
			</header>
		</>
	);
};

export default DeviceGuideHeader;

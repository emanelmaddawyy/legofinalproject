import React from 'react';
import { Link } from 'react-router-dom';
import "./ContactUsHeader.css"

const ContactUsHeader = () => {
	return (
		<div>
			<header className='ContactUsHeaderStyle'>
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
							<li className='activeContactUs'>Device Guide</li>
						</Link>
					</ul>
				</nav>
			</header>
		</div>
	);
};

export default ContactUsHeader;

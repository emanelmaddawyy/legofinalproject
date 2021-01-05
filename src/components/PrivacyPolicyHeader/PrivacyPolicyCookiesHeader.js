import React from 'react';
import { Link } from 'react-router-dom';
import './PrivacyPolicyHeader.css';

const PrivacyPolicyHeader = () => {
	return (
		<div>
			<header className='PrivacyPolicyHeaderStyle'>
				<div>
					<Link to='/privacypolicy'>
						<h1 className='m-0'>legal</h1>
					</Link>
				</div>
				<nav>
					<ul className='nav_list'>
						<Link to='/privacypolicy'>
							<li>Notices & Policies</li>
						</Link>

						<Link to='/privacypolicycookies'>
							<li id='activeLink'>Cookies</li>
						</Link>
					</ul>
				</nav>
			</header>
		</div>
	);
};

export default PrivacyPolicyHeader;

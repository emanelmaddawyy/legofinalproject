import React from 'react';
import { withRouter } from 'react-router-dom';
import './MediaArticle.css';

const MediaArticle = (props) => {
	return (
		<div id='MediaWrapper'>
			<div className=' justify-content-center' id='Media'>
				<div className='row  align-items-center'>
					<div className='col-9'>
						<div className='row'>{props.text}</div>
					</div>
					<div className='col-1'>
						<img src='/right-arrow.svg' alt='' className='right-arrow' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default withRouter(MediaArticle);

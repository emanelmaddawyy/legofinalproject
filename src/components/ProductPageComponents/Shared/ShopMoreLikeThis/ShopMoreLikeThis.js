import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './ShopMoreLikeThis.css';

const ShopMoreLikeThis = (props) => {
	// console.log('ShopMoreLikeThis props', props);
	return (
		<div className='ShopmorelikethisStyle'>
			<p>Shop more like this:</p>
			<p>
				<Link to={"/"+props.location.state.theme}>
					<span className='ShopmorelikethisItems'>
						{props.location.state.theme}
					</span>
				</Link>
				{/* <Link to={"/"+props.location.state.interests}>
                    <span className='ShopmorelikethisItems'>
                        {props.location.state.interests}
                    </span>
				</Link> */}
			</p>
		</div>
	);
};

export default withRouter(ShopMoreLikeThis);

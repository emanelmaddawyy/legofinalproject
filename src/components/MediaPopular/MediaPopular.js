import React from 'react';
import { Link } from 'react-router-dom';
import MediaArticle from '../MediaArticle/MediaArticle';
import './MediaPopular.css';

const MediaPopular = () => {
	return (
		<div id='popularArticles'>
			<header>
				<h4>Popular articles</h4>
			</header>

			<Link to='/covidresponse'>
				<MediaArticle text={'Our updates on COVID-19'} />
			</Link>

			<Link to='/legoavailabilitystatuses'>
				<MediaArticle text={'LEGO.com availability statuses'} />
			</Link>

			<Link to='/identifyinglegoset'>
				<MediaArticle text={'Identifying LEGO® set and part numbers'} />
			</Link>

			<Link to='/buyingindividualparts'>
				<MediaArticle text={'Buying individual LEGO® parts'} />
			</Link>

			<Link to='/creatingminifigure'>
				<MediaArticle text={'Creating your own minifigure'} />
			</Link>

			<Link to='/legodigitaldesigner'>
				<MediaArticle text={'About LEGO® Digital Designer'} />
			</Link>

			<Link to='/replacementpartsforoldersets'>
				<MediaArticle text={'Replacement parts for older sets'} />
			</Link>
		</div>
	);
};

export default MediaPopular;

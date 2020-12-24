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
			
			<Link to="/" >
				<MediaArticle text={'Our updates on COVID-19'} />
			</Link>

			<Link to="/" >
				<MediaArticle text={'LEGO.com availability statuses'} />
			</Link>

			<Link to="/" >
				<MediaArticle text={'Identifying LEGO® sets'} />
			</Link>

			<Link to="/" >
				<MediaArticle text={'Buying individual LEGO® parts'} />
			</Link>

			<Link to="/" >
				<MediaArticle text={'Creating your own minifigure'} />
			</Link>

			<Link to="/" >
				<MediaArticle text={'About LEGO® Digital Designer'} />
			</Link>
		</div>
	);
};

export default MediaPopular;

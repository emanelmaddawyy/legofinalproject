import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './AddToWishlistBtn.css';

const AddToWishlistBtn = () => {


	function hideEmptyHeartShowFilledHeart() {
		console.log('clicked');
		var EmptyheartIcon = document.getElementById('emptyHeart');
		var FilledheartIcon = document.getElementById('filledHeart');

		// if (EmptyheartIcon.style.display === 'none') {
		// 	EmptyheartIcon.style.display = 'inline-block';
		// 	FilledheartIcon.style.display = 'none';
		// } else {
		// 	EmptyheartIcon.style.display = 'none';
		// 	FilledheartIcon.style.display = 'inline-block';
		// }

		EmptyheartIcon.style.display = 'none';
		FilledheartIcon.style.display = 'inline-block';
	}

	return (
		<div>
			<span
				onClick={hideEmptyHeartShowFilledHeart}
				class=' AddToWishlistStyle pl-1'>
				<i class='far fa-heart pr-2' id='emptyHeart' />
				<i class='fas fa-heart pr-2' id='filledHeart' />
				<span>Add To Wishlist</span>
			</span>
		</div>
	);
};

export default AddToWishlistBtn;

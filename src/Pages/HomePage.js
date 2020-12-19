import './HomePage.css';
import ProductSlider from '../components/Slider/ProductSlider';
import Slider from '../components/Slider/Slider';
import CardContainer from '../components/CardContent/CardContainer';

//If You Want to make it class not a function you will use this.props
const HomePage = ({
	products,
	TrendingTitle,
	TrendingData,
	SpotlightTitle,
	SpotlightData,
	addProductToCart,
	addProductToWishlist,
}) => {
	return (
		<>
			<Slider />
			<CardContainer title={TrendingTitle} data={TrendingData} />
			<CardContainer title={SpotlightTitle} data={SpotlightData} />
			<ProductSlider
				title="Featured sets"
				products={products}
				addProductToCart={addProductToCart}
				addProductToWishlist={addProductToWishlist}
			/>
		</>
	);
};

export default HomePage;

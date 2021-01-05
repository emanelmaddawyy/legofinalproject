import './HomePage.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Slider from '../components/Slider/Slider';
import CardContainer from '../components/CardContent/CardContainer';
import CardContainerSpotlight from '../components/CardContent/CardContainerSpotlight';
import Adv from "../components/Adv/Adv";
import MainCategory from "../components/MainCategory/MainCategory"
import NewProductsSlider from '../components/NewProductsSlider/NewProductsSlider';
import AdvTow from '../components/AdvTow/Adv';

const HomePage = () => {
	return (
		<>
      <Header />
			<Slider />
      <Adv/>
			<CardContainer title="Trending"/>
      <AdvTow/>
			<CardContainerSpotlight title="Spotlight on"/>
			<NewProductsSlider />
      <Footer/>
		</>
	);
};

export default HomePage;

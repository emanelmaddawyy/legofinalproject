import './HomePage.css';
import Header from '../components/Header/Header';
import Slider from '../components/Slider/Slider';
import CardContainer from '../components/CardContent/CardContainer';
import CardContainerSpotlight from '../components/CardContent/CardContainerSpotlight';
import Adv from "../components/Adv/Adv";
import MainCategory from "../components/MainCategory/MainCategory"
import NewProductsSlider from '../components/NewProductsSlider/NewProductsSlider';
import loggedModule from '../modules/LoggedUserModule';


const HomePage = () => {
	return (
		<>
      <Header />
			<Slider />
      <Adv/>
      <MainCategory/>
			<CardContainer title="Trending"/>
			<CardContainerSpotlight title="Spotlight on"/>
			<NewProductsSlider />
		</>
	);
};

export default HomePage;

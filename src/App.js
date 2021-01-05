import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-multi-carousel/lib/styles.css';

import { Component } from 'react';

import HomePage from './Pages/HomePage';
import RegisterPage from './Pages/RegisterPage';
import LoginPage from './Pages/LoginPage';
import UsersPage from './Pages/UsersPage';
import AboutusPage from './Pages/AboutusPage'
import FindstorePage from './Pages/FindstorePage';
import AdminPage from './Pages/AdminPage';
import OffersPage from './Pages/Offers&Sale';
import ExclusivesPage from './Pages/ExclusivesPage';
import Writecode from './Pages/Writecode';
import ForgetPasswordPage from './Pages/ForgetPasswordPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ArchitecturePage from './Pages/ArchitecturePage';
import LegoLifePage from './Pages/LegoLifePage';
import ProductPage from './Pages/ProductPage';
import CartPage from './Pages/CartPage';
import WishListPage from './Pages/WishlistPage';
import './App.css';
import './Pages/HomePage.css';
import VipPage from './Pages/VipPage';
import SearchPage from './Pages/SearchPage';

import Rating from './components/Rating/Rating';
import Order from './components/Order/Order';



//mazen

import ScrollToTop from './components/ScrollToTop';
import LegoLifeAppPage from './Pages/LegoLifeSubPages/LegoLifeAppPage';
import LegoLifeFAQPage from './Pages/LegoLifeSubPages/LegoLifeFAQPage';
import LegoLifeMagazinePage from './Pages/LegoLifeSubPages/LegoLifeMagazinePage';
import ContactUs from './Pages/ContactUs';
import ContactUsHelpTopics from './Pages/ContactUsSubPages/ContactUsHelpTopics';
import ContactUsDeviceGuide from './Pages/ContactUsSubPages/ContactUsDeviceGuide';
import BrickSeparator from './Pages/ContactUsSubPages/BrickSeparator';
import KeepDataSafe from './Pages/ContactUsSubPages/KeepDataSafe';
import Deliveries from './Pages/ContactUsSubPages/HelpTopicsSubPages/Deliveries';
import OnlineShop from './Pages/ContactUsSubPages/HelpTopicsSubPages/OnlineShop';
import BrickFacts from './Pages/ContactUsSubPages/HelpTopicsSubPages/BrickFacts';
import BuildingInstructions from './Pages/ContactUsSubPages/HelpTopicsSubPages/BuildingInstructions';
import BuyingParts from './Pages/ContactUsSubPages/HelpTopicsSubPages/BuyingParts';
import HelpContactUs from './Pages/ContactUsSubPages/HelpTopicsSubPages/HelpContactUs';
import LegoAccount from './Pages/ContactUsSubPages/HelpTopicsSubPages/LegoAccount';
import ElectronicsRobotics from './Pages/ContactUsSubPages/HelpTopicsSubPages/ElectronicsRobotics';
import ThemesSets from './Pages/ContactUsSubPages/HelpTopicsSubPages/ThemesSets';
import LegoEventsTours from './Pages/ContactUsSubPages/HelpTopicsSubPages/LegoEventsTours';
import LegoLand from './Pages/ContactUsSubPages/HelpTopicsSubPages/LegoLand';
import CovidResponse from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/CovidResponse';
import LegoAvailabilityStatuses from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/LegoAvailabilityStatuses';
import BuyingIndividualParts from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/BuyingIndividualParts';
import ReplacementPartsForOlderSets from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/ReplacementPartsForOlderSets';
import CreatingMinifigure from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/CreatingMinifigure';
import LegoDigitalDesigner from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/LegoDigitalDesigner';
import IdentifyingLegoSet from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/IdentifyingLegoSet';
import TrackingOrders from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/TrackingOrders';
import WhenPartsDelivered from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/WhenPartsDelivered';
import BackorderedItems from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/BackorderedItems';
import MissingParts from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/MissingParts';
import WrongDamagedOrders from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/WrongDamagedOrders';
import BricksTakingLong from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/BricksTakingLong';
import ChangeRegion from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/ChangeRegion';
import OrderingOnline from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/OrderingOnline';
import ShopWebErrors from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/ShopWebErrors';
import CancelOrder from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/CancelOrder';
import AddPromotional from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/AddPromotional';
import LegoGiftCard from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/LegoGiftCard';
import RecyclingLego from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/RecyclingLego';
import CleaningLego from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/CleaningLego';
import ComparingBricksPlates from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/ComparingBricksPlates';
import WhatBricksMadeOf from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/WhatBricksMadeOf';
import HowBricksMade from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/HowBricksMade';
import WaterProof from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/WaterProof';
import BuildingTips from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/BuildingTips';
import ReplaceInstructions from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/ReplaceInstructions';
import DesignInstructions from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/DesignInstructions';
import PrintedMaterials from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/PrintedMaterials';
import Minion from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/Minion';
import ReplacingBuyingMinifigures from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/ReplacingBuyingMinifigures';
import BuyLicensedParts from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/BuyLicensedParts';
import WriteLegoLife from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/WriteLegoLife';
import Jobs from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/Jobs';
import CustomerServiceTeam from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/CustomerServiceTeam';
import CoolCreation from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/CoolCreation';
import SellingLego from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/SellingLego';
import ContactingCustomerService from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/ContactingCustomerService';
import RegisteredAccountToChild from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/RegisteredAccountToChild';
import AccountandHowToUseIt from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/AccountandHowToUseIt';
import SubscribeToNewsLetter from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/SubscribeToNewsLetter';
import DeleteAccount from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/DeleteAccount';
import DidntGetEmail from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/DidntGetEmail';
import CantRememberUsername from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/CantRememberUsername';
import MakingChangesToAccount from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/MakingChangesToAccount';
import ConnectLegoBoost from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/ConnectLegoBoost';
import BOOSTCompatible from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/BOOSTCompatible';
import MindStorm from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/MindStorm';
import HearingSound from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/HearingSound';
import StarWars from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/StarWars';
import LightLegoBoost from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/LightLegoBoost';
import RetiredSets from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/RetiredSets';
import DesignLego from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/DesignLego';
import PriceLego from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/PriceLego';
import BuyLego from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/BuyLego';
import NewSetsAvailable from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/NewSetsAvailable';
import LEGOAmbassador from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/LEGOAmbassador';
import EventsNearYou from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/EventsNearYou';
import LegoInside from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/LegoInside';
import DiscoveryCenterApp from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/DiscoveryCenterApp';
import LEGOHouse from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/LEGOHouse';
import EventsAtStores from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/EventsAtStores';
import LEGOLANDlocations from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/LEGOLANDlocations';
import LEGOLANDSupport from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/LEGOLANDSupport';
import DiscoveryAroundTheWorld from './Pages/ContactUsSubPages/HelpTopicsSubPages/Answers/DiscoveryAroundTheWorld';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import PrivacyPolicyCookies from './Pages/PrivacyPolicyCookies';
import Shipping from './Pages/Shipping';
import MarioApp from './Pages/DeviceGuideSubPages/MarioApp';
import MindstormRobot from './Pages/DeviceGuideSubPages/MindstormRobot';
import BoostStarwars from './Pages/DeviceGuideSubPages/BoostStarwars';
import ControlPlus from './Pages/DeviceGuideSubPages/ControlPlus';
import PoweredUp from './Pages/DeviceGuideSubPages/PoweredUp';
import HiddenSide from './Pages/DeviceGuideSubPages/HiddenSide';
import ARPhotoShoot from './Pages/DeviceGuideSubPages/ARPhotoShoot';
import BoostApp from './Pages/DeviceGuideSubPages/BoostApp';
import MovieMakerApp from './Pages/DeviceGuideSubPages/MovieMakerApp';
import DuploApp from './Pages/DeviceGuideSubPages/DuploApp';
import LegogroupPage from './Pages/LegogroupPage';
import Footer from './components/Footer/Footer'
import { ToastContainer } from 'react-toastify';



class App extends Component {

	render() {
		return (<>
      <BrowserRouter>
        <Switch>
          <Route path="/Login" exact component={LoginPage} />
          <Route path="/Register" exact component={RegisterPage} />
          <Route path="/users" exact component={UsersPage} />
          <Route path="/aboutus" exact component={AboutusPage} />
          <Route path="/findstore" exact component={FindstorePage} />
          <Route path="/legolife" exact component={LegoLifePage} />
          <Route path="/admin" exact component={AdminPage} />
          <Route path="/offers" exact component={OffersPage} />
          <Route path="/exclusives" exact component={ExclusivesPage} />
          <Route path="/writecode" exact component={Writecode} />
          <Route path="/forgetpassword" exact component={ForgetPasswordPage} />
          <Route path='/' exact component={HomePage} />
          <Route path='/legolife' exact component={LegoLifePage} />
          <Route path='/cart' exact component={CartPage} />
          <Route path='/wishlist' exact component={WishListPage} />
          <Route path='/product/:id' exact component={ProductPage} />
          <Route path='/vip' exact component={VipPage} />
          <Route path='/orders' exact component={Order} />
          <Route path='/legogroup' exact component={LegogroupPage} />


          <Route
            component={ArchitecturePage}
            path='/products/:key/:id'
            exact></Route>

          <Route
						path='/legolifeapp'
						exact
						component={() => <LegoLifeAppPage />}></Route>

					<Route
						path='/legolifemagazine'
						exact
						component={() => <LegoLifeMagazinePage />}></Route>

					<Route
						path='/legolifefaq'
						exact
						component={() => <LegoLifeFAQPage />}></Route>


					<Route path='/service' exact component={() => <ContactUs />}></Route>
					<Route
						path='/help'
						exact
						component={() => <ContactUsHelpTopics />}></Route>
					<Route
						path='/deviceguide'
						exact
						component={() => <ContactUsDeviceGuide />}></Route>
					<Route
						path='/brickseparator'
						exact
						component={() => <BrickSeparator />}></Route>
					<Route
						path='/keepdatasafe'
						exact
						component={() => <KeepDataSafe />}></Route>
					<Route
						path='/deliveries'
						exact
						component={() => <Deliveries />}></Route>
					<Route
						path='/onlineshop'
						exact
						component={() => <OnlineShop />}></Route>
					<Route
						path='/brickfacts'
						exact
						component={() => <BrickFacts />}></Route>
					<Route
						path='/buildinginstructions'
						exact
						component={() => <BuildingInstructions />}></Route>
					<Route
						path='/buyingParts'
						exact
						component={() => <BuyingParts />}></Route>
					<Route
						path='/helpcontactus'
						exact
						component={() => <HelpContactUs />}></Route>
					<Route
						path='/legoaccount'
						exact
						component={() => <LegoAccount />}></Route>
					<Route
						path='/electronicsrobotics'
						exact
						component={() => <ElectronicsRobotics />}></Route>
					<Route
						path='/themessets'
						exact
						component={() => <ThemesSets />}></Route>
					<Route
						path='/legoeventstours'
						exact
						component={() => <LegoEventsTours />}></Route>
					<Route path='/legoland' exact component={() => <LegoLand />}></Route>
					<Route
						path='/covidresponse'
						exact
						component={() => <CovidResponse />}></Route>
					<Route
						path='/legoavailabilitystatuses'
						exact
						component={() => <LegoAvailabilityStatuses />}></Route>
					<Route
						path='/buyingindividualparts'
						exact
						component={() => <BuyingIndividualParts />}></Route>
					<Route
						path='/replacementpartsforoldersets'
						exact
						component={() => <ReplacementPartsForOlderSets />}></Route>
					<Route
						path='/creatingminifigure'
						exact
						component={() => <CreatingMinifigure />}></Route>
					<Route
						path='/legodigitaldesigner'
						exact
						component={() => <LegoDigitalDesigner />}></Route>
					<Route
						path='/identifyinglegoset'
						exact
						component={() => <IdentifyingLegoSet />}></Route>
					<Route
						path='/trackingorders'
						exact
						component={() => <TrackingOrders />}></Route>
					<Route
						path='/whenpartsdelivered'
						exact
						component={() => <WhenPartsDelivered />}></Route>
					<Route
						path='/backordereditems'
						exact
						component={() => <BackorderedItems />}></Route>
					<Route
						path='/missingparts'
						exact
						component={() => <MissingParts />}></Route>
					<Route
						path='/wrongdamagedorders'
						exact
						component={() => <WrongDamagedOrders />}></Route>
					<Route
						path='/brickstakinglong'
						exact
						component={() => <BricksTakingLong />}></Route>
					<Route
						path='/changeregion'
						exact
						component={() => <ChangeRegion />}></Route>
					<Route
						path='/orderingonline'
						exact
						component={() => <OrderingOnline />}></Route>
					<Route
						path='/shopweberrors'
						exact
						component={() => <ShopWebErrors />}></Route>
					<Route
						path='/cancelorder'
						exact
						component={() => <CancelOrder />}></Route>
					<Route
						path='/addpromotional'
						exact
						component={() => <AddPromotional />}></Route>
					<Route
						path='/legogiftcard'
						exact
						component={() => <LegoGiftCard />}></Route>
					<Route
						path='/recyclinglego'
						exact
						component={() => <RecyclingLego />}></Route>
					<Route
						path='/cleaninglego'
						exact
						component={() => <CleaningLego />}></Route>
					<Route
						path='/whatbricksmadeof'
						exact
						component={() => <WhatBricksMadeOf />}></Route>
					<Route
						path='/comparingbricksplates'
						exact
						component={() => <ComparingBricksPlates />}></Route>
					<Route
						path='/howbricksmade'
						exact
						component={() => <HowBricksMade />}></Route>
					<Route
						path='/buildingtips'
						exact
						component={() => <BuildingTips />}></Route>
					<Route
						path='/waterproof'
						exact
						component={() => <WaterProof />}></Route>
					<Route
						path='/replaceinstructions'
						exact
						component={() => <ReplaceInstructions />}></Route>
					<Route
						path='/designinstructions'
						exact
						component={() => <DesignInstructions />}></Route>
					<Route
						path='/printedmaterials'
						exact
						component={() => <PrintedMaterials />}></Route>
					<Route path='/minion' exact component={() => <Minion />}></Route>
					<Route
						path='/replacingbuyingminifigures'
						exact
						component={() => <ReplacingBuyingMinifigures />}></Route>
					<Route
						path='/buylicensedparts'
						exact
						component={() => <BuyLicensedParts />}></Route>
					<Route
						path='/writelegolife'
						exact
						component={() => <WriteLegoLife />}></Route>
					<Route path='/jobswithlego' exact component={() => <Jobs />}></Route>
					<Route
						path='/customerserviceteam'
						exact
						component={() => <CustomerServiceTeam />}></Route>
					<Route
						path='/coolcreation'
						exact
						component={() => <CoolCreation />}></Route>
					<Route
						path='/sellinglego'
						exact
						component={() => <SellingLego />}></Route>
					<Route
						path='/contactingcustomerservice'
						exact
						component={() => <ContactingCustomerService />}></Route>
					<Route
						path='/registeredaccounttochild'
						exact
						component={() => <RegisteredAccountToChild />}></Route>
					<Route
						path='/accountandhowtouseit'
						exact
						component={() => <AccountandHowToUseIt />}></Route>
					<Route
						path='/subscribetonewsletter'
						exact
						component={() => <SubscribeToNewsLetter />}></Route>
					<Route
						path='/cantrememberusername'
						exact
						component={() => <CantRememberUsername />}></Route>
					<Route
						path='/didntgetemail'
						exact
						component={() => <DidntGetEmail />}></Route>
					<Route
						path='/deleteaccount'
						exact
						component={() => <DeleteAccount />}></Route>
					<Route
						path='/makingchangestoaccount'
						exact
						component={() => <MakingChangesToAccount />}></Route>
					<Route
						path='/connectlegoboost'
						exact
						component={() => <ConnectLegoBoost />}></Route>
					<Route
						path='/boostcompatible'
						exact
						component={() => <BOOSTCompatible />}></Route>
					<Route
						path='/mindstorm'
						exact
						component={() => <MindStorm />}></Route>
					<Route
						path='/hearingsound'
						exact
						component={() => <HearingSound />}></Route>
					<Route path='/starwars' exact component={() => <StarWars />}></Route>
					<Route
						path='/lightlegoboost'
						exact
						component={() => <LightLegoBoost />}></Route>
					<Route
						path='/retiredsets'
						exact
						component={() => <RetiredSets />}></Route>
					<Route
						path='/designlego'
						exact
						component={() => <DesignLego />}></Route>
					<Route
						path='/pricelego'
						exact
						component={() => <PriceLego />}></Route>
					<Route path='/buylego' exact component={() => <BuyLego />}></Route>
					<Route
						path='/newsetsavailable'
						exact
						component={() => <NewSetsAvailable />}></Route>
					<Route
						path='/legoambassador'
						exact
						component={() => <LEGOAmbassador />}></Route>
					<Route
						path='/eventsnearyou'
						exact
						component={() => <EventsNearYou />}></Route>
					<Route
						path='/legoinside'
						exact
						component={() => <LegoInside />}></Route>
					<Route
						path='/discoverycenterapp'
						exact
						component={() => <DiscoveryCenterApp />}></Route>
					<Route
						path='/eventsatstores'
						exact
						component={() => <EventsAtStores />}></Route>
					<Route
						path='/legoHouse'
						exact
						component={() => <LEGOHouse />}></Route>
					<Route
						path='/legolandlocations'
						exact
						component={() => <LEGOLANDlocations />}></Route>
					<Route
						path='/legolandsupport'
						exact
						component={() => <LEGOLANDSupport />}></Route>
					<Route
						path='/disccoveryaroundtheworld'
						exact
						component={() => <DiscoveryAroundTheWorld />}></Route>
					<Route
						path='/privacypolicy'
						exact
						component={() => <PrivacyPolicy />}></Route>
					<Route
						path='/privacypolicycookies'
						exact
						component={() => <PrivacyPolicyCookies />}></Route>
					<Route path='/shipping' exact component={() => <Shipping />}></Route>

					<Route path='/marioapp' exact component={() => <MarioApp />}></Route>
					<Route
						path='/mindstormrobot'
						exact
						component={() => <MindstormRobot />}></Route>
					<Route
						path='/booststarwars'
						exact
						component={() => <BoostStarwars />}></Route>
					<Route
						path='/controlplus'
						exact
						component={() => <ControlPlus />}></Route>
					<Route
						path='/poweredup'
						exact
						component={() => <PoweredUp />}></Route>
					<Route
						path='/hiddenside'
						exact
						component={() => <HiddenSide />}></Route>
					<Route
						path='/arphotoshoot'
						exact
						component={() => <ARPhotoShoot />}></Route>
					<Route path='/boostapp' exact component={() => <BoostApp />}></Route>
					<Route
						path='/moviemakerapp'
						exact
						component={() => <MovieMakerApp />}></Route>
					<Route path='/duploapp' exact component={() => <DuploApp />}></Route>
          <Route path='/search/:searchKey' component={SearchPage}>

          </Route>
        </Switch>

        {/* <Footer/> */}

        <ToastContainer />

      </BrowserRouter>
   
   </> );
	}
}

export default App;

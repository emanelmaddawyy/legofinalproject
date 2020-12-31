import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-multi-carousel/lib/styles.css';

import { Component } from 'react';

import HomePage from './Pages/HomePage';
import RegisterPage from './Pages/RegisterPage';
import LoginPage from './Pages/LoginPage';
import UsersPage from './Pages/UsersPage';
import AboutusPage from './Pages/AboutusPage'
import FindstorePage from './Pages/FindstorePage';
import KidsPage from './Pages/KidsPage';
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
import Rating from './components/Rating/Rating';
import Order from './components/Order/Order';

class App extends Component {

	state = {
		ArchitectureAccordion: [
			{ title: 'Product Type', filters: [{ Sets: 'Sets' }] },
			{ title: 'Age', filters: [{ Age: '12+' }] },
			{
				title: 'Price',
				filters: [
					{ Price1: '$25 - $50' },
					{ Price2: '$50 - $75' },
					{ Price3: '$75 - $100' },
					{ Price4: '$100+' },
				],
			},
			{ title: 'Theme', filters: [{ Theme: 'Architecture' }] },
			{ title: 'Interest', filters: [{ Interest: 'Buildings' }] },
			{
				title: 'Piece Count',
				filters: [
					{ PieceCount1: '250-499' },
					{ PieceCount2: '500-999' },
					{ PieceCount3: '1000+' },
				],
			},
			{ title: 'Availability', filters: [{ Availability: 'Out Of Stock' }] },
			{
				title: 'Rating',
				filters: [{ Rating: <Rating value='4' color='#ffcf00' /> }],
			},
		],
	};

	render() {
		return (
      <BrowserRouter>
        <Switch>
          <Route path="/Login" exact component={LoginPage} />
          <Route path="/Register" exact component={RegisterPage} />
          <Route path="/users" exact component={UsersPage} />
          <Route path="/aboutus" exact component={AboutusPage} />
          <Route path="/findstore" exact component={FindstorePage} />
          <Route path="/legolife" exact component={LegoLifePage} />
          <Route path="/kids" exact component={KidsPage} />
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

          <Route
            component={() => (
              <ArchitecturePage
                ArchitectureAccordion={this.state.ArchitectureAccordion}
                displayInterests={false}
              />
            )}
            path='/architecture/:visibleId'
            exact></Route>

          <Route
            component={() => (
              <ArchitecturePage
                ArchitectureAccordion={this.state.ArchitectureAccordion}
                displayInterests={true}
              />
            )}
            path='/interests/:visibleId'
            exact></Route>
        </Switch>
      </BrowserRouter>
		);
	}
}

export default App;

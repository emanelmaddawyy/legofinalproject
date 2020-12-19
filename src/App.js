import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,} from "react-router-dom";
import HomePage from './Pages/HomePage';
import RegisterPage from './Pages/RegisterPage';
import LoginPage from './Pages/LoginPage';
import UsersPage from './Pages/UsersPage';
import AboutusPage from './Pages/AboutusPage'
import VipPage from './Pages/VipPage';
import FindstorePage from './Pages/FindstorePage';
import LegoLifePage from './Pages/LegolifePage';
import KidsPage from './Pages/KidsPage';
import WishlistPage from './Pages/WishlistPage';
import CartPage from './Pages/CartPage';
import OffersPage from './Pages/Offers&Sale';
import ExclusivesPage from './Pages/ExclusivesPage';
import ForgetUsernamePage from './Pages/ForgetUsername';
import ForgetPasswordPage from './Pages/ForgetPasswordPage';
import ArchitecturePage from './Pages/ArchitecturePage';



function App() {
  return (
    <Router>
      <Route
        path="/"
        exact
        component={() => <HomePage/>}>
      </Route>
      <Route
        path="/Login"
        exact
        component={() => <LoginPage/>}>
      </Route>
      <Route
        path="/Register"
        exact
        component={() => <RegisterPage/>}>
      </Route>
      <Route
        path="/users"
        exact
        component={() => <UsersPage/>}>
      </Route>
      <Route
        path="/aboutus"
        exact
        component={() => <AboutusPage/>}>
      </Route>
      <Route
        path="/vip"
        exact
        component={() => <VipPage/>}>
      </Route>
      <Route
        path="/findstore"
        exact
        component={() => <FindstorePage/>}>
      </Route>
      <Route
        path="/legolife"
        exact
        component={() => <LegoLifePage/>}>
      </Route>
      <Route
        path="/kids"
        exact
        component={() => <KidsPage/>}>
      </Route>
      <Route
        path="/cart"
        exact
        component={() => <CartPage/>}>
      </Route>
      <Route
        path="/offers"
        exact
        component={() => <OffersPage/>}>
      </Route>
      <Route
        path="/exclusives"
        exact
        component={() => <ExclusivesPage/>}>
      </Route>
      <Route
        path="/forgetusername"
        exact
        component={() => <ForgetUsernamePage/>}>
      </Route>
      <Route
        path="/forgetpassword"
        exact
        component={() => <ForgetPasswordPage/>}>
      </Route>

        <Route
        path="/architecture"
        exact
        component={ArchitecturePage}>
      </Route>


    </Router>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,} from "react-router-dom";
import HomePage from './Pages/HomePage';
import RegisterPage from './Pages/RegisterPage';
import LoginPage from './Pages/LoginPage';
import UsersPage from './Pages/UsersPage'


function App() {
  return (
    <>
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

    </Router>
    </>
  );
}

export default App;

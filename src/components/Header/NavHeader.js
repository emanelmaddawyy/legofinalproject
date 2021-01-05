import { Component } from "react"
import {Navbar,Nav,} from 'react-bootstrap';
import Themes from './Themes/Themes';
import ShopBy from './ShopBy/ShopBy';
import Interest from './Interest/Interest';
import OffersPage from '../../Pages/Offers&Sale'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faSearch } from '@fortawesome/fontawesome-free-solid';
import { withRouter} from 'react-router-dom';


class Navheader extends Component{
  state={
    isSeachBarVisalbeFalg : false ,
    searchValue : ""
  }
  toggleSearchHandeler = ()=>{
    this.setState({
      isSeachBarVisalbeFalg : !this.state.isSeachBarVisalbeFalg
    })
  }
  changeSearchHandeler = (e) => {
    this.setState({
      searchValue:e.target.value
    })
  }
  searchHandeler = (e) => {
    if(e.charCode == 13){
    this.props.history.push('/search/'+this.state.searchValue)
  }
  }
  render(){
    return(
      <Navbar bg="yellow" expand="lg">
        <Navbar.Brand href="/"><img src="../../../Lego-logo.jpeg"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Themes/>
            </Nav.Link>
            <Nav.Link>
              <ShopBy/>
            </Nav.Link>
            <Nav.Link>
            <Interest/>
            </Nav.Link>
            {/* <TopHeader/> */}
            {/* <Nav.Link>
              <Link to="/offers">Offers&sale</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/exclusives">Exclusives</Link>
            </Nav.Link> */}
         
          </Nav>
       
        </Navbar.Collapse>
        <Nav.Link className="ml-auto search">
            <button  className="btn searchBtn"onClick={this.toggleSearchHandeler}>
              <FontAwesomeIcon icon={faSearch}/>
            </button>
            {
              this.state.isSeachBarVisalbeFalg ? <input type="text"className="inputSearch" placeholder="Search..."  value = {this.state.value} onChange={this.changeSearchHandeler} onKeyPress={this.searchHandeler}/> : ''
            }
        </Nav.Link>
      </Navbar>)
  }
}

export default withRouter(Navheader)


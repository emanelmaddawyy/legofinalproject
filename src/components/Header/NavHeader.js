import { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Themes from './Themes/Themes';
import ShopBy from './ShopBy/ShopBy';
import Interest from './Interest/Interest';
import OffersPage from '../../Pages/Offers&Sale';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/fontawesome-free-solid';

export default class Navheader extends Component {
	state = {
		isSeachBarVisalbeFalg: false,
	};
	toggleSearchHandeler = () => {
		this.setState({
			isSeachBarVisalbeFalg: !this.state.isSeachBarVisalbeFalg,
		});
	};
	render() {
		return (
			<Navbar bg='yellow' expand='lg'>
				<Link to='/'>
					<Navbar.Brand>
						<img src='../../../Lego-logo.jpeg' />
					</Navbar.Brand>
				</Link>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Navbar.Collapse className='mr-auto'>
						<Nav.Link>
							<Themes />
						</Nav.Link>
						<Nav.Link>
							<ShopBy />
						</Nav.Link>
						<Nav.Link>
							<Interest />
						</Nav.Link>
						{/* <TopHeader/> */}
						<Nav.Link>
							<Link to='/offers'>Offers&sale</Link>
						</Nav.Link>
						<Nav.Link>
							<Link to='/exclusives'>Exclusives</Link>
						</Nav.Link>
					</Navbar.Collapse>
				</Navbar.Collapse>
				<Nav.Link className='ml-auto search'>
					<button className='btn searchBtn' onClick={this.toggleSearchHandeler}>
						<FontAwesomeIcon icon={faSearch} />
					</button>
					{this.state.isSeachBarVisalbeFalg ? (
						<input
							type='text'
							className='inputSearch'
							placeholder='Search...'
						/>
					) : (
						''
					)}
				</Nav.Link>
			</Navbar>
		);
	}
}

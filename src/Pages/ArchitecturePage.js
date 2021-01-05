import React from 'react';
import './ArchitecturePage.css';
import Filter from '../components/Filter/Filter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css';
import ProductSlider from '../components/Slider/ProductSlider';
import Slider from '../components/Slider/Slider';
import Header from '../components/Header/Header'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import config from '../config.json';
import loggedUserModule from '../modules/LoggedUserModule';
import wishListModule from '../modules/WishListModule';
import cartModule from '../modules/CartModule';
import Footer from '../components/Footer/Footer';
import { toast } from 'react-toastify';

import {
	Link,
	withRouter,
} from 'react-router-dom';

import {
	StarFilled,
	StarTwoTone,
	HeartOutlined,
	HeartFilled,
} from '@ant-design/icons';
import NewProductsSlider from '../components/NewProductsSlider/NewProductsSlider'


class Architecture extends React.Component {

  state = {
    products: []
  }

  addToWishListHandler = (index) => {
    if (!loggedUserModule.getLoggedUser()) {
      toast.error("You must login first");
      return;
    }

    const product = {...this.state.products[index]};

    wishListModule.addProduct(product);
    toast.error("Added in wishlist") 

    product.existsInWishList = true;

    // update state
    const newProducts = [...this.state.products];
    newProducts[index] = product;
    this.setState({products: newProducts});
  }

  removeFromWishListHandler = (index) => {
    if (!loggedUserModule.getLoggedUser()) {
      toast.error("You must login first");
      return;
    }


    const product = {...this.state.products[index]};

    wishListModule.removeProduct(product._id);
    product.existsInWishList = false;  

    // update state
    const newProducts = [...this.state.products];
    newProducts[index] = product;
    this.setState({products: newProducts});
  }

  fetchProducts = async (filters = []) => {
    try {
      const url = config.apiUrl + '/products/getProductsFiltered';
      const response = await axios.post(url, filters);

      const products = response.data.map(item => {
        return {
          ...item,
          existsInWishList: wishListModule.isExistsInWishList(item._id)
        }
      })
      
      this.setState({ products: products });
    } catch (error) {
      const msg = error.response.data.message || "Something went wrong";
      toast.error(msg);
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    const key = this.props.match.params.key;

    const filters = [];
    if (id && key) {
      filters.push({
        key: key,
        data: [id]
      });
    }

    this.fetchProducts(filters);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id
        || this.props.match.params.key !== prevProps.match.params.key) {
      const id = this.props.match.params.id;
      const key = this.props.match.params.key;

      const filters = [];

      if (id && key) {
        filters.push({
          key: key,
          data: [id]
        });
      }

      this.fetchProducts(filters);
    }
  }

  addToCartClickHandler = (product) => {
    if (!loggedUserModule.getLoggedUser()) {
      toast.error("You must login first");
      return;
    }

    cartModule.addProduct(product);
    toast.success("You products added");

  }

  filtersChanged = (productFilters) => {
    this.fetchProducts(productFilters);
  }
  
  productList = () => this.state.products.map((product, index) => {
		let ratingClal = (nOfStars) => {
			const filledStar = (
				<StarFilled style={{ fontSize: '16px', color: 'rgb(255, 213, 0)' }} />
			);
			const emptyStar = <StarTwoTone twoToneColor='rgb(255, 213, 0)' />;
			let result = [];
			for (let i = 0; i < 5; i++) {
				i < nOfStars ? result.push(filledStar) : result.push(emptyStar);
			}
			return <p>{result}</p>;
		};

		let isAvaliable = () => {
			const avaliable = (
				<button
					class='btn add col-12 p-2'
					onClick={() => this.addToCartClickHandler(product)}>
					Add to Bag
				</button>
			);
			const outOfStock = (
				<button disabled class='btn outOfStock col-12 p-2'>
					Out of stock
				</button>
			);
			return product.avaliable ? avaliable : outOfStock;
		};

		let getWishListHeartButton = () => {
			const FilledHeart = (
				<>
					<button
						class='btn wish text-left p-0 pt-2'
						onClick={(e) => {
							this.removeFromWishListHandler(index);
						}}>
						<HeartFilled
							style={{
								cursor: 'auto',
								fontSize: '18px',
								color: 'rgb(0, 109, 183)',
								backgroundColor: '#eee',
								margin: '2px',
                padding: '3px',
                borderRadius:'50%'
							}}
						/>
						<span class='font-weight-bold' style={{ fontSize: '14px' }}>
							Added to Wishlist
						</span>
					</button>
				</>
			);
			const OutlinedHeart = (
				<>
					<button
						class='btn wish text-left p-0 pt-2'
						onClick={(e) => {
							this.addToWishListHandler(index);
						}}>
						<HeartOutlined
							style={{
								fontSize: '16px',
								color: 'rgb(0, 109, 183)',
								margin: '2px',
                padding: '3px',
                borderRadius:'50%'
                
							}}
						/>
						<span class='font-weight-bold' style={{ fontSize: '14px' }}>
							Add to Wishlist
						</span>
					</button>
				</>
			);

			return product.existsInWishList ? FilledHeart : OutlinedHeart;
		};

		return true ? (
			<div class='row col-6 col-lg-4 border border-1 m-0'>
				<div class='p-3'>
					<div class=''>
						<span class='love'></span>
						<Link
							to={{ pathname: `/product/${product._id}` }}>
              <img
								class='image-fluid w-100 pImg pImg2'
								src={product.images.length > 0 ? config.imagesEndpoint + product.images[0] : "../images/def-product.png"}
								alt=''
							/>
						</Link>
         
					</div>
					<Link
						to={{ pathname: `/product/${product._id}`}}>
						<p class='font-weight-bold text-dark'>{product.title}</p>
						<p class=''>{ratingClal(product.rating)}</p>
						<p class='font-weight-bold'>${product.price}</p>
					</Link>
					{isAvaliable()}
					{getWishListHeartButton()}
				</div>
			</div>
		) : null;
  });

  render() {
    return (
      <>
        <Header/>
        <Slider />
        <div class='row p-5 m-0'>
          <div class=' col-lg-3 d-none d-lg-block '>
            <Filter filtersChanged={this.filtersChanged} />
          </div>
          <div class='row col-lg-9 col-12  m-xs-0'>{this.productList()}</div>
        </div>
      <NewProductsSlider/>
      <Footer/>
      </>
    );
  }
}

export default withRouter(Architecture);
  
import { Component } from "react";
import config from '../config.json';
import axios from 'axios';
import Header from '../components/Header/Header';
import Slider from '../components/Slider/Slider';
import Footer from '../components/Footer/Footer';
import {Link} from 'react-router-dom';
import {
  StarFilled,
  StarTwoTone,
  HeartOutlined  

} from '@ant-design/icons';
import { Row } from "react-bootstrap";

export default class Order extends Component{
  state = {
    search:[]
  }

  fetchProducts = async () => {
    try { 
      const response = await axios.get(`${config.apiUrl}/products?searchKeyWord=${this.props.match.params.searchKey}`);
       const search = response.data;
       console.log(search)
       this.setState({
        search:search
       })
    }
    catch (error){

    }
  }

     componentDidMount(){  
       this.fetchProducts();
  }


  componentDidUpdate(nextProps) {
    if(this.props.match.params.searchKey !== nextProps.match.params.seatchKey) {
      this.fetchProducts()
    }
  }

   isAvaliable = ()=>{
    const avaliable = <button class="btn add col-12 p-2" >Add to Bag</button>;
    const outOfStock = <button disabled class="btn outOfStock col-12 p-2" >Out of stock</button>;
    return (this.state.searchProduct.avaliable)?avaliable:outOfStock;
}


  render(){
  return(<>
  <Header />
  <Slider />
  <Row>
  {this.state.search.map((searchProduct,index) => {
    
    let rate = (()=>{
      switch(searchProduct.rating){
          case 1: 
              return <p> 
                          <StarFilled style={{ fontSize: '16px', color: "rgb(255, 213, 0)" }}/>
                          <StarTwoTone twoToneColor="rgb(255, 213, 0)"/>
                          <StarTwoTone twoToneColor="rgb(255, 213, 0)"/>
                          <StarTwoTone twoToneColor="rgb(255, 213, 0)"/>
                          <StarTwoTone twoToneColor="rgb(255, 213, 0)"/> 
                      </p>;
          break;
          case 2:
              return <p> 
                          <StarFilled style={{ fontSize: '16px', color: "rgb(255, 213, 0)" }}/>
                          <StarFilled style={{ fontSize: '16px', color: "rgb(255, 213, 0)" }}/>
                          <StarTwoTone twoToneColor="rgb(255, 213, 0)"/>
                          <StarTwoTone twoToneColor="rgb(255, 213, 0)"/>
                          <StarTwoTone twoToneColor="rgb(255, 213, 0)"/> 
                       </p>;
          break;
          case 3:
              return <p> 
                          <StarFilled style={{ fontSize: '16px', color: "rgb(255, 213, 0)" }}/>
                          <StarFilled style={{ fontSize: '16px', color: "rgb(255, 213, 0)" }}/>
                          <StarFilled style={{ fontSize: '16px', color: "rgb(255, 213, 0)" }}/>
                          <StarTwoTone twoToneColor="rgb(255, 213, 0)"/>
                          <StarTwoTone twoToneColor="rgb(255, 213, 0)"/> 
                      </p>;
          break;
          case 4:
              return <p> 
                          <StarFilled style={{ fontSize: '16px', color: "rgb(255, 213, 0)" }}/>
                          <StarFilled style={{ fontSize: '16px', color: "rgb(255, 213, 0)" }}/>
                          <StarFilled style={{ fontSize: '16px', color: "rgb(255, 213, 0)" }}/>
                          <StarFilled style={{ fontSize: '16px', color: "rgb(255, 213, 0)" }}/>
                          <StarTwoTone twoToneColor="rgb(255, 213, 0)"/> 
                      </p>;
          break;
          case 5:
              return <p> 
                          <StarFilled style={{ fontSize: '16px', color: "rgb(255, 213, 0)" }}/>
                          <StarFilled style={{ fontSize: '16px', color: "rgb(255, 213, 0)" }}/>
                          <StarFilled style={{ fontSize: '16px', color: "rgb(255, 213, 0)" }}/>
                          <StarFilled style={{ fontSize: '16px', color: "rgb(255, 213, 0)" }}/>
                          <StarFilled style={{ fontSize: '16px', color: "rgb(255, 213, 0)" }}/>
                      </p>;
          break;
      }
  })
  let isAvaliable = ()=>{
      const avaliable = <button class="btn add col-12 p-2" >Add to Bag</button>;
      const outOfStock = <button disabled class="btn outOfStock col-12 p-2" >Out of stock</button>;
      return (searchProduct.avaliable)?avaliable:outOfStock;
  }
 
return (true) ? (    
          <div class="col-6 col-lg-4 border border-1 m-0">
              <div class="p-3">
                  <div class="">
                      <span class="love">
                      </span>
                          <Link to={`/product/${searchProduct._id}`}><img class="image-fluid w-100 pImg pImg2" src={config.imagesEndpoint + searchProduct.images[0]} alt=""/></Link>
                  </div>
                      <p class="font-weight-bold text-dark">{searchProduct.title}</p>
                  <p class="">{ rate() }</p>
                  <p class="font-weight-bold">${searchProduct.price}</p>
                  {isAvaliable()}
                  <button class="btn wish text-left p-0 pt-2" >
                      <HeartOutlined  style = {{fontSize: '16px', color: 'darkblue', margin: '2px', paddingRight:'1px'}}/>
                      <span class="font-weight-bold" style={{fontSize:'14px'}} >Add to Wishlist</span>
                  </button>

              </div>
          </div>
  ) : null;
})}

</Row>
<Footer/>
      
 </>)
}
}
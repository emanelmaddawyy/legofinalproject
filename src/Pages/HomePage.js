import React,{Component} from 'react';
import Productslider from '../components/Slider/Slider'
import ProductsList from '../components/Products/ProductsList'
import Vip from './VipPage'

class HomePage extends Component{
    render(){
        return(
            <>
                <Productslider />
                <ProductsList />
                <Vip />
            </>
          
        )
    }
} 
export default HomePage
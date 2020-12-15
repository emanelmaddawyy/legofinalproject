import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Link ,withRouter} from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './productSlider.css';
import {
    StarFilled,
    StarTwoTone,
    HeartOutlined  
  } from '@ant-design/icons';


const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1200 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 1200, min: 800 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Productslider = ()=> {

    const products =[
        {ID:1, name: "Empire State Building", price: "119.99", imgSrc: '21046.jpeg', rating: 1, imgSrc:'./21042.jpeg'},
        {ID:2, name: "The White House", price: "110.99", imgSrc: '21046.jpeg', rating: 5, imgSrc: './21043.jpeg'},
        {ID:3, name: "Trafalgar Square", price: "98.99", imgSrc: '21046.jpeg', rating: 3, imgSrc: './21046.jpeg'},
        {ID:4, name: "Statue of Liberty", price: "70.50", imgSrc: '21046.jpeg', rating: 2, imgSrc: './21045.jpeg'},
        {ID:5, name: "San Francisco", price: "255.99", imgSrc: '21046.jpeg', rating: 4, imgSrc: './40367.jpeg'},
        {ID:6, name: "Las Vegas", price: "119.99", imgSrc: '21046.jpeg', rating: 1, imgSrc: './21043.jpeg'},
        {ID:7, name: "Paris", price: "110.0", imgSrc: '21046.jpeg', rating: 5, imgSrc: './21042.jpeg'},
        {ID:8, name: "London", price: "98.0", imgSrc: '21046.jpeg', rating: 3, imgSrc: './40367.jpeg'}
    ]
    
    const productList = products.map((product, i) => {
        let rate = (()=>{
            switch(product.rating){
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
       
    return (true) ? (    
                <div class="mb-5 m-0">
                    <div class="p-3">
                        <div class="border border-1">
                            <span class="love">
                                <HeartOutlined  style = {{fontSize: '18px', color: 'darkblue', backgroundColor: "#eee", margin: '2px', padding:'1px'}}/>
                            </span>
                            <img class="image-fluid w-100 pImg p-3" src={product.imgSrc} alt=""/>
                        </div>
                            <p>{product.name}</p>
                            <p class="">{ rate() }</p>
                            <p class="font-weight-bold">${product.price}</p>
                            <button class="btn add col-12" >Add to Bag</button>
                        </div>
                </div>
        ) : null;
    })
    
    
    return(
        <div class="m-5 p-5">
            <h1 className="m-2">Featured sets</h1>  
            <Carousel responsive={responsive}
                        swipeable={true}
                        draggable={true}
                        showDots={true}
                        ssr={false} // means to render carousel on server-side.
                        infinite={false}
                        //autoPlaySpeed={1000}
                        keyBoardControl={true}
                        //customTransition="all 1"
                        //transitionDuration={500}
                        //containerClass="carousel-container"
                        //removeArrowOnDeviceType={["tablet", "mobile"]}
                        //dotListClass="custom-dot-list-style"
                        //itemClass="carousel-item-padding-40-px"
                        slidesToSlide = "2"
                        >
                {productList}
            </Carousel>
        </div>
    )
}

export default Productslider;
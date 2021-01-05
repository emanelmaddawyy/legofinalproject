import { Component } from 'react';
import Aboutus from '../components/Aboutus/Aboutus';
import { FaChevronRight } from 'react-icons/fa';
import {Link} from 'react-router-dom'

class AboutusPage extends Component {

  render() {
    return(
      <>
      <section className="text-center container h6 blue pt-5">
      <div className="container text-center text-md-left">
        <h1 className="text-center"><strong>About Us</strong></h1>
        <div className="row">
          <div className="m-auto">
            <ul className="list-inline">
              <li className="list-inline-item mb-3">
                   <Link to="/legogroup" className="text-decoration-none text-dark"
                  >The LEGO Group
                  </Link>
              </li>
              <li className="list-inline-item mb-3">
                <Link path="" className="text-decoration-none text-dark"
                  >Sustainability
                  </Link>
              </li>
              <li className="list-inline-item mb-3">
                <a href="" className="text-decoration-none text-dark">Discover</a>
              </li>
              <li className="list-inline-item mb-3">
                <a href="" className="text-decoration-none text-dark">Newsroom</a>
              </li>
              <li className="list-inline-item mb-3">
                <a href="" className="text-decoration-none text-dark">Careers</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <div className="bg-image1 text-center">
          <div className="m-50 caption">
            <h3 className="font-weight-bolder text-dark display-2">
              Only the best is 
              good <br />enough
            </h3>
            <p className="h4 text-dark">
              As children shape their own worlds with LEGO bricks, we play our
              part in <br />
              having<span className="font-weight-bold">
                a positive impact on the world</span>
              they live in today and will inherit<br />
              in the future.
            </p>
            <br />
            <a className="text-white"
              href="https://www.lego.com/en-us/aboutus/lego-group"
              >Learn about the LEGO Group <FaChevronRight/></a >
          </div> 
          </div>
          <div>
        <div className="bg-image2 text-center">
        <div className="m-50 caption">
          <h3 className="font-weight-bolder text-white display-4">
            Inspire and Develop the 
            Builders <br />of Tomorrow
          </h3>
          <p className="lead text-white">
            LEGO play starts to release a child’s
            <span className="font-weight-bold"> potential</span> from the moment they
           pick up <br />  their first
            brick.
          </p>
          <br />
          <a
            className="text-white"
            href="https://www.lego.com/en-us/aboutus/lego-group"
            >Learn more about the LEGO Group <FaChevronRight/></a>
        </div>
      </div>
    </div>
    <div>
    <div>
      <div className="media container ml-3">
            <div className="row">
              <ul className="list-unstyled">
                <li className="media">
                  <div className="media-body col-5 history">
                    <h1 className="font-weight-bolder">The LEGO History</h1>
                    <p className="lead text-md">
                      Founded in 1932 by Ole Kirk 
                      Kristiansen, and based on the
                      iconic LEGO brick, it is one of the world’s leading
                      manufacturers of play materials.
                    </p>
                  </div>
                  <img
                    src="../about-3.jpg"
                    className="img-fluid col-7"
                    alt="..."
                  />
                </li>
              </ul>
            </div>
          </div>
   </div>
  
  
  <div className="text-center">
        <h1 className="">18,000+ people in 15 countries</h1>
      </div>
  
      <div className="text-center">
        <a
          className="h5 text-dark"
          href="https://www.lego.com/en-us/aboutus/lego-group/contact"
          >Contact us <FaChevronRight/></a>
      </div>
  
      <div className="img-fluid col-12 ">
        <img
          src="../about-4.jpg"
          alt="" />
    
  
      <div className="text-center pb-5 ">
        <h1 className="mb-2 font-weight-bold">
          Supporting a more creative and resilient <br />
          society
        </h1>
      </div>
      </div>
      </div>
  
  
      
  <div className="row">
    <div className=" img-fluid  col-3 ">
      <img
        src="../logo-lego-education.jpg"
    
        alt=""
        className="img-responsive list-inline"
  />
      <a className="h5" href="https://education.lego.com/en-us">
         LEGOEducation website <FaChevronRight/></a>
    </div>
    <div className="   img-fluid col-3 list-inline">
            <img
              src="../logo-lego-foundation.jpg"
           
              alt=""
              className="img-responsive list-inline"
            />
            <a className="h5" href="https://www.legofoundation.com/en/"
              >
                <br/>LEGO Foundation website <FaChevronRight/></a >
          </div>
          <div className="img-fluid col-3 list-inline">
            <img
              src="../logo-lego-house.jpg"
           
              alt=""
              className="img-responsive"
            />
            <a className="h5" href="https://legohouse.com/en-gb/"
              >
                <br/>LEGO House website <FaChevronRight/></a>
          </div>
          <div className="img-fluid  col-3 list-inline">
            <img
              src="../logo-Ventures.jpg"
            
              alt=""
              className="img-responsive"
            />
            <a className="h5" href="https://legoventures.com/"
              >
                <br/>LEGO Ventures website <FaChevronRight/></a>
          </div>
        </div>
        </>
  
    )
  }
}
export default AboutusPage
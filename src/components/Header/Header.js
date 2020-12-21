import TopHeader from "./TopHeader";
import Navheader from './NavHeader';
import './Header.css'

const { Component } = require("react");

export default class Header extends Component{
  render(){
    return(
      <>
        <TopHeader/>
        <Navheader/>
      </>
    )
  }
}

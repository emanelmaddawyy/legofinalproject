import { Component } from "react"
import { Nav, Container ,Dropdown , Row, Col} from 'react-bootstrap';
import data from "../../../api/data.json";

export default class Interest extends Component{
  state = {
    isOpen1: false,
    interest: data.interest
  }
  toggle1() {
    this.setState({ ...this.state, isOpen1: !this.state.isOpen1 });
  }

  render(){
    // console.log(this.state.interest)
    return (
      <Dropdown className="categoryDropdown" addonType="append" isOpen={this.state.isOpen} toggle={() => this.toggle()}>
        <Dropdown.Toggle caret>Interest</Dropdown.Toggle>
        <Dropdown.Menu>
            {this.state.interest.map((item, index) => {
              return (<>
                     <ul className="list-unstyled interestliststyle">
                  {item.interestTypes.map((itemtype,index)=>{
                    return(
                        <li key={index}>{itemtype.title}</li>
                    )
                  })}
                  </ul>
                  <ul className="imgDropDown">
                 <img src={item.interestImg}/>
                 </ul>
                  </>
                );

            })}
          </Dropdown.Menu>
      </Dropdown>
    );
  }
 }
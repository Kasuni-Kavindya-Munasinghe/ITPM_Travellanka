import React, { Component } from 'react';
import './HotelSideMenu.css';
import imgsint22 from '../images/logoimg.jpeg'


export default class HotelSideMenu extends Component {
  render() {
    return (
      
      <div class="content flex_space">
        <div class="logo">
        <img className="imgsint22" src={imgsint22} alt="logo" ></img>
        </div>
    <div class="navlinks">
      <ul id="menulist">
        <li><a  href="">HOTEL</a></li>
        <li><a class="active" href="#camp">CAMP</a></li>
        <li><a href="#travel">TRAVEL</a></li>
        <li><a href="#place">PLACE</a></li>
        </ul>
        
        </div>
        <div>
<br></br>
        <b>CALL NOW +97 86 567 245</b>
        <br></br>
        <br></br>
        </div>
    </div>
    
      
      
    )
  }
}
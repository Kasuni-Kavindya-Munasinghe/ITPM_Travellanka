import React, { Component } from 'react';
import './HotelSideMenu.css';
import imgsint22 from '../../../Images/logo.png'
import imgsint66 from '../../../Images/sm.png'


export default class HotelSideMenu extends Component {
  render() {
    return (
      
      <div class="content flex_space">
        <div class="logo">
        <img className="imgsint22" src={imgsint22} alt="logo" ></img>
        </div>
    <div class="navlinks">
      <ul id="menulist">
        <li><a title="HOTEL PAGE" class="active" href="">HOTEL</a></li>
        <li><a title="CAMP PAGE" href="#camp">CAMP</a></li>
        <li><a title="TRAVEL PAGE" href="#travel">TRAVEL</a></li>
        <li><a title="PLACE PAGE" href="#place">PLACE</a></li>
        </ul>
        
        </div>
        <div>
<br></br>
<img className="imgsint66" src={imgsint66} alt="sm" ></img>
        <br></br>
        <br></br>
        </div>
    </div>
    
      
      
    )
  }
}



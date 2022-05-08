import React, { Component } from 'react';
import './DoctorSideMenu.css';
import imgsint22 from '../../../Images/logo.png'
import imgsint23 from '../../../Images/sm.png'

export default class DoctorSideMenu extends Component {
  render() {
    return (
      <header>
      <div class="content flex_space">
      <div class="logo">
      <img className="imgsint22" src={imgsint22} alt="logo" ></img>
      </div>
      
      <div class="navlinks">
         <ul id="menulist">
          <li><a href="#hotel">HOTEL</a></li>
          <li><a href="#camp">CAMP</a></li>
          <li><a class="active" href="../DoctorMain.js">TRAVEL</a></li>
          <li><a href="#place">PLACE</a></li>
      </ul>
      
      </div>
      <div class="clearfix"></div>
      <div>
      <br></br>
      <img className="imgsint23" src={imgsint23} alt="logo" ></img>
      <br></br>
      <br></br>
      </div>
  </div>
  </header>
      
    )
  }
}

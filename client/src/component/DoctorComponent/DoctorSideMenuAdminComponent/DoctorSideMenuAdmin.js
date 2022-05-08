import React, { Component } from 'react';
import './DoctorSideMenuAdmin.css';

import imgsint22 from '../../../Images/logo.png'

export default class DoctorSideMenuAdmin extends Component {
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
          <li><a class="active" href="">TRAVEL</a></li>
          <li><a href="#place">PLACE</a></li>
      </ul>
      
      </div>
      <div class="clearfix"></div>
      <div>
      <br></br>
      <b>CALL NOW +97 86 567 245</b>
      <br></br>
      <br></br>
      </div>
  </div>
  </header>
      
    )
  }
}

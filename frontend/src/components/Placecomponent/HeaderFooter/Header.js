import React from "react";
import { Link } from "react-router-dom";
import './Header.css'
import imglogo from '../../../images/logo.png'

function Header(){

    return(
      <div class="content flex_space">
      <div class="logo">
         <img className="imglogo" src={imglogo} alt="logo" ></img>
      </div>
  <div class="navlinks">
    <ul id="menulist">
      <li><a href="">HOTEL</a></li>
      <li><a href="#camp">CAMP</a></li>
      <li><a href="#travel">TRAVEL</a></li>
      <li className="nav=item">
      <Link to='/' className="nav-link">Place</Link>
      </li>
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
export default Header;

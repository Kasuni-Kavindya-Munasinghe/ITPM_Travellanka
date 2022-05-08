/*import React from "react";
import './Footer.css';

export default function(){
    return(
        
    
      
      
        <div class="container">
         <div class="row mt-3">
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4">
                <i class="fas fa-gem me-3"></i>Travel Lanka
              </h6>
              <p>
              Founded in 1996 in Sri Lanka, TRAVELLANKA.com has grown from a small Dutch startup to one of the Sri Lanka’s leading digital travel companies. Part of Booking Holdings Inc. (NASDAQ: BKNG), TRAVELLANKA.com’s mission is to make it easier for everyone to experience the Sri Lanka.
              </p>
            </div>
            
    
            
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              
              <h6 class="text-uppercase fw-bold mb-4">
                About
              </h6>
              <p>
                <a href="#!" class="text-reset">Hotel</a>
              </p>
              <p>
                <a href="#!" class="text-reset">Traval</a>
              </p>
              <p>
                <a href="#!" class="text-reset">Camping</a>
              </p>
              <p>
                <a href="#!" class="text-reset">Holiday Plane</a>
              </p>
            </div>
            

            
            
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
             
              <h6 class="text-uppercase fw-bold mb-4">
                Contact
              </h6>
              <p><i class="fas fa-home me-3"></i> New York, NY 10012, US</p>
              <p>
                <i class="fas fa-envelope me-3"></i>
                info@example.com
              </p>
              <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
              <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
            </div>
            
            <div className="row">
            <p className="col-sm"></p>
            <li> @2022 TRAVELLANKA (PVT) LIMITED| All right reserved | Terms Of Service | Privacy</li>

            </div>


          </div>
          </div>
    )
}
*/

import React, { Component } from 'react';
import './Footer.css';


export default class Footer extends Component {
  render() {
    return (
      
        <div className="main-footer">
<div className="row">


        <div className="col">
        <div>
<h4>ABOUT US</h4>
<li>Founded in 1996 in Sri Lanka, TRAVELLANKA.com has grown from a small Dutch startup to one of the Sri Lanka’s leading digital travel companies. Part of Booking Holdings Inc. (NASDAQ: BKNG), TRAVELLANKA.com’s mission is to make it easier for everyone to experience the Sri Lanka.</li>
<br></br>
</div>
</div>


<div className="col">
    <div>
<h4>SOCIAL MEDIA</h4>
<li>Facebook</li>
<br></br>
<li>Twitter</li>
<br></br>
<li>instagram</li>
<br></br>
</div>
</div>


<div className="col2">
<h4>TRAVEL LANKA (PVT) LTD</h4>
</div>
<li>HOME</li>
<br></br>
<li>SERVICE</li>
<br></br>
<li>CONTACT</li>
<br></br>
</div>


<hr />
<div className="row">
<p className="col-sm"></p>
<li> @2022 TRAVELLANKA (PVT) LIMITED| All right reserved | Terms Of Service | Privacy</li>

</div>
</div>
    
      
    )
  }
}



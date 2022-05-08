import React, { Component } from 'react'
import './mainhotel.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import HotelSideMenu from '../HotelSideMenuComponent/HotelSideMenu'
import imgsint333 from '../../../Images/abc.png'
import Footer from '../footer/footer'

export default class mainhotel extends Component {
    onSubmitIntadd(){
        window.location = '/addhotel'
    }
    onSubmitIntlist() {
        window.location = '/searchhotel'
    }

    onSubmitDetail() {
        window.location = '/viewhotel'
    }
    
    render() {
        return ( 
            <div>
                <HotelSideMenu/>
                <img className="imgsint333" src={imgsint333} alt="abc" ></img>
            <div className="IntContainer"> 
                <div className="container"> 
                
                <h1> WELCOME TO HOTEL SECTION </h1><br></br><br></br>
                <button type="submit" class="btn btn-primary" title="To enter the hotel you own" onClick={this.onSubmitIntadd}>ADD MY HOTEL</button>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <button type="submit" class="btn btn-primary" title="To find you a hotel" onClick={this.onSubmitIntlist}>SEARCH HOTEL</button>
                </div>
                <br></br>
                <br></br>
                <button type="submit" class="btn btn-primary" title="For hotel details" onClick={this.onSubmitDetail}>HOTEL DETAILS</button>
                <br></br>
                <br></br>
                <br></br>
                {/* <img className="imgsint333" src={imgsint333} alt="abc" ></img> */}
           </div>
           <div>
            <Footer/>
            </div>
           </div>
         )   
    }
}

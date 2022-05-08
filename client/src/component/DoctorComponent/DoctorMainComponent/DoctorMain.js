import React, { Component } from 'react'
import './DoctorMain.css';
import Footer from '../footer/footer'
import axios from 'axios';
import DoctorSideMenu from '../DoctorSideMenuComponent/DoctorSideMenu'
import img from '../../../Images/Rent.png'
import img1 from '../../../Images/Hire.png'


export default class DoctorMain extends Component {


  onSubmitDoctors(){
    window.location=""
}  

 
  
onSubmitSearchDoc(){
  window.location="/DoctorAdd"
}

onSubmitSearchSched(){
  window.location="/DoctorScheduleAdd"
}

render() {
        
    return (
      <div>
        <DoctorSideMenu/>
        <div className="DocContainer"> 
        <div className ="container">
        <div className="DoctorAdd">
        <h1>Discover to your Dream</h1>
        <h4>Find and rent a vehicle to travel around the contry with Travel Lanka</h4>
        
        <div class="imgbtnSch">
        
        <img className="imgdoc1" src={img} alt="SearchSchedule" onClick={this.onSubmitSearchDoc}></img>
        </div>

        <div class="imgbtnSch">
        
        <img className="imgdoc2" src={img1} alt="SearchDoctor" onClick={this.onSubmitSearchSched}></img>
        </div>

        </div>
        </div>
        
        </div>
        <Footer/>
        </div>

    )
  }
}
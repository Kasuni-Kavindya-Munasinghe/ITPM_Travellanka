import React, { Component } from 'react'
import './DoctorScheduleAdd.css';
import Footer from '../footer/footer'
import axios from 'axios';
import DoctorSideMenuAdmin from '../DoctorSideMenuAdminComponent/DoctorSideMenuAdmin'

export default class DoctorScheduleAdd extends Component {

    constructor(props){
        super(props);
        this.state ={
          pickup_location : "",
          date : "",   
          time : "",
            vehicle_type : "",
            pasenger_count : "",
            rant_type : "",
            driver_age : "",
    
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        

    }

    onChange(e) {
        this.setState({[e.target.id]: e.target.value});
    }

    onSubmit = async (e) => {
      e.preventDefault();
        const datasetDocSchedule = {  
          pickup_location : this.state.pickup_location, 
          date : this.state. date,
          time : this.state.time,
          vehicle_type : this.state.vehicle_type,
          pasenger_count : this.state.pasenger_count,
          rant_type : this.state.rant_type,
          driver_age : this.state. driver_age,
            
        }
        console.log(datasetDocSchedule);
        

         axios.post(`http://localhost:8087/Schedule/add`,datasetDocSchedule)
        .then(res =>{
            console.log("Successfully added");
            alert("Schedule successfully added!");
          window.location = "/DoctorScheduleView";
        }).catch((err) =>{
            console.log("Error",err);
        }) 
    
}

    
    render() {
        
        return (
          <div class= "set">
            <DoctorSideMenuAdmin/>
            <div className="DocSchContainer"> 
            <div className ="container">
            <div className="ScheduleAdd">
            <h1>What Do you looking at?</h1>

            <form className="AddScheForm">

  <div class="form-group">
    <label for="pickup_location">Pickup Location</label>
    <input type="text" class="form-control" id="pickup_location" onChange={this.onChange} placeholder="Pickup Location"/>
  </div>
  <br></br>

  <div class="form-group">
    <label for="date" >Date</label>
    <input type="text" class="form-control" id="date" onChange={this.onChange} placeholder="MM/DD/YYYY"/>
  </div>
  <br></br>

  <div class="form-group">
    <label for="time">Time</label>
     <input type="text" class="form-control" id="time" onChange={this.onChange}  placeholder="0:00am"/>
  </div>
  <br></br>

  <div class="form-group">
    <label for="vehicle_type">Vehicle type</label>
    <input type="text" class="form-control" id="vehicle_type" onChange={this.onChange} placeholder="car van jeep or tuk"/>
  </div>
  <br></br>

  <div class="form-group">
    <label for="pasenger_count">Pasenger Count</label>
    <input type="text" class="form-control" id="pasenger_count" onChange={this.onChange} placeholder="Pasenger count"/>
  </div>
  <br></br>
  <div class="form-group">
    <label for="rant_type">Rant type</label>
    <input type="text" class="form-control" id="rant_type" onChange={this.onChange} placeholder="with driver or without driver"/>
  </div>
  <br></br>

  <div class="form-group">
    <label for="driver_age">Driver Age</label>
    <input type="text" class="form-control" id="driver_age" onChange={this.onChange} placeholder="Driver age"/>
  </div>

  <br></br>

  
  <br></br>
  <button type="submit" class="btn btn-primary" onClick={this.onSubmit}>Submit</button>
</form>
         </div>               
             </div>
             
             </div> 
             <Footer/>
             </div>
        )
    }
}


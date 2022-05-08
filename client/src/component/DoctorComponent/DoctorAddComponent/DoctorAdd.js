import React, { Component } from 'react'
import './DoctorAdd.css';
import axios from 'axios';
import DoctorSideMenuAdmin from '../DoctorSideMenuAdminComponent/DoctorSideMenuAdmin'
import Footer from '../footer/footer'

export default class DoctorAdd extends Component {

    constructor(props){
        super(props);
        this.state ={
            vehicle_Owner_Name : "",
            vehicle_type : "",
            Vehicle_modle : "",
            Driver_name : "",
            Driver_age : "",
            Driving_license : "",
            availableDate : "",
            availableTime : "",
            password : "",
            conpassword : "",
           
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        

    }

    onChange= async (e) => {
      e.preventDefault();
        this.setState({[e.target.id]: e.target.value});
    }


    onSubmit = async (e) => {
      e.preventDefault();
        const datasetDoc = {  
          vehicle_Owner_Name : this.state.vehicle_Owner_Name, 
          vehicle_type : this.state.vehicle_type,
          Vehicle_modle : this.state.Vehicle_modle,
          Driver_name : this.state.Driver_name,
          Driver_age : this.state.Driver_age,
          Driving_license : this.state.Driving_license,
          availableDate : this.state.availableDate,
          availableTime : this.state.availableTime,
          password : this.state.password,
          conpassword : this.state.conpassword,
    
        }
        
        console.log(datasetDoc);
        

        if(this.state.password === this.state.conpassword){
        await axios.post(`http://localhost:8087/doctor/add`,datasetDoc)
        .then(res =>{
            console.log("Successfully registered");
            alert("Vehicle successfully added!");
         window.location = "/DoctorAllView";
        //  return false;
        }).catch((err) =>{
            console.log("Error",err);
        }) 
    } else{
        alert("Password Not Matched!");
    }
    }

    
    render() {
        
        return (
          <div >
            <DoctorSideMenuAdmin/>
            <div className="DocContainer"> 
            <div className ="">
            <div className="DoctorAdd">
            <h1>Lets Rent vehicle</h1>

            <form className="AddDocForm">
              <br></br>
  <div class="form-group">
    <label for="vehicle_Owner_Name" >Vehicle Owner Name</label>
    <br />
    <input type="text" class="form-control" id="vehicle_Owner_Name" onChange={this.onChange} placeholder="Enter Vehicle Owner Name" required/>
  </div>
  <br></br>
  <div class="form-group">
    <label for="vehicle_type">Vehicle type</label> <br/>
    <input type="text" class="form-control" id="vehicle_type" onChange={this.onChange} placeholder="Enter Vehicle type" required/>
  </div>
  <br></br>
  <div class="form-group">
    <label for="Vehicle_modle">Vehicle Modle</label><br/>
    <input type="text" class="form-control" id="Vehicle_modle" onChange={this.onChange} placeholder="Enter Vehicle Modle"/>
  </div>
  <br></br>
  <div class="form-group">
    <label for="Driver_name">Driver Name</label><br/>
    <input type="text" class="form-control" id="Driver_name" onChange={this.onChange} placeholder="Enter Driver Name" required />
  </div>
  <br></br>
  <div class="form-group">
    <label for="Driver_age">Driver Age</label><br/>
    <input type="text" class="form-control" id="Driver_age" onChange={this.onChange} placeholder="Enter Driver Age"/>
  </div>
  <br></br>
  <div class="form-group">
    <label for="Driving_license">Driving license No</label><br/>
    <input type="text" class="form-control" id="Driving_license" onChange={this.onChange} placeholder="Enter Driving license No"/>
  </div>
  <br></br>
  <div class="form-group">
    <label for="availableDate">Available Date</label><br/>
    <input type="text" class="form-control" id="availableDate" onChange={this.onChange} placeholder="Enter Available Date"/>
  </div>

  <br></br>
  <div class="form-group">
    <label for="availableTime">Available Time</label><br/>
    <input type="text" class="form-control" id="availableTime" onChange={this.onChange} placeholder="Enter Available Time"/>
  </div>
  <br></br>
  <div class="form-group">
    <label for="password">Password</label><br/>
    <input type="password" class="form-control" id="password" onChange={this.onChange} placeholder="Password"/>
  </div>
  <br></br>
  <div class="form-group">
    <label for="conpassword">Confirm Password</label><br/>
    <input type="password" class="form-control" id="conpassword" onChange={this.onChange} placeholder="Re Enter  Password"/>
  </div>
  <br></br><br></br><br></br>
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


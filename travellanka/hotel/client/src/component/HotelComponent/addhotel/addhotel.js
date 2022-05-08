import React, { Component } from 'react'
import './addhotel.css';
import axios from 'axios';
import HotelSideMenu from '../HotelSideMenuComponent/HotelSideMenu'
import Footer from '../footer/footer'
import imgsint111 from '../../../Images/bd.jpg'
import imgsint222 from '../../../Images/aa.png'
import imgsint333 from '../../../Images/abc.png'

export default class addhotel extends Component {

    constructor(props){
        super(props);
        this.state ={
          Hotel_Name : "",
          Hotel_Location : "",
          Hotel_Owner_Name : "" ,
          Single_Rooms : "",
          Double_Rooms : "",
          Triple_Rooms : "",
          Other_Features : "",
          Number_Of_Rooms : "",
           
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.id]: e.target.value});
    }

    

    onSubmit = async (e) => {
      e.preventDefault();
        const datasetInt = {  
          Hotel_Name : this.state.Hotel_Name, 
          Hotel_Location : this.state.Hotel_Location,
          Hotel_Owner_Name : this.state.Hotel_Owner_Name,
          Single_Rooms : this.state.Single_Rooms,
          Double_Rooms : this.state.Double_Rooms,
          Triple_Rooms : this.state.Triple_Rooms,
          Other_Features : this.state.Other_Features,
          Number_Of_Rooms : this.state.Number_Of_Rooms,
    
        }
        console.log(datasetInt);
        

        
        axios.post(`http://localhost:8087/Production/add`, datasetInt)
        .then(res =>{
            console.log(res);
            alert("Hotel successfully added!");
          window.location = "/mainhotel";
        }).catch((err) =>{
            console.log("Error",err);
            alert("Fields are empty!");
        }) 
    } 
    
    
    render() {
        
        return (
          <div>
            <div>
                <HotelSideMenu/>
                <img className="imgsint333" src={imgsint333} alt="abc" ></img>
                </div>
            <div className ="container">
            <div className="addhotel">
      
            <form className="addhotel">
            <h1>ADD MY HOTEL</h1>
  <div class="form-group">
  
    <label for="Hotel_Name">Hotel Name</label>
    <input type="text" class="form-control" id="Hotel_Name" onChange={this.onChange} placeholder="Enter Hotel Name"/>
    <label for="Hotel_Location">Hotel Location</label>
    <input type="text" class="form-control" id="Hotel_Location" onChange={this.onChange} placeholder="Enter Hotel Location"/>
  
    <label for="Hotel_Owner_Name">Hotel Owner Name</label>
    <input type="text" class="form-control" id="Hotel_Owner_Name" onChange={this.onChange} placeholder="Enter Hotel Owner Name"/>
  
    <label for="Single_Rooms">Single Rooms</label>
    <input type="number" class="form-control" id="Single_Rooms" onChange={this.onChange} placeholder="Enter Number Of Single Rooms"/>
  
    <label for="Double_Rooms">Double Rooms</label>
    <input type="number" class="form-control" id="Double_Rooms" onChange={this.onChange} placeholder="Enter Number Of Double Rooms"/>
  
    <label for="Triple_Rooms">Triple Rooms</label>
    <input type="number" class="form-control" id="Triple_Rooms" onChange={this.onChange} placeholder="Enter Number Of Triple Rooms"/>
  
    <label for="Other_Features">Other Features</label>
    <input type="text" class="form-control" id="Other_Features" onChange={this.onChange} placeholder="Enter Other Features"/>
 
    <label for="Number_Of_Rooms">Number Of Rooms</label>
    <input type="number" class="form-control" id="Number_Of_Rooms" onChange={this.onChange} placeholder="Enter Number Of Rooms"/>
    <br></br>
  </div>
 <br></br>
  <button type="submit" class="btn btn-primary" onClick={this.onSubmit}>ADD MY HOTEL</button>
</form>

         </div>  
                      
             </div>
             
             {/* <img className="imgsint222" src={imgsint222} alt="aa" ></img> */}
             
             <div>
            <Footer/>
            </div>
             
            
             </div>
             
             
        )
    }
}


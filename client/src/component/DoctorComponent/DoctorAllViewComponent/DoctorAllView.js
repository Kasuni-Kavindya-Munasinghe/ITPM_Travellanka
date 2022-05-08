import React, { Component } from 'react'
import './DoctorAllView.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import DoctorSideMenuAdmin from '../DoctorSideMenuAdminComponent/DoctorSideMenuAdmin'
import Footer from '../footer/footer'

export default class DoctorAllView extends Component {
    constructor(props) {
        super(props);
        this.state = { doctor: [],
            vehicle_Owner_Name : "",
            vehicle_type : "",
            Vehicle_modle : "",
            Driver_name : "",
            Driver_age : "",
            Driving_license : "",
            availableDate : "",
            availableTime: "",
            password : "",
            conpassword : ""
           
        }
        

    }

    componentDidMount() {
        axios.get(`http://localhost:8087/doctor/`)
            .then((res) => {console.log("data", res);
                this.setState({
                    doctor : res.data
                })
            console.log(this.state.doctor);
            this.state.doctor.map((item,key)=>{
                console.log("item",item);
            })
                    }).catch((err) => {
                console.log("Error", err);
            })

    }


    render() {
        return ( 
            <div>
            <DoctorSideMenuAdmin/>
            <div className="DocContainer"> 
                <div className="container"> 
                <h1> Rent Vehicle Details </h1>
                <button type="submit" class="btn btn-primary" onClick={this.onSubmitSearchDoc}>Search Product</button>
                <button type="submit" class="btn btn-primary" onClick={this.onSubmitAdd}>Add New Product</button>
                
                <br>
               
                
                </br>
                <table class="table table-success table-striped">

                <thead className="thead-light">
                    <tr>
                        <th scope="col"> Vehicle Owner Name </th>
                        <th scope="col"> Vehicle type </th>
                        <th scope="col"> Vehicle modle </th>
                        <th scope="col"> Driver name </th>
                        <th scope="col"> Driver age </th>
                        <th scope="col"> Driving license </th>
                        <th scope="col"> Available Date </th>
                        <th scope="col"> Available Time </th>
                        <th scope="col"> Remove </th>
                        <th scope="col"> Edit </th>

                    </tr>
                </thead>
             <tbody>
                 { this.state.doctor.map((item,key) =>(
                 <tr>
     <td> {item.vehicle_Owner_Name} </td>
     <td> {item.vehicle_type} </td>
     <td> {item.Vehicle_modle} </td> 
     <td> {item.Driver_name} </td>
     <td> {item.Driver_age}</td>
     <td> {item.Driving_license} </td>
     <td> {item.availableDate}</td>
     <td> {item.availableTime} </td>
     <td> <button onClick={() => deleteDoctor(item._id)} class="btndoc1"> Delete </button></td>
     {/* <td> <button onClick={this.onDelete} class="btndoc1"> Delete </button></td> */}
     <td> <button onClick={() => navigateUpdateDoctor(item.doctorid)} class="btndoc2" > Update </button></td>
     </tr>
              ))}
             </tbody>
                
                </table>
                
                <button type="submit" class="btn btn-primary" onClick={this.onGenReport}>GENERATE REPORT</button>
                </div>
               
               
           </div>
           <Footer/>
           </div>
           
         )   
    }
}


    
const navigateUpdateDoctor = (id) => {
    window.location = `/DoctorUpdate/${id}`
}

    

const deleteDoctor = (id) => {
    axios.delete(`http://localhost:8087/doctor/delete/${id}`)
    .then(res => {
      console.log("Vehicle successfully deleted");
  alert("Vehicle successfully deleted!");
  window.location = "/DoctorAllView";
  this.componentDidMount();
   }).catch((err) => {
  console.log("Error", err);
     })

    
    }


 

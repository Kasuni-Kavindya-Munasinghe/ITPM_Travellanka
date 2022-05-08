import React, { Component } from 'react'
import './DoctorScheduleView.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import moment from 'moment';
import DoctorSideMenuAdmin from '../DoctorSideMenuAdminComponent/DoctorSideMenuAdmin'
import Footer from '../footer/footer'

export default class DoctorScheduleView extends Component {
    constructor(props) {
        super(props);
        this.state = { Schedule: [],
            pickup_location : "",
            date : "",   
            time : "",
            vehicle_type : "",
            pasenger_count : "",
            rant_type : "",
            driver_age : "",
           
        }
        
    }
    
    
    componentDidMount() {
        axios.get(`http://localhost:8087/Schedule/`)
            .then((res) => {console.log("data", res.data);
                this.setState({
                    Schedule : res.data
                })
            console.log(this.state.Schedule);
            this.state.Schedule.map((item,key)=>{
                console.log("item",item);
            })
                    }).catch((err) => {
                console.log("Error", err);
            })

    }
    // generateReport(){
    //     window.location='/DoctorReport'
    // }


    render() {
        return ( 
            <div class="containerv">

            <div>
            <DoctorSideMenuAdmin/>
            </div>
            
            <div>
            <div className="DocContainer"> 
                <div className="container"> 
                <h1> Hire Vehicle </h1>
                <button type="submit" class="btn btn-primary" onClick={this.onSubmitSearchDoc}>Search Product</button>
                <button type="submit" class="btn btn-primary" onClick={this.onSubmitAdd}>Add New Product</button>
                

                {/* <div>    <button onClick={() => this.generateReport()} className ="button-report"  > Generate Report</button></div> */}
                <table class="table table-success table-striped">

                <thead className="thead-light">
                    <tr>
                        <th scope="col"> pickup_location </th>
                        <th scope="col"> date </th>
                        <th scope="col"> time </th>
                        <th scope="col"> vehicle_type </th>
                        <th scope="col"> pasenger_count </th>
                        <th scope="col"> rant_type </th>
                        <th scope="col"> driver_age </th>
                        <th scope="col"> Remove </th>
                        <th scope="col"> Edit </th>

         
                    </tr>
                </thead>
             <tbody>
                 { this.state.Schedule.map((item,key) =>(
                 <tr>
     <td> {item.pickup_location} </td>
     <td> {item.date} </td> 
     <td> {item.time} </td>
     <td> {item.vehicle_type}</td>
     <td> {item.pasenger_count}</td>
     <td> {item.rant_type} </td>
     <td> {item.driver_age}</td>
 
     <td> <button  onClick={() => deleteSchedule(item._id)} class="btndoc1"> Delete </button></td>
     <td> <button  onClick={() => navigateUpdateSchedule(item._id)}class="btndoc2"> Update </button></td>
     </tr>
              ))}
             </tbody>
                
                </table>
                <button type="submit" class="btn btn-primary" onClick={this.onGenReport}>GENERATE REPORT</button>
                </div>
           </div>
           <Footer/>
          </div>
          </div> 
         )   
    }
}
const navigateUpdateSchedule = (id) => {
    window.location = `/DoctorScheduleUpdate/${id}`
}

    

const deleteSchedule = (id) => {
    axios.delete(`http://localhost:8087/Schedule/delete/${id}`)
    .then(res => {
      console.log("Schedule successfully deleted");
  alert("Schedule successfully deleted!");
  window.location = "/DoctorScheduleView";
  this.componentDidMount();
   }).catch((err) => {
  console.log("Error", err);
     })

    
    }




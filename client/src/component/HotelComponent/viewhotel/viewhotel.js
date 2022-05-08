import React, { Component } from 'react'
import './viewhotel.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import HotelSideMenu from '../HotelSideMenuComponent/HotelSideMenu'
import Footer from '../footer/footer'

export default class viewhotel extends Component {
    constructor(props) {
        super(props);
        this.state = { Production: [],
            Hotel_Name : "",
            Hotel_Location : "",
            Hotel_Owner_Name : "" ,
            Single_Rooms : "",
            Double_Rooms : "",
            Triple_Rooms : "",
            Other_Features : ""
           
        }
        

    }

    componentDidMount() {
        axios.get(`http://localhost:8087/Production/view`)
            .then((res) => {console.log("data", res);
                this.setState({
                    Production : res.data
                })
            console.log(this.state.Production);
            this.state.Production.map((item,key)=>{
                console.log("item",item);
            })
                    }).catch((err) => {
                console.log("Error", err);
            })

    }

    onSubmitAdd(){
        window.location = '/addhotel'
    }
    onSubmitSearch() {
        window.location = '/searchhotel'
    }
    navigateIntUpdate(id){
        window.location = `/updatehotel/${id}`
    }
   
    onSubmitReport(){
        window.location = '/Generatereport'
    }

    render() {
        return ( 
            <div>
                <HotelSideMenu/>
            <div className="IntContainer"> 
                <div className="container"> 
                <h1> Hotel List </h1>
                {/* <button type="submit" class="btn btn-primary" onClick={this.onSubmitSearch}>Search Hotel</button>
                <button type="submit" class="btn btn-primary" onClick={this.onSubmitAdd}>Add New Hotel</button> */}
                <table class="table table-success table-striped">

                <thead className="thead-light">
                    <tr>
                        <th scope="col"> Hotel Name </th>
                        <th scope="col"> Hotel Location </th>
                        <th scope="col"> Hotel Owner Name </th>
                        <th scope="col"> Single Rooms </th>
                        <th scope="col"> Double Rooms </th>
                        <th scope="col"> Triple Rooms </th>
                        <th scope="col"> Other Features </th>
                        <th scope="col">  </th>
                        <th scope="col">  </th>

                    </tr>
                </thead>
             <tbody>
                 { this.state.Production.map((item,key) =>(
                 <tr>
     <td> {item.Hotel_Name} </td>
     <td> {item.Hotel_Location} </td>
     <td> {item.Hotel_Owner_Name} </td> 
     <td> {item.Single_Rooms} </td>
     <td> {item.Double_Rooms}</td>
     <td> {item.Triple_Rooms} </td>
     <td> {item.Other_Features} </td>
     <td> <button onClick={() => deleteitem(item._id)} class="btn btn-outline-success"> Delete </button></td>
     <td> <button class="btn btn-outline-success" onClick={() =>{this.navigateIntUpdate(item._id)}} > Edit</button> </td>
     {/* <td> <button onClick={this.onDelete} class="btndoc1"> Delete </button></td> */}
     </tr>
              ))}
             </tbody>
                
                </table>
                <button type="submit" class="btn btn-primary" onClick={this.onSubmitReport}>hotel report</button>
                
                </div>
           </div>
           <div>
            <Footer/>
            </div>
           </div>
           
         )   
    }
}


const deleteitem = (id) => {
    axios.delete(`http://localhost:8087/Production/delete/${id}`)
    .then(res => {
      console.log("item successfully deleted");
  alert("item successfully deleted!");
  window.location = "/viewhotel";
  this.componentDidMount();
   }).catch((err) => {
  console.log("Error", err);
     })
     

     }
import React, { Component } from "react";
import Header from "../HeaderFooter/Header";
import PlaceSideMenu from "../PlaceSideMenu/PlaceSideMenu";
import axios from 'axios';
import Footer from "../HeaderFooter/Footer";


export default class PlaceView extends Component{

    constructor(props){
        super(props);
        this.state={places:[],
            category:"",
            name:"",
            details:"",
            adultP:"",
            childP:""
        
        }
    }
    componentDidMount(){
        axios.get("http://localhost:8070/place/")
        .then((res)=>{
            console.log("data",res.data);
            this.setState({
                places:res.data
            })

            console.log(this.state.places);
            this.state.places.map((place,key)=>{
                console.log("place",place);
            })
        }).catch((err)=>{
            console.log(err);
        })
    }
    onSubmitAdd(){
        window.location= '/addplace'
    }
    navigateplaceUpdate(id){
        window.location = `/updateplace/${id}`
    }

    render(){
        return(
            <div>
                <Header/>
            <div className="IntContainer">
                <PlaceSideMenu/> 
                <div className="container"> 
                <br></br><h1> Place List </h1><br></br>
                <button type="submit" class="btn btn-primary" >Search Product</button>
                <button type="submit" class="btn btn-primary" onClick={this.onSubmitAdd} >Add New Product</button><br></br><br></br>
                
                <table class="table table-success table-striped">

                <thead className="thead-light">
                    <tr>
                        <th scope="col"> Category </th>
                        <th scope="col"> Name </th>
                        <th scope="col"> Detalis</th>
                        <th scope="col"> Adult Price </th>
                        <th scope="col"> Child Price </th>
                        <th scope="col">  </th>
                        <th scope="col">  </th>

                    </tr>
                </thead>

                <tbody>
                 { this.state.places.map((place,key) =>(
                 <tr>
                    <td> {place.category} </td>
                    <td> {place.name} </td> 
                    <td> {place.details} </td>
                    <td> {place.adultP}</td>
                    <td> {place.childP} </td>
                    <td> <button onClick={()=> deleteplace(place._id)}  class="btn btn-outline-success"> Delete </button></td>
                    <td> <button class="btn btn-outline-success" onClick={() =>{this.navigateplaceUpdate(place._id)}} > Edit</button> </td>
                 </tr>
                ))}
                </tbody>
             
                
                </table>
                <button type="submit" class="btn btn-primary" >GENERATE REPORT</button>
                
                
                </div><br></br>
           </div><br></br>
           <Footer/>
           </div>
        )
    }
}

const deleteplace = (id) => {
    axios.delete(`http://localhost:8070/place/delete/${id}`)
    .then(res => {
      console.log("place successfully deleted");
  alert("Do you want to delete this place ?");
  window.location = "/viewplace";
  this.componentDidMount();
   }).catch((err) => {
    console.log("Error", err);
     })
     

     }

    

   


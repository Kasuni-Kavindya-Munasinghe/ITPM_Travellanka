import React,{useState} from "react";
import Header from "./HeaderFooter/Header";
import Footer from "./HeaderFooter/Footer";
import PlaceSideMenu from "./PlaceSideMenu/PlaceSideMenu";
import axios from "axios";
import './AddPlace.css';


export default function AddPlace(){

  const [category,setCategory]= useState("");
  const [name,setName]= useState("");
  const [details,setDetails]= useState("");
  const [adultP,setAdultP]= useState("");
  const [childP,setChildP]= useState("");

  function sendData(e){
    e.preventDefault();
    
    const newPlace={
      category,
      name,
      details,
      adultP,
      childP
    }
    
    
    axios.post("http://localhost:8070/place/add",newPlace).then(()=>{
      alert("Place Added")
      window.location="/addplace"

    }).catch((err)=>{
      alert(err)
    })

  }

    return(
        <div>
                
            <Header/>
            <PlaceSideMenu/>
            <div className ="container">
            
            <div className="addplace">
            <br></br><h1>Add New Holiday Plan</h1><br></br>

           <div className="AddIntForm">
             <form onSubmit={sendData}>
  <div className="form-group">
    <label for="Category">Category</label>
    <input type="text" className="form-control" id="Category"  placeholder="Category"
    onChange={(e)=>{
      setCategory(e.target.value);
    }}/>

  </div>

  <div className="form-group">
    <label for="Place_Name">Name</label>
    <input type="text" className="form-control" id="Place_Name"  placeholder="Place Nane"
    onChange={(e)=>{
      setName(e.target.value);
    }}/>
  </div>

  <div className="form-group">
    <label for="Schedule_Details">Schedule Details</label>
    <textarea className="form-control" id="Schedule_Details"  placeholder="Schedule Details"
    onChange={(e)=>{
      setDetails(e.target.value);
    }}/>
  </div>

  <div className="form-group">
    <label for="Adult_Price">Adult Price</label>
    <input type="text" className="form-control" id="Adult_Price"  placeholder="Rs."
    onChange={(e)=>{
      setAdultP(e.target.value);
    }}/>
  </div>
  
  <div className="form-group">
    <label for="Child_Price">Child Price</label>
    <input type="text" className="form-control" id="Child_Price"  placeholder="Rs."
    onChange={(e)=>{
      setChildP(e.target.value);
    }}/>
  </div>
  
 <br></br>
  <button type="submit" className="btn btn-primary" >Add Plan</button>
</form><br></br>
         </div>               
             </div>
             
             </div>
             <Footer/>
             </div>
    )
}
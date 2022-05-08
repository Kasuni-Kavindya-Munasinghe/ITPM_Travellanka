/*
import React, { useState } from 'react'
import axios from 'axios';
//import HotelSideMenu from '../HotelSideMenuComponent/HotelSideMenu'
//import Footer from '../footer/footer'

const UpdatePlace = (prop) => {

    const id = prop.match.params.id;

    console.log(id);

    const [IUpdate, setIUpdate] = useState([]);

    axios.get(`http://localhost:8070/place/get/${id}`)
    .then((res) => setIUpdate(res.data))
    .catch((err) => console.log(err.message));
    console.log(IUpdate);

    const [category,setCategory]= useState("");
    const [name,setName]= useState("");
    const [details,setDetails]= useState("");
    const [adultP,setAdultP]= useState("");
    const [childP,setChildP]= useState("");

    const getPlaceDetails = (e) => {
        e.preventDefault();
        const updatePlace = {
          category,
          name,
          details,
          adultP,
          childP



        }

        //console.log(datasetInt);

        axios.put(`http://localhost:8087/places/update/${id}`, updatePlace)
        .then(() => alert ("Hotel Details updated successfully"))
        .catch((err) => console.log(err.message));
        window.location = "/viewplace";
    }

    

    return(

<div>
        
        <div className="container">
            
            <h1> Update Place Details</h1>
        <div className="formUpdateRoom">
            <form onSubmit={getPlaceDetails}>
                <div className="roomAdd">
                    <label for = "category" className = "form-label">Hotel_Name</label>
                    <input type="text" 
                    className="form-control"
                    id="Category"
          
                    placeholder="Enter category type"
                    defaultValue={IUpdate.category}
                    onChange = {(e) =>  setCategory(e.target.value)}
                    />
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


        <button type="submit" className="btn btn-primary" >Update Plan</button>

            </form>
            </div>
        </div>
        <div>
            
            </div>
        </div>
    )
}

export default UpdatePlace;
*/
import React, { useState, useEffect } from "react";
import axios from 'axios';
import './searchhotel.css';
import HotelSideMenu from '../HotelSideMenuComponent/HotelSideMenu'
import imgsint444 from '../../../Images/abc.png'
import Footer from '../footer/footer'


function SearchHotel() {
    const [search, setSearch] = useState('');
    const [int, setInventory] = useState([]);
    const [filteredIntData, setFilteredData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8087/Production/view')
            .then((response) => {
                setInventory(response.data);
            })
    }, [])

     

useEffect(() => {
    setFilteredData(
        int.filter((int) => int.Hotel_Location.toLowerCase().includes(search.toLowerCase()))
        )
}, [search], int)



return ( 
    
    <div class="containerg">
       
            <div>
        <HotelSideMenu/>
        </div>
        <img className="imgsint444" src={imgsint444} alt="abc" ></img>
        <div>
      <div className="HotelSearchContainer">
    <div className="searchHotel">
        <br/>
    <div className="container" id="searchHotelForm">
        <h1 className="searchHotelDetail">SEARCH HOTEL DETAILS </h1><br/><br/><br/>
        <h4> Enter You Want Hotel Location To View The Hotel Details</h4><br/>
        <input className="searchBarInt.A" type="text" placeholder="enter hotel location" onChange={(e) => {
            setSearch(e.target.value);
        }}/>
        <br/><br/>

        
        
        <table className="table.A">
            <thead className="thead-light">
                <tr>
                    
                </tr>
            </thead>
            
            <tbody>
                {filteredIntData.map((val) =>{
                    return <div key={val.id}>
                        <div class="form-group">
                        <tr><td>Hotel_Name : {val.Hotel_Name}</td></tr>
                        <tr><td>Hotel_Location : {val.Hotel_Location} </td></tr>
                        <tr><td>Hotel_Owner_Name : {val.Hotel_Owner_Name} </td></tr>
                        <tr><td>Single_Rooms : {val.Single_Rooms} </td></tr>
                        <tr><td>Double_Rooms : {val.Double_Rooms} </td></tr>
                        <tr><td>Triple_Rooms : {val.Triple_Rooms} </td></tr>
                        <tr><td>Other_Features : {val.Other_Features} </td></tr>
                        <tr><td>Number_Of_Rooms : {val.Number_Of_Rooms} </td></tr>
                        </div>
                        <br></br>
                        <br></br>
                        
                        </div>
                        
                     })}
            </tbody>
           
        </table>
        </div>
        </div>
        </div>
        </div>
        
        <div>
        
        </div>
        
        <div>
            <Footer/>
            </div>
    </div>
  
);
 }

 export default SearchHotel;
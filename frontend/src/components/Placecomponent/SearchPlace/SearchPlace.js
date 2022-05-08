/*
import React, { useState, useEffect } from "react";
import axios from 'axios';



function SearchInt() {
    const [search, setSearch] = useState('');
    const [int, setPlace] = useState([]);
    const [filteredIntData, setFilteredData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8087/Production/view')
            .then((response) => {
                setPlace(response.data);
            })
    }, [])

useEffect(() => {
    setFilteredData(
        int.filter((int) => int.Name.toLowerCase().includes(search.toLowerCase()))
        )
        }, [search], int)


return ( 
    <div class="containerg">
       
            <div>
        
        </div>
        <div>
            <div className="IntSearchContainer">
            <div className="searchPlace">
        <br/>
        <div className="container" id="searchPlaceForm">
        <h1 className="searchPlaceDetail">SEARCH Place DETAILS </h1><br/><br/><br/>
        <h2> Enter Place Name To View The Place Details</h2><br/>
        <input className="searchBarInt.A" type="text" placeholder="enter place name" onChange={(e) => {
            setSearch(e.target.value);
        }}/>
        <br/><br/>
        
        
        <table className="table.A">
            <thead className="thead-light">
                <tr>
                    <th> Place Details </th>
                </tr>
            </thead>
            <tbody>
                {filteredIntData.map((val) =>{
                    return <div key={val.id}>
                        <tr><td>Name : {val.Name}</td></tr>
                        <tr><td>Category : {val.Category} </td></tr>
                        <tr><td>Details : {val.Details} </td></tr>
                        <tr><td>adultP : {val.AdultP} </td></tr>
                        <tr><td>childP : {val.ChildP} </td></tr>
                        
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
        <img className="imgsint1" src={imgsint} alt="Search icon" ></img>
        <img className="imgsint1" src={imgsint} alt="Search icon" ></img>
    </div>
  
);
 }
 
 export default SearchInt;
 */
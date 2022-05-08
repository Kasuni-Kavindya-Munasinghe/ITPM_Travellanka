/*
import React, { useState } from 'react'
import axios from 'axios';
import jsPDF from 'jspdf';

const Generatereport = ()=> {

    const [Data, setData] = useState([]);

    axios.get(`http://localhost:8070/place/`)
    .then((res) => setData(res.data))
    .catch((err) => console.log(err.message));
    console.log(Data);

    const DOWNPDF = () => {
        const doc = new jsPDF("landscape","pt",[1000,1500]);
        doc.html(document.querySelector("#PLACE_REPORT"),{
            callback:function(pdf) {
                pdf.save("place report.pdf")
            }
        })
    }

    return ( 
        <div>
        <div className="IntContainer"> 
            <div className="container"> 
            <h1> Inventory List Report </h1>
            <table class="table table-success table-striped" id="PLACE_REPORT">

            <thead className="thead-light">
                <tr>
                    <th scope="col"> Category</th>
                    <th scope="col"> Name </th>
                    <th scope="col"> Details</th>
                    <th scope="col"> Adult Price </th>
                    <th scope="col">Child Price </th>
                    

                </tr>
            </thead>
         <tbody>
             { Data.map((places,key) =>(
             <tr>
 <td> {places.category} </td>
 <td> {places.name} </td>
 <td> {places.details} </td> 
 <td> {places.adultP} </td>
 <td> {places.childP}</td>
 <td> {places.Price} </td>
 <td> {places.Expiry_Date} </td>
 
 </tr>
          ))}
         </tbody>
            
            </table>
            <button class="btn btn-outline-success" onClick={() =>DOWNPDF()} >DOWNLOAD REPORT PDF FILE </button>
            </div>
       </div>
       </div>
       
     )
}

export default Generatereport;
*/
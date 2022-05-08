import React, { useState } from 'react'
import axios from 'axios';
import './Generatereport.css';
import jsPDF from 'jspdf';
import HotelSideMenu from '../HotelSideMenuComponent/HotelSideMenu'
import Footer from '../footer/footer'

const Generatereport = ()=> {

    const [Data, setData] = useState([]);

    axios.get(`http://localhost:8087/Production/view`)
    .then((res) => setData(res.data))
    .catch((err) => console.log(err.message));
    console.log(Data);

    const DOWNPDF = () => {
        const doc = new jsPDF("landscape","pt",[1000,1500]);
        doc.html(document.querySelector("#HOTEL_REPORT"),{
            callback:function(pdf) {
                pdf.save("hotel report.pdf")
            }
        })
    }

    return ( 
        <div>
            <HotelSideMenu/>
        <div className="IntContainer"> 
            <div className="container"> 
            <h1> Hotel Details Report </h1>
            <table class="table table-success table-striped" id="HOTEL_REPORT">

            <thead className="thead-light">
                <tr>
                    <th scope="col"> Hotel Name </th>
                    <th scope="col"> Hotel Location </th>
                    <th scope="col"> Hotel Owner Name </th>
                    <th scope="col"> Single Rooms </th>
                    <th scope="col"> Double Rooms </th>
                    <th scope="col"> Triple Rooms </th>
                    <th scope="col"> Other Features </th>
                    <th scope="col"> Number Of Rooms </th>

                </tr>
            </thead>
         <tbody>
             { Data.map((item,key) =>(
             <tr>
 <td> {item.Hotel_Name} </td>
 <td> {item.Hotel_Location} </td>
 <td> {item.Hotel_Owner_Name} </td> 
 <td> {item.Single_Rooms} </td>
 <td> {item.Double_Rooms}</td>
 <td> {item.Triple_Rooms} </td>
 <td> {item.Other_Features} </td>
 <td> {item.Number_Of_Rooms} </td>
 {/* <td> <button onClick={this.onDelete} class="btndoc1"> Delete </button></td> */}
 </tr>
          ))}
         </tbody>
            
            </table>
            <button class="btn btn-outline-success" onClick={() =>DOWNPDF()} >DOWNLOAD REPORT PDF FILE </button>
            </div>
            
       </div>
       <Footer/>
       </div>
       
       
     )
     
}

export default Generatereport;

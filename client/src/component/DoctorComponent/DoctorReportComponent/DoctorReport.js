import React, { useState } from 'react'
import axios from 'axios';
import './DoctorReport.css';
import jsPDF from 'jspdf';

const DoctorReport = ()=> {

    const [Data, setData] = useState([]);

    axios.get(`http://localhost:8087/doctor/view`)
    .then((res) => setData(res.data))
    .catch((err) => console.log(err.message));
    console.log(Data);

    const DOWNPDF = () => {
        const doc = new jsPDF("landscape","pt",[1000,1500]);
        doc.html(document.querySelector("#INVENTORY_REPORT"),{
            callback:function(pdf) {
                pdf.save("Hire Vehical Report.pdf")
            }
        })
    }

    return ( 
        <div>
        <div className="IntContainer"> 
            <div className="container"> 
            <h1> Hire Vehical Report </h1>
            <table class="table table-success table-striped" id="INVENTORY_REPORT">

            <thead className="thead-light">
                <tr>
                    <th scope="col"> Vehicle Owner Name </th>
                    <th scope="col"> vehicle Type </th>
                    <th scope="col"> Vehicle Modle </th>
                    <th scope="col"> Driver Name </th>
                    <th scope="col"> Driver Age </th>
                    <th scope="col"> Driving License </th>
                    

                </tr>
            </thead>
         <tbody>
             { Data.map((item,key) =>(
             <tr>
 <td> {item.vehicle_Owner_Name} </td>
 <td> {item.vehicle_type} </td>
 <td> {item.Vehicle_modle} </td> 
 <td> {item.Driver_name} </td>
 <td> {item.Driver_age}</td>
 <td> {item.Driving_license} </td>
 

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

export default DoctorReport;

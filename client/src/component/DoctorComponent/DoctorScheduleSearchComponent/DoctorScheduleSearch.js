import React, { useState, useEffect } from "react";
import axios from 'axios';
import './DoctorScheduleSearch.css';
import imgsSch1 from '../../../Images/Web search-pana.png'
import DoctorSideMenu from '../DoctorSideMenuComponent/DoctorSideMenu'
import moment from 'moment';

function SearchDoc() {
    const [search, setSearch] = useState('');
    const [Sch, setSchedule] = useState([]);
    const [filteredScheduleData, setFilteredData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8087/schedule/')
            .then((response) => {
                setSchedule(response.data);
            })
    }, [])

useEffect(() => {
    setFilteredData(
        Sch.filter((Sch) => Sch.doctorid.toLowerCase().includes(search.toLowerCase()))
        )
}, [search], Sch)


return (
    
    <div class="containerg">
    <div>
        <DoctorSideMenu/>
        </div>
        <div>
      <div className="SchSearchContainer">
    <div className="searchSchedule">
        <br/>
    <div className="container" id="searchScheduleForm">
        <h1 className="searchScheduleDetail">SEARCH DOCTOR SCHEDULE DETAILS </h1><br/><br/><br/>
        <h2> Enter Doctor Id to view the Schedule details</h2><br/>
        <input className="searchBarDoc.A" type="text" placeholder="Search..." onChange={(e) => {
            setSearch(e.target.value);
        }}/>
        <br/><br/>

       
        <table className="table.A">
            <thead className="thead-light">
                <tr>
                    <th> Schedule Details </th>
                </tr>
            </thead>
            <tbody>
                {filteredScheduleData.map((val) =>{
                    return <div key={val.id}>
                        <tr><td>Doctor ID : {val.doctorid} </td></tr>
                        <tr><td>Doctor Name : {val.name} </td></tr>
                        <tr><td>Working Day : {moment(val.workingDay).format("DD.MM.YYYY")} </td></tr>
                        <tr><td>Working Time : {val.workingTime} </td></tr>
                        <tr><td>Room No : {val.roomNo} </td></tr>
                        </div>
                     })}
            </tbody>
        </table> 
         
    </div>
    </div>
    </div>
    </div>
    <div>
        <img className="imgsSch1" src={imgsSch1} alt="Search icon" ></img>
</div>
     </div> 
  
);
 }
 
 export default SearchDoc;

import React, { useState } from 'react'
import axios from 'axios';
import DoctorSideMenuAdmin from '../DoctorSideMenuAdminComponent/DoctorSideMenuAdmin'
import Footer from '../footer/footer'

const DoctorUpdate = (prop) => {

    const id = prop.match.params.id;

    console.log(id);

    const [IUpdate, setIUpdate] = useState([]);

    axios.get('http://localhost:8087/doctor/view/${id}')
    .then((res) => setIUpdate(res.data))
    .catch((err) => console.log(err.message));
    console.log(IUpdate);

    const [vehicle_Owner_Name, setvehicle_Owner_Name] = useState("");
    const [vehicle_type, setvehicle_type] = useState("");
    const [Vehicle_modle, setVehicle_modle] = useState("");
    const [Driver_name, setDriver_name] = useState("");
    const [Driver_age, setDriver_age] = useState("");
    const [Driving_license, setDriving_license] = useState("");
    const [availableDate, setavailableDate] = useState("");
    const [availableTime, setavailableTime] = useState("");

    const getHotelDetails = (e) => {
        e.preventDefault();
        const datasetInt = {
          vehicle_Owner_Name,
            vehicle_type,
            Vehicle_modle,
            Driver_name,
            Driver_age,
            Driving_license,
            availableDate,
            availableTime



        }

        // console.log(datasetInt);

        axios.put(`http://localhost:8087/doctor/update/${id}`, datasetInt)
        .then(() => alert ("Hotel Details updated successfully"))
        .catch((err) => console.log(err.message));
        window.location = "/DoctorAllView";
    }

    

    return(

<div>
<DoctorSideMenuAdmin/>
        <div className="container">
            
            <h1> Update Rent Vehicle Details</h1>
        <div className="formUpdateRoom">
            <form onSubmit={getHotelDetails}>
                <div className="roomAdd">
                    <label for = "category" className = "form-label">Vehicle  Owner Name</label>
                    <input type="text" 
                    className="form-control"
                    name="vehicle_Owner_Name"
                    placeholder="Enter Vehical Owner Name"
                    defaultValue={IUpdate.vehicle_Owner_Name}
                    onChange = {(e) =>  setvehicle_Owner_Name(e.target.value)}
                    />
                </div>
                <br/>

                <div className="roomAdd">
                    <label for = "category" className = "form-label">Vehicle type</label>
                    <input type="text" 
                    className="form-control"
                    name="vehicle_type"
                    placeholder="Enter Vehicle type"
                    defaultValue={IUpdate.vehicle_type}
                    onChange = {(e) => setvehicle_type(e.target.value)}
                    />
                </div>
                <br/>

                <div className="roomAdd">
                    <label for = "category" className = "form-label">Vehicle Modle</label>
                    <input type="text" 
                    className="form-control"
                    name="Vehicle_modle"
                    placeholder="Enter Vehicle Modle"
                    defaultValue={IUpdate.Vehicle_modle}
                    onChange = { (e)=> setVehicle_modle(e.target.value)}
                    />
                </div>
                <br/>

                <div className="roomAdd">
                    <label for = "category" className = "form-label">Driver Name</label>
                    <input type="text" 
                    className="form-control"
                    name="Driver_name"
                    placeholder="Enter Driver Name"
                    defaultValue={IUpdate.Driver_name}
                    onChange = { (e)=> setDriver_name(e.target.value)}
                    />
                </div>
                <br/>
                <div className="roomAdd">
                    <label for = "category" className = "form-label">Driver Age</label>
                    <input type="text" 
                    className="form-control"
                    name="Driver_age"
                    placeholder="Enter Driver Age"
                    defaultValue={IUpdate.Driver_age}
                    onChange = { (e)=> setDriver_age(e.target.value)}
                    />
                </div>
                <br/>
                <div className="roomAdd">
                    <label for = "category" className = "form-label">Driving License</label>
                    <input type="text" 
                    className="form-control"
                    name="Driving_license"
                    placeholder="Enter Driving License"
                    defaultValue={IUpdate.Driving_license}
                    onChange = { (e)=> setDriving_license(e.target.value)}
                    />
                </div>
                <br/>
                <div className="roomAdd">
                    <label for = "category" className = "form-label">Available Date</label>
                    <input type="text" 
                    className="form-control"
                    name="availableDate"
                    placeholder="Enter Available Date"
                    defaultValue={IUpdate.availableDate}
                    onChange = { (e)=> setavailableDate(e.target.value)}
                    />
                </div>
                <br/>
                <div className="roomAdd">
                    <label for = "category" className = "form-label">Available Time</label>
                    <input type="text" 
                    className="form-control"
                    name="availableTime"
                    placeholder="Enter Available Time"
                    defaultValue={IUpdate.availableTime}
                    onChange = { (e)=> setavailableTime(e.target.value)}
                    />
                </div><br/><br/>

                <button className="btn btn-success" type="submit" /* onClick={this.onSubmit} */>
                    <i className="far fa-check-square">
                        &nbsp; Update Hire Vehicle Details
                    </i>
                </button>
                <br/><br/>
            </form>
            </div>
        </div>
        <div>
            <Footer/>
            </div>
        </div>
    )
}

export default DoctorUpdate;
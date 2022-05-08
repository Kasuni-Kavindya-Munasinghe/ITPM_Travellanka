import React, { useState } from 'react'
import axios from 'axios';
import HotelSideMenu from '../HotelSideMenuComponent/HotelSideMenu'
import Footer from '../footer/footer'

const HotelUpdate = (prop) => {

    const id = prop.match.params.id;

    console.log(id);

    const [IUpdate, setIUpdate] = useState([]);

    axios.get(`http://localhost:8087/Production/view/${id}`)
    .then((res) => setIUpdate(res.data))
    .catch((err) => console.log(err.message));
    console.log(IUpdate);

    const [Hotel_Name, setHotel_Name] = useState("");
    const [Hotel_Location, setHotel_Location] = useState("");
    const [Hotel_Owner_Name, setHotel_Owner_Name] = useState("");
    const [Single_Rooms, setSingle_Rooms] = useState("");
    const [Double_Rooms, setDouble_Rooms] = useState("");
    const [Triple_Rooms, setTriple_Rooms] = useState("");
    const [Other_Features, setOther_Features] = useState("");
    const [Number_Of_Rooms, setNumber_Of_Rooms] = useState("");

    const getHotelDetails = (e) => {
        e.preventDefault();
        const datasetInt = {
            Hotel_Name,
            Hotel_Location,
            Hotel_Owner_Name,
            Single_Rooms,
            Double_Rooms,
            Triple_Rooms,
            Other_Features,
            Number_Of_Rooms



        }

        // console.log(datasetInt);

        axios.put(`http://localhost:8087/Production/update/${id}`, datasetInt)
        .then(() => alert ("Hotel Details updated successfully"))
        .catch((err) => console.log(err.message));
        window.location = "/viewhotel";
    }

    

    return(

<div>
        <HotelSideMenu/>
        <div className="container">
            
            <h1> Update Hotel Details</h1>
        <div className="formUpdateRoom">
            <form onSubmit={getHotelDetails}>
                <div className="roomAdd">
                    <label for = "category" className = "form-label">Hotel_Name</label>
                    <input type="text" 
                    className="form-control"
                    name="category"
                    placeholder="Enter category type"
                    defaultValue={IUpdate.Hotel_Name}
                    onChange = {(e) =>  setHotel_Name(e.target.value)}
                    />
                </div>

                <div className="roomAdd">
                    <label for = "category" className = "form-label">Hotel_Location</label>
                    <input type="text" 
                    className="form-control"
                    name="RoomId"
                    placeholder="Enter Room ID"
                    defaultValue={IUpdate.Hotel_Location}
                    onChange = {(e) => setHotel_Location(e.target.value)}
                    />
                </div>

                <div className="roomAdd">
                    <label for = "category" className = "form-label">Hotel_Owner_Name</label>
                    <input type="text" 
                    className="form-control"
                    name="BedId"
                    placeholder="Enter Bed ID"
                    defaultValue={IUpdate.Hotel_Owner_Name}
                    onChange = { (e)=> setHotel_Owner_Name(e.target.value)}
                    />
                </div>

                <div className="roomAdd">
                    <label for = "category" className = "form-label">Single_Rooms</label>
                    <input type="number" 
                    className="form-control"
                    name="BedId"
                    placeholder="Enter Bed ID"
                    defaultValue={IUpdate.Single_Rooms}
                    onChange = { (e)=> setSingle_Rooms(e.target.value)}
                    />
                </div>

                <div className="roomAdd">
                    <label for = "category" className = "form-label">Double_Rooms</label>
                    <input type="number" 
                    className="form-control"
                    name="BedId"
                    placeholder="Enter Bed ID"
                    defaultValue={IUpdate.Double_Rooms}
                    onChange = { (e)=> setDouble_Rooms(e.target.value)}
                    />
                </div>

                <div className="roomAdd">
                    <label for = "category" className = "form-label">Triple_Rooms</label>
                    <input type="number" 
                    className="form-control"
                    name="BedId"
                    placeholder="Enter Bed ID"
                    defaultValue={IUpdate.Triple_Rooms}
                    onChange = { (e)=> setTriple_Rooms(e.target.value)}
                    />
                </div>

                <div className="roomAdd">
                    <label for = "category" className = "form-label">Other_Features</label>
                    <input type="text" 
                    className="form-control"
                    name="BedId"
                    placeholder="Enter Bed ID"
                    defaultValue={IUpdate.Other_Features}
                    onChange = { (e)=> setOther_Features(e.target.value)}
                    />
                </div>

                <div className="roomAdd">
                    <label for = "category" className = "form-label">Number_Of_Rooms</label>
                    <input type="number" 
                    className="form-control"
                    name="BedId"
                    placeholder="Enter Bed ID"
                    defaultValue={IUpdate.Number_Of_Rooms}
                    onChange = { (e)=> setNumber_Of_Rooms(e.target.value)}
                    />
                </div><br/>

                <button className="btn btn-success" type="submit" /* onClick={this.onSubmit} */>
                    <i className="far fa-check-square">
                        &nbsp; Update Hotel Details
                    </i>
                </button>

            </form>
            </div>
        </div>
        <div>
            <Footer/>
            </div>
        </div>
    )
}

export default HotelUpdate;
const router = require("express").Router();
let doctor = require("../models/doctor");



//http://localhost:8087/doctor/add
//Adding a doctor

router.route("/add").post((req, res) => {
    
    const vehicle_Owner_Name = req.body.vehicle_Owner_Name;
    const vehicle_type= req.body.vehicle_type;
    const Vehicle_modle = req.body.Vehicle_modle;
    const Driver_name = req.body.Driver_name;
    const Driver_age = req.body.Driver_age;
    const Driving_license = req.body.Driving_license;
    const availableDate = req.body.availableDate;
    const availableTime = req.body.availableTime;
    const password = req.body.password;
    const conpassword = req.body.conpassword;


    const newDoctor = new doctor({
        vehicle_Owner_Name,
        vehicle_type,
        Vehicle_modle,
        Driver_name,
        Driver_age,
        Driving_license,
        availableDate,
        availableTime,
        password,
        conpassword

    })

    newDoctor.save().then(() => {
        res.json("Doctor added")
    }).catch((err) => {
        console.log(err);
    })
})

//http://localhost:8087/doctor

router.route("/").get((req, res) => {

    doctor.find().then((doctors) => {
        res.json(doctors)
    }).catch((err) => {
        console.log(err);
    })
})

//http://localhost:8087/doctor/update/doctorid

router.route("/update/:id").put(async(req, res) => {
    let userId = req.params.id;
    const {vehicle_Owner_Name,
        vehicle_type,
        Vehicle_modle,
        Driver_name,
        Driver_age,
        Driving_license,
        availableDate,
        availableTime,
        password,
        conpassword } = req.body;

    const updateDoctor = {
        vehicle_Owner_Name,
        vehicle_type,
        Vehicle_modle,
        Driver_name,
        Driver_age,
        Driving_license,
        availableDate,
        availableTime,
        password,
        conpassword
    }

    const update = await doctor.findByIdAndUpdate(userId, updateDoctor)
        .then(() => {
            res.status(200).send({ status: "User updated" })
        }).catch(err => {
            console.log(err);
            res.status(500).send({ status: "Error with updating data", error: err.message });
        })
})


router.route("/delete/:id").delete(async(req, res) => {
    let userId = req.params.id;

    await doctor.findByIdAndDelete(userId)
        .then(() => {
            res.status(200).send({ status: "User deleted" });
        }).catch((err) => {
            console.log(err.message);
            res.status(500).send({ status: "Error with deleting user", error: err.message });
        })
})


//To get the details of a particular user

router.route("/get/:id").get(async(req, res) => {
    let userId = req.params.id;
    const user = await doctor.findById(userId)
        .then(() => {
            res.status(200).send({ status: "User fetched" })
        }).catch((err) => {
            console.log(err.message);
            res.status(500).send({ status: "Error with get user", error: err.message });
        })
})


module.exports = router;
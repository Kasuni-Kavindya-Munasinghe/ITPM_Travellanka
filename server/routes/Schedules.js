const router = require("express").Router();
let Schedule = require("../models/Schedule");



//http://localhost:8087/Schedule/add
//Adding a schedule

router.route("/add").post((req, res) => {
    const pickup_location = req.body.pickup_location;
    const date = req.body.date;
    const time = req.body.time;
    const vehicle_type = req.body.vehicle_type;
    const pasenger_count = req.body.pasenger_count;
    const rant_type = req.body.rant_type;
    const driver_age = req.body.driver_age;
    

    const newSchedule = new Schedule({
        pickup_location,
        date,
        time,
        vehicle_type,
        pasenger_count,
        rant_type,
        driver_age

    })

    newSchedule.save().then(() => {
        res.json("A new Doctor Schedule added")
    }).catch((err) => {
        console.log(err);
    })
})

//http://localhost:8087/Schedule

router.route("/").get((req, res) => {

    Schedule.find().then((Schedules) => { 
        res.json(Schedules)
    }).catch((err) => {
        console.log(err);
    })
})

//http://localhost:8087/Schedule/update/scheduleid

router.route("/update/:id").put(async(req, res) => {
    let scheduleId = req.params.id;
    const {  pickup_location,
        date,
        time,
        vehicle_type,
        pasenger_count,
        rant_type,
        driver_age} = req.body;

    const updateSchedule = {
        pickup_location,
        date,
        time,
        vehicle_type,
        pasenger_count,
        rant_type,
        driver_age
    }

    const update = await Schedule.findByIdAndUpdate(scheduleId, updateSchedule)
        .then(() => {
            res.status(200).send({ status: "Schedule updated" })
        }).catch(err => {
            console.log(err);
            res.status(500).send({ status: "Error with updating schedule data", error: err.message });
        })
})


router.route("/delete/:id").delete(async(req, res) => {
    let scheduleId = req.params.id;

    await Schedule.findByIdAndDelete(scheduleId)
        .then(() => {
            res.status(200).send({ status: "Schedule deleted" });
        }).catch((err) => {
            console.log(err.message);
            res.status(500).send({ status: "Error with deleting the schedule", error: err.message });
        })
})


//To get the details of a particular schedule

router.route("/get/:id").get(async(req, res) => {
    let scheduleId = req.params.id;
    const schedule = await Schedule.findById(scheduleId)
        .then(() => {
            res.status(200).send({ status: "Schedule fetched" })
        }).catch((err) => {
            console.log(err.message);
            res.status(500).send({ status: "Error with getting the schedule", error: err.message });
        })
})


module.exports = router;
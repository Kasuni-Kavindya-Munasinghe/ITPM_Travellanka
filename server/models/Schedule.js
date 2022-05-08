const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const doctorScheduleSchema = new Schema({
    pickup_location: {
        type: String,
        required: true
    },

    date: {
        type: String,
        required: true
    },

    time: {
        type: String,
        required: true
    },

    vehicle_type: {
        type: String,
        required: true
    },

    pasenger_count: {
        type: String,
        required: true
    },

    rant_type: {
        type: String,
        required: true
    },

    driver_age: {
        type: String,
        required: true
    },



})

const Schedule = mongoose.model("Schedule", doctorScheduleSchema);

module.exports = Schedule;
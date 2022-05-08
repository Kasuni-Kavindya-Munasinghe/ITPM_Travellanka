const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const doctorSchema = new Schema({
    vehicle_Owner_Name: {
        type: String,
        required: true
    },

    vehicle_type: {
        type: String,
        required: true
    },

    Vehicle_modle: {
        type: String,
        required: true
    },

    Driver_name: {
        type: String,
        required: true
    },

    Driver_age: {
        type: String,
        required: true
    },

    Driving_license: {
        type: String,
        required: true
    },

    availableDate: {
        type: String,
        required: true
    },

    availableTime: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    conpassword: {
        type: String,
        required: true
    }


})

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;
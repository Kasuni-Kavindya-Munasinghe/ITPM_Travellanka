const mongoose = require('mongoose');
const schema = mongoose.Schema;
const ProductionSchema = new schema({

    Hotel_Name: {
        type: String,
        required: true
    },
    Hotel_Location: {
        type: String,
        required: true
    },
    Hotel_Owner_Name: {
        type: String,
        required: true
    },
    Single_Rooms: {
        type: Number,
        required: true
    },
    Double_Rooms: {
        type: Number,
        required: true
    },
    Triple_Rooms: {
        type: Number,
        required: true
    },
    Other_Features: {
        type: String,
        required: true
    },
    Number_Of_Rooms: {
        type: Number,
        required: true
    }
});
const Productions = mongoose.model("Productions", ProductionSchema);
module.exports = Productions;
const mongoose=require('mongoose');

const Schema= mongoose.Schema;

const placeSchema= new Schema({

    
    name:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    details:{
        type: String,
        required: true
    },
    adultP:{
        type: Number,
        required: true
    },
    childP:{
        type: Number,
        required: true
    }
})

const Place= mongoose.model("Place",placeSchema);

module.exports= Place;
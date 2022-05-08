const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const campingSchema = new Schema({
    firstName : {
        type : String,
        required: true
    },
    secondName :{
        type : String,
        required: true
    },
   
    
    email : {
        type : String,
        required : true
    },
    contactNumber :{
        type : Number,
        required : true
    },
    
    torchSelected:{
        type:Boolean,
        required:true
    },    
    torchQty:{
        type:Number,
        required:true
    },
    tentSelected:{
        type:Boolean,
        required:true
    },    
    tentQty:{
        type:Number,
        required:true
    },
    waterBottleSelected:{
        type:Boolean,
        required:true
    },    
    waterBottleQty:{
        type:Number,
        required:true
    },
    firstaidkitSelected:{
        type:Boolean,
        required:true
    },    
    firstaidkitQty:{
        type:Number,
        required:true
    },
    campingpillowSelected:{
        type:Boolean,
        required:true
    },    
    campingpillowQty:{
        type:Number,
        required:true
    },
    sleepingbagsSelected:{
        type:Boolean,
        required:true
    },    
    sleepingbagsQty:{
        type:Number,
        required:true
    },
    sleepingpadsSelected:{
        type:Boolean,
        required:true
    },    
    sleepingpadsQty:{
        type:Number,
        required:true
    },
    flashlightSelected:{
        type:Boolean,
        required:true
    },    
    flashlightQty:{
        type:Number,
        required:true
    },
    campchairsSelected:{
        type:Boolean,
        required:true
    },    
    campchairsQty:{
        type:Number,
        required:true
    },
    compassSelected:{
        type:Boolean,
        required:true
    },    
    compassQty:{
        type:Number,
        required:true
    },
    totalValue:{
        type:Number,
        required:true
    }





});

const Camping = mongoose.model("Camping", campingSchema);
module.exports = Camping;
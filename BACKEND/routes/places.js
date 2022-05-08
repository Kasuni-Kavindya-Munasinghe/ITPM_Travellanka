const router= require("express").Router();
let Place = require("../models/Place");

//http://localhost:8070/place/add
//add
router.route("/add").post((req,res)=>{

    const category = req.body.category;
    const name = req.body.name;
    const details = req.body.details;
    const adultP = Number(req.body.adultP);
    const childP = Number(req.body.childP);

    const newPlace = new Place({

        category,
        name,
        details,
        adultP,
        childP

    })

    newPlace.save().then(()=>{
        res.json("Place Added")
    }).catch((err)=>{
        console.log(err);
    })

})

//http://localhost:8070/place/
//get
router.route("/").get((req,res)=>{

    Place.find().then((places)=>{
        res.json(places)
    }).catch((err)=>{
        console.log(err)
    })
})

//http://localhost:8070/place/update/placeid
//update
router.route("/update/:id").put(async(req,res)=>{
    let placeId = req.params.id;
    const {category,name,details,adultP,childP} = req.body;

    const updatePlace = {
        category,
        name,
        details,
        adultP,
        childP
    }

    const update = await Place.findByIdAndUpdate(placeId, updatePlace)
    .then(()=>{
        res.status(200).send({status:"Place Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data",error: err.message});
    })
})

//http://localhost:8070/place/delete/placeid
//delete
router.route("/delete/:id").delete(async(req,res)=>{
    let placeId = req.params.id;

    await Place.findByIdAndDelete(placeId).then(()=>{
        res.status(200).send({status: "Place delete"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete user",error: err.message});
    })
})

//http://localhost:8070/place/get/placeid
//only get one 
router.route("/get/:id").get(async (req,res)=>{
    let placeId = req.params.id;
    const place = await Place.findById(placeId)
    .then((place)=>{
        res.status(200).send({status: "Place fetched", place})
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get place", error: err.message});
    })
})

module.exports = router;
const express = require('express');
const router = express.Router();
let Production = require("../models/Production");



router.post('/add', (req, res) => {


    const newProduction = new Production({

        Hotel_Name: req.body.Hotel_Name,
        Hotel_Location: req.body.Hotel_Location,
        Hotel_Owner_Name: req.body.Hotel_Owner_Name,
        Single_Rooms: req.body.Single_Rooms,
        Double_Rooms: req.body.Double_Rooms,
        Triple_Rooms: req.body.Triple_Rooms,
        Other_Features: req.body.Other_Features,
        Number_Of_Rooms: req.body.Number_Of_Rooms

    });

    

    newProduction.save().then(() =>
        res.json("Production Added")
    ).catch((err) => res.status(400).json(err.message));

});



router.get('/view', (req, res) => {
    Production.find().then(product => res.json(product))
        .catch((err) => res.status(400).json(err.message));

});


router.put('/update/:id', (req, res) => {
    Production.findById(req.params.id).then(product => {
            product.Hotel_Name = req.body.Hotel_Name;
            product.Hotel_Location = req.body.Hotel_Location;
            product.Hotel_Owner_Name = req.body.Hotel_Owner_Name;
            product.Single_Rooms = req.body.Single_Rooms;
            product.Double_Rooms = req.body.Double_Rooms;
            product.Triple_Rooms = req.body.Triple_Rooms;
            product.Other_Features = req.body.Other_Features;
            product.Number_Of_Rooms = req.body.Number_Of_Rooms;
            product.save().then(() => res.json("Product update successfully"))
                .catch((err) => res.status(400).json(err.message));

        })
        .catch((err) => res.status(400).json(err.message));

});

router.delete('/delete/:id', (req, res) => {
    Production.findByIdAndDelete(req.params.id).then(() => res.json("Product deleted"))
        .catch((err) => res.status(400).json(err.message));

});

router.route("/view/:id").get(async(req, res) => {
    let userId = req.params.id;
    const user = await Production.findById(userId)
        .then(response => res.json(response))
        .catch((err) => {
            console.log(err.message);
            res.status(500).send({ status: "Error with get user", error: err.message });
        })
        
})




module.exports = router;
const router = require("express").Router();
let Camping = require("../models/camping");



router.route('/add').post((req, res) => {

    const firstName = req.body.firstName;
    const secondName = req.body.secondName;
    const email = req.body.email;
    const contactNumber = Number(req.body.contactNumber);
    const torchSelected=req.body.torchSelected;
    const torchQty=req.body.torchQty;
    const tentSelected=req.body.tentSelected;
    const tentQty=req.body.tentQty;
    const waterBottleSelected=req.body.waterBottleSelected;
    const waterBottleQty=req.body.waterBottleQty;
    const firstaidkitSelected=req.body.firstaidkitSelected;
    const firstaidkitQty=req.body.firstaidkitQty;
    const campingpillowSelected=req.body.campingpillowSelected;
    const campingpillowQty=req.body.campingpillowQty;
    const sleepingbagsSelected=req.body.sleepingbagsSelected;
    const sleepingbagsQty=req.body.sleepingbagsQty;
    const sleepingpadsSelected=req.body.sleepingpadsSelected;
    const sleepingpadsQty=req.body.sleepingpadsQty;
    const flashlightSelected=req.body.flashlightSelected;
    const flashlightQty=req.body.flashlightQty;
    const campchairsSelected=req.body.campchairsSelected;
    const campchairsQty=req.body.campchairsQty;
    const compassSelected=req.body.compassSelected;
    const compassQty=req.body.compassQty;
    const totalValue=req.body.totalValue;



    

    const newCamping = new Camping({
        firstName,
        secondName,
        email,
        contactNumber,
        torchSelected,
        torchQty,
        tentSelected,
        tentQty,
        waterBottleSelected,
        waterBottleQty,
        firstaidkitSelected,
        firstaidkitQty,
        campingpillowSelected,
        campingpillowQty,
        sleepingbagsSelected,
        sleepingbagsQty,
        sleepingpadsSelected,
        sleepingpadsQty,
        flashlightSelected,
        flashlightQty,
        campchairsSelected,
        campchairsQty,
        compassSelected,
        compassQty,
        totalValue,



        
        
    })
    console.log(newCamping);
    newCamping.save().then(() => {
        res.json("camping items added")


    }).catch((err) => {
        console.log(err);
    })
})

//read
router.route("/").get((req, res) => {
    Camping.find().then((camping) => {
        res.json(camping)
    }).catch((err) => {
        console.log(err)
    })

})

//update
router.route("/update/:id").put(async (req, res) => {
    let userId = req.params.id;
    const { firstName,
        secondName,
        email,
        contactNumber,
        torchSelected,
        torchQty,
        tentSelected,
        tentQty,
        waterBottleSelected,
        waterBottleQty,
        firstaidkitSelected,
        firstaidkitQty,
        campingpillowSelected,
        campingpillowQty,
        sleepingbagsSelected,
        sleepingbagsQty,
        sleepingpadsSelected,
        sleepingpadsQty,
        flashlightSelected,
        flashlightQty,
        campchairsSelected,
        campchairsQty,
        compassSelected,
        compassQty,
        totalValue, } = req.body;
    const updateCamping = {
        firstName,
        secondName,
        email,
        contactNumber,
        torchSelected,
        torchQty,
        tentSelected,
        tentQty,
        waterBottleSelected,
        waterBottleQty,
        firstaidkitSelected,
        firstaidkitQty,
        campingpillowSelected,
        campingpillowQty,
        sleepingbagsSelected,
        sleepingbagsQty,
        sleepingpadsSelected,
        sleepingpadsQty,
        flashlightSelected,
        flashlightQty,
        campchairsSelected,
        campchairsQty,
        compassSelected,
        compassQty,
        totalValue,
        
    }
    const update = await Camping.findByIdAndUpdate(userId, updateCamping)
        .then(() => {
            res.status(200).send({ status: "user updated" })
        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error with updating data, error: err.message" });
        })
})
//delete
router.route("/delete/:id").delete(async (req, res) => {
    let userId = req.params.id;

    await Camping.findByIdAndDelete(userId)
        .then(() => {
            res.status(200).send({ status: "user deleted" });
        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error with delete user, error: err.message" });
        })

})

//search
router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;

    const user = await Camping.findById(userId)
        .then((camping) => {
            res.status(200).send({ status: "User fetched", camping });
        }).catch((err) => {
            console.log(err.message);
            res.status(500).send({ status: "Error with get user, error: err.message" });
        })

})
router.route("/:id").get((req, res) => {
    Camping.findById(req.params.id)
    .then( camping=> res.json(camping))
    .catch(err => res.status(400).json('Error: ' + err)); 
  })
module.exports = router;

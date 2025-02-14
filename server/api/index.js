const express = require('express');
const Purchase = require('../models/purchases');


const router = express.Router();

router.get("/purchases", async (req, res) => {
    //'reads' an entry into the server
    const purchases = await Purchase.find().exec();
    res.status(200).json({ purchases });
});

router.post("/purchases", async (req, res) => {
    const { purchase } = req.body;
    //object destructuring in javascript
    const {name,description,cost,method} = purchase;
    if (!name || !description || !cost || !method){
        res.status(400).json({error: 'Invalid input!'});
    }else{
        const newPurchase = await Purchase.create(purchase);
        res.status(200).json({newPurchase});
    }
});

router.delete("/purchases", async (req, res) => {
    const { purchaseName } = req.params.name;
    const deletePurchase = await Purchase.deleteOne({name: purchaseName});
    res.status(200).json({ deletePurchase });
});

module.exports = router;
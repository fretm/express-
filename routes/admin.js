const express = require('express');
const router = express.Router();
const admincontroler=require('../controllers/admin')
const product = require('../modules/products')
router.get("/products",admincontroler.getproductform);

router.post("/add-products",admincontroler.postproducts ); 

router.get("/", (req, res, next) => {
   res.render('homepage')
});




module.exports= router
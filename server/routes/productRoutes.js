const express=require('express');

const {createProduct,getProduct} =require('../controllers/productsController')
const router=express.Router()

router.post('/createProduct',createProduct)

module.exports=router 
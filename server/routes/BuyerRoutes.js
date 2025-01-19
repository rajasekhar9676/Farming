const express=require('express')
const {registerBuyer,loginBuyer,getAllBuyers}=require('../controllers/buyerController')
// const { default: BuyerLogin } = require('../../client/src/components/BuyerLogin')
const router=express.Router()

router.post('/register',registerBuyer)
router.post('/login',loginBuyer)
router.get('/getAllBuyers',getAllBuyers)

module.exports=router 
const express=require('express')

const {addRequirement,getRequirements,getAllRequirements}=require('../controllers/requirementController')
const {authBuyerMiddleware}=require('../middleware/authMiddleware')
const router=express.Router()


router.post('/createRequirement',authBuyerMiddleware,addRequirement)
router.get('/getRequirement',getRequirements)
router.get('/allRiq',getAllRequirements) 

module.exports=router 


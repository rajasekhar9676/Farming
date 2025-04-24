const express = require('express');
const {
  addRequirement,
  getRequirements,
  getAllRequirements,
  updateRequirement,
  deleteRequirement
} = require('../controllers/requirementController');
const { authBuyerMiddleware } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/create', authBuyerMiddleware, addRequirement);
router.get('/getBuyerRequirements', authBuyerMiddleware, getRequirements);
router.get('/getAllRequirements', getAllRequirements);
router.put('/update/:id', authBuyerMiddleware, updateRequirement);
router.delete('/delete/:id', authBuyerMiddleware, deleteRequirement);

module.exports = router;

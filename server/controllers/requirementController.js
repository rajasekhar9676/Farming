const Requirement = require('../models/Requirement');

// Add Requirement
const addRequirement = async (req, res) => {
  try {
    const { product, quantity, notes } = req.body;
     const buyerId=req.buyer.id
    const requirement = new Requirement({
      buyerId, // Comes from authBuyerMiddleware
      product,
      quantity,
      notes,
    });

    await requirement.save();
    res.status(201).json({ message: 'Requirement added successfully', requirement });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// Get All Requirements
const getRequirements = async (req, res) => {
  try {
    const requirements = await Requirement.find({ buyerId: req.buyer.id });
    res.status(200).json(requirements);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

 const getAllRequirements = async (req, res) => {
  try {
    const products = await Requirement.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { addRequirement, getRequirements,getAllRequirements};



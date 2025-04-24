const Requirement = require('../models/Requirement');

// CREATE - Add Requirement
const addRequirement = async (req, res) => {
  try {
    const { product, quantity, notes } = req.body;
    const buyerId = req.buyer.id; // Comes from authBuyerMiddleware

    const requirement = new Requirement({
      buyerId,
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

// READ - Get Buyer-Specific Requirements
const getRequirements = async (req, res) => {
  try {
    const requirements = await Requirement.find({ buyerId: req.buyer.id });
    res.status(200).json(requirements);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// READ - Get All Requirements (Admin/General)
const getAllRequirements = async (req, res) => {
  try {
    const products = await Requirement.find().populate('buyerId', 'name email');
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE - Update a Requirement
const updateRequirement = async (req, res) => {
  try {
    const { id } = req.params;
    const { product, quantity, notes } = req.body;

    const requirement = await Requirement.findOneAndUpdate(
      { _id: id, buyerId: req.buyer.id },
      { product, quantity, notes },
      { new: true }
    );

    if (!requirement) {
      return res.status(404).json({ message: 'Requirement not found or unauthorized' });
    }

    res.status(200).json({ message: 'Requirement updated successfully', requirement });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE - Delete a Requirement
const deleteRequirement = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Requirement.findOneAndDelete({ _id: id, buyerId: req.buyer.id });

    if (!deleted) {
      return res.status(404).json({ message: 'Requirement not found or unauthorized' });
    }

    res.status(200).json({ message: 'Requirement deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addRequirement,
  getRequirements,
  getAllRequirements,
  updateRequirement,
  deleteRequirement,
};

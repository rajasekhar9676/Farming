// models/Requirement.js
const mongoose=require('mongoose')
const requirementSchema = new mongoose.Schema({
    buyerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Buyer', required: true },
    product: { type: String, required: true },
    quantity: { type: Number, required: true },
    notes: { type: String },
  }, { timestamps: true });
  
  module.exports = mongoose.model('Requirement', requirementSchema); 
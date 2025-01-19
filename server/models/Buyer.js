const mongoose = require('mongoose');

const BuyerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true },
  password: { type: String, required: true },
  address: { type: String, required: true },
  businessType:{type: [String], default: []},
  preferredProducts: { type: [String], default: [] }, // Optional field
}, { timestamps: true });

module.exports = mongoose.model('Buyer', BuyerSchema);


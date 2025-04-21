const Product = require('../models/productModel');
const express=require('express')
const upload = require('../middleware/uploadMiddleware');  // Import the multer configuration
const authMiddleware=require('../middleware/authMiddleware')



// exports.addProduct = async (req, res) => {
//   // Check if the request contains an image URL or an image file
//   let image;

//   // If a file was uploaded (local file)
//   if (req.file) {
//     image = `/uploads/${req.file.filename}`; // Path to the uploaded image
//   } 
//   // If an image URL is provided in the request body
//   else if (req.body.imageUrl) {
//     image = req.body.imageUrl; // Use the external image URL
//   } 
//   else {
//     return res.status(400).json({ message: 'No image uploaded and no image URL provided' });
//   }

//   try {
//     const { name, price, quantity, negotiable } = req.body;
//     const farmerId = req.user.id; // Assuming user ID is available from middleware

//     // Create the product instance with the image URL (either local or external)
//     const product = new Product({ name, price, quantity, image, negotiable, farmerId });

//     // Save the product to the database
//     await product.save();
//     res.status(201).json({ message: 'Product added successfully', product });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

exports.addProduct = async (req, res) => {
  let image;

  if (req.file) {
    const serverUrl = `${req.protocol}://${req.get('host')}`;
    image = `${serverUrl}/uploads/${req.file.filename}`;
  } else if (req.body.imageUrl) {
    image = req.body.imageUrl;
  } else {
    return res.status(400).json({ message: 'No image uploaded and no image URL provided' });
  }

  try {
    const { name, price, quantity, negotiable } = req.body;
    const farmerId = req.user.id;

    if (!name || !price || !quantity) {
      return res.status(400).json({ message: 'Name, price, and quantity are required' });
    }

    const product = new Product({ name, price, quantity, image, negotiable, farmerId });

    await product.save();
    res.status(201).json({ message: 'Product added successfully', product });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({ message: 'Product updated successfully', updatedProduct });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.getFarmerProducts = async (req, res) => {
  try {
    const farmerId = req.user.id;
    const products = await Product.find({ farmerId });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


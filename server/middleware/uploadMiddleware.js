// // middleware/uploadMiddleware.js
// const multer = require('multer');
// const path = require('path');

// // Configure multer storage for image uploads
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/'); // Destination folder for the images
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname)); // Add timestamp to avoid filename conflicts
//   },
// });

// // Initialize multer with the storage configuration
// const upload = multer({ storage: storage });

// module.exports = upload;

// middleware/uploadMiddleware.js
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../config/cloudinary');

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'product_images', // optional
    allowed_formats: ['jpg', 'png', 'jpeg'],
  },
});

const upload = multer({ storage });

module.exports = upload;

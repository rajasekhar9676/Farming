const express=require('express');
const { authMiddleware } = require('../middleware/authMiddleware'); // Assuming authMiddleware for authentication
const upload = require('../middleware/uploadMiddleware');  // Import the multer configuration

const {addProduct,getProducts,updateProduct,deleteProduct} =require('../controllers/productsController')
const router=express.Router()

router.post('/addProduct', authMiddleware,upload.single('image'), addProduct); // Use upload.single('image') for file uploads
router.get('/getProducts',getProducts)
// Update a product
router.put('/updateProduct/:id', upload.single('image'), updateProduct);

// Delete a product
router.delete('/deleteProduct/:id', deleteProduct);

module.exports=router 





const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { connectToDatabase } = require('./config/db');
const userRouter = require('./routes/userRoutes');
const {authMiddleware,authBuyerMiddleware} = require('./middleware/authMiddleware');
const requirementRouter=require('./routes/RequirementRoutes')
require('dotenv').config();
const path=require('path')
const multer=require('multer')

const app = express();


// Connect to the database
connectToDatabase();

// Middleware
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true }));

app.use(cors());


// Set up multer storage for local file uploads

// const storage=multer.diskStorage({
//   destination:(req,file,cb)=>{
//     cb(null,'uploads/');
//   },
//   filename:(req,file,cb)=>{
//     cb(null,Date.now()+path.extname(file.originalname))
//   },
// })

// const upload=multer({storage:storage});
app.use('/uploads',express.static('uploads')); 


// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/products',require('./routes/productRoutes'))
app.use('/api/buyers',require('./routes/BuyerRoutes'))
app.use('/api/reqi',require('./routes/RequirementRoutes'))


// const crypto = require('crypto');
// const secret = crypto.randomBytes(32).toString('hex');
// console.log(secret);


// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


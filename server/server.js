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

// app.use(cors());
app.use(cors({
  origin: ['http://localhost:3000', 'https://raitheraju.co.in'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true,
}));

// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/products',require('./routes/productRoutes'))
app.use('/api/buyers',require('./routes/BuyerRoutes'))
app.use('/api/reqi',require('./routes/RequirementRoutes'))


// const crypto = require('crypto');
// const secret = crypto.randomBytes(32).toString('hex');
// console.log(secret);



// const app = express();
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


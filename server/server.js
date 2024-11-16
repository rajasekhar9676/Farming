// const express=require('express')
// const mongoose=require('mongoose')
// const cors=require('cors')
// const {connectToDatabase}=require('./config/db')
// const userRouter=require('./routes/userRoutes')
// const app=express()

// connectToDatabase()

// app.use(express.json())

// app.use(cors())


// //Routes

// app.use('/api/users',userRouter)

// const port=3000
// app.listen(port,()=>{
//   console.log(`Server running on port ${port}`)
// })

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { connectToDatabase } = require('./config/db');
const userRouter = require('./routes/userRoutes');

const app = express();

// Connect to the database
connectToDatabase();

// Middleware
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true }));

app.use(cors());

// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/products',require('./routes/productRoutes'))

// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

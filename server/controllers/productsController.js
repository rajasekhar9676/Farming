const Product=require('../models/productModel')

// const createProduct=async(req,res)=>{
//     const {name,price,quantity,description,category,image}=req.body;
//     try{
//     const newProduct=new product({name,price,quantity,description,category,image})
//     await newProduct.save();
//     res.status(201).send('Product created successfully')
//     console.log('Product created successfully')
//     }catch(err){
//    res.status(400).send('Invalid data')
//    console.log(err)
//     }
// }

// module.exports=createProduct;


const createProduct = async (req, res) => {
    console.log("Request Body:", req.body); // Debugging
    const { name, price, quantity, description, category, image } = req.body;
    
    try {
      const newProduct = new Product({ name, price, quantity, description, category, image });
      await newProduct.save();
      res.status(201).send('Product created successfully');
    } catch (err) {
      res.status(400).send('Invalid data');
      console.log(err);
    }
  };
  
  const getProduct = async (req, res) => {
    try{
   const product=await Product.find()
   res.status(200).send('Product found')
    }catch(err){
    console.log(error)
    }
  }
  module.exports= {createProduct,getProduct}  
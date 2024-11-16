// const {User}=require('../models/userModel')

// const register= async(req,res)=>{
//   const {name,email,password,address}=req.body
//   try{
//   const existingUser= await User.findOne({email})
//   if (existingUser){
//     return res.status(400).send('User already exists')
//   }
//    const createUser=new User({
//     email,name,password,address
//    })

//    await createUser.save()
//    res.status(201).send('User created Successfully')
   
//   }catch(errr){
//     console.log(error)
//     res.status(500).send(error.message)
//   }
// }

// module.exports=register 


const User = require('../models/userModel');

const register = async (req, res) => {
  const { name, email, password, address } = req.body;
  try {
    const existingUser = await User.findOne({ email }); // Fix the query
    if (existingUser) {
      return res.status(400).send('User already exists');
    }

    const createUser = new User({
      email,
      name,
      password,
      address,
    });

    await createUser.save();
    res.status(201).send('User created Successfully');
  } catch (error) {
    console.log(error); // Fix error logging
    res.status(500).send(error.message);
  }
};
module.exports = register;

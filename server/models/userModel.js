// const mongoose=require('mongoose')

// const UserSchema=new mongoose.Schema({
//     email:{type:String,reqquired:true},
//     name:{type:String,required:true},
//     password:{type:String,required:true},
//     address:{type:String,required:true}

// })
// // const User=mongoose.model('user',UserSchema)
// module.exports=mongoose.model('user',UserSchema)


const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  address: { type: String, required: true },
});

module.exports = mongoose.model('user', UserSchema);

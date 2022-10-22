const jwt=require('jsonwebtoken');
const mongoose  = require("mongoose");
const bcrypt =require("bcryptjs");




const userShema = new mongoose.Schema({
      name:{
            type:String,
            required:true
      },
      email:{
            type:String,
            required:true
      },
      Phone:{
            type:Number,
            required:true
      },
      work:{
            type:String,
            required:true
      },
      password:{
            type:String,
            required:true
      },
      cpassword:{
            type:String,
            required:true
      },
      tokens:[
            {
                token:{
                  type:String,
                  required:true
                }     
            }
      ]
})


// we are hashing the password 

userShema.pre('save',async function (next) {
     console.log("huu")
      if(this.isModified('password')){
      this.password = await bcrypt.hash(this.password,12);
      this.cpassword = await bcrypt.hash(this.cpassword,12);
      }
      next();
});


// we are generating the token 
userShema.methods.generateAuthToken=async function (){

      try{
            let token =jwt.sign({_id:this._id},process.env.SECRET_KEY);
            this.tokens=this.tokens.concat({token:token});

            await this.save();
            return token;

      }catch(err)
      {
            console.log(err);
      }
      
}


const User=new mongoose.model('USERS',userShema);

module.exports=User;
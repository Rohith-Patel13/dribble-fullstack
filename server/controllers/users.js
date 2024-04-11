const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");

const Token = require("../models/token")
const sendEmailId = require("../utils/sendEmail"); // Node.js doesn't support ES6 import statements natively yet. So, Use CommonJS syntax (require/module.exports)
const crypto = require("crypto") // global module, so need not to install



require("dotenv").config()

const User = require("../models/users")



// create handler function
exports.createUser = async (requestObject,responseObject)=>{
    console.log(requestObject.body,"createUser")

    const { name, username, email, password,isChecked } = requestObject.body;

    try {
        const existingUser = await User.findOne({$or:[{username},{email}]})
        if(existingUser){
            let errorMessage = null;
            if (existingUser.username === username) {
                errorMessage = {errorText:"Username has already been taken",at:"username"};
            }
            else if (existingUser.email===email){
                errorMessage = {errorText:"Email has already been taken",at:"email"};
            }
            return responseObject.send({errorMessage});
        }

        // encrypted password
        const encryptedPassword = await bcrypt.hash(password,10)

        // Create new user
        const newUser = await User.create({ name, username, email, password:encryptedPassword,isChecked });
        console.log(newUser,"newUser")

        // Respond with created user        
        responseObject.status(201).send(newUser); 
    } catch (error) {
        console.log(error.message,"server")
        responseObject.status(500)// server error
        responseObject.send(error.message)
    }
}



// login user
exports.loginUser = async (requestObject,responseObject)=>{
    console.log(requestObject.body)
    const {email,password} = requestObject.body
    try {
        const existingUser = await User.findOne({$or:[{email}]})
        if(!existingUser){
            responseObject.status(400);
            responseObject.send("Invalid user");
        }
        if(existingUser){
            const comparePassword = await bcrypt.compare(password, existingUser.password);
            console.log(comparePassword); 
            if (!comparePassword) {
                responseObject.status(400);
                responseObject.send("Invalid password");
            }else{
                const payload = {
                    username: existingUser.username,
                    name: existingUser.name,
                    email:existingUser.email,
                    user_id: existingUser._id,
                };
                const jwtCreatedToken = await jwt.sign(payload, process.env.SECRET_STRING);
                  responseObject.send({
                    jwtToken: jwtCreatedToken,
                    userData:payload,
                });
            }       
        }
    } catch (error) {
        console.log(error.message,"server")
        responseObject.status(500)// server error
        responseObject.send(error.message)        
    }
}


exports.emailLogic = async (requestObject,responseObject)=>{
    console.log(requestObject.body)
    const {emailId} = requestObject.body
    console.log(emailId)
    try {
        const existingUser = await User.findOne({$or:[{email:emailId}]})
        console.log(existingUser,"existingUser")
        if(!existingUser){
            responseObject.status(400);
            responseObject.send("Invalid user");
        }
        if(existingUser){
        // Check if there's already an existing token for the user
        let token = await Token.findOne({ userId: existingUser._id });
        if (token) {
            // If a token already exists, update it
            token.token = crypto.randomBytes(32).toString("hex");
            await token.save();
        } else {
            // If no token exists, create a new one
            token = await Token.create({
                userId: existingUser._id,
                token: crypto.randomBytes(32).toString("hex")
            });
        }
            console.log(token,"token")
    
            const url = `${process.env.BASE_URL}${existingUser._id}/verify/${token.token}`
            console.log(url,"url")
            await sendEmailId(emailId,"Verify Email",url)

        }
    } catch (error) {
        console.log(error.message,"at server catch")
        responseObject.status(500).send({message:"Internal server error"})
    }
}



/*
exports.verifyUser= async(responseObject,requestObject)=>{
    console.log(requestObject.body)
    try {
        const user = await User.findOne(
            {_id:requestObject.params.user_id}
        )
        if(!user) return responseObject.status(400).send({message:"Invalid link"})

        const token = await Token.findOne({
            userId:user._id,
            token:requestObject.params.token
        })
        if(!token) return responseObject.status(400).send({message:"Invalid link"})
        await User.updateOne({_id:user._id,verified:true})
        await token.remove()
        responseObject.status(200).send({message:"Email verified successfully"})
    } catch (error) {
        responseObject.status(500).send({message:"Internal server error"})
    }
}
*/
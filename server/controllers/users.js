const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");

const sendEmailId = require("../utils/sendEmail"); // Node.js doesn't support ES6 import statements natively yet. So, Use CommonJS syntax (require/module.exports)
// const crypto = require("crypto") // global module, so need not to install



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
        console.log(existingUser,"retrieved from database")
        if(existingUser===null){   
            return responseObject.send({errorMessage:{errorText:"Invalid Registered Email",at:"email"}});
        }
        if(existingUser){
            const comparePassword = await bcrypt.compare(password, existingUser.password);
            console.log(comparePassword); 
            if (!comparePassword) {
                
                return responseObject.send({errorMessage:{errorText:"Invalid Password",at:"email"}});
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




// Email sending
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
            // const url = `${process.env.BASE_URL}/${existingUser._id}/verify/`
            // console.log(url,"url")
            const text = "You have successfully logged In to dribbble"
            await sendEmailId(emailId,"Thank You for Visiting Our dribbble Website!",text)
            responseObject.status(201).send({message:"An Email sent to your account please verify"})
        }
    } catch (error) {
        console.log(error.message,"at server catch")
        responseObject.status(500).send({message:"Internal server error"})
    }
}




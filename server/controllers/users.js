const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");

require("dotenv").config()

const User = require("../models/users")



// create handler function
exports.createUser = async (requestObject,responseObject)=>{
    console.log(requestObject.body,"createUser")

    const { name, username, email, password,isChecked } = requestObject.body;

    try {
        const existingUser = await User.findOne({$or:[{username},{email}]})
        if(existingUser){
            let errorMessage = "";
            if (existingUser.username === username) {
                errorMessage = "Username has already been taken";
            }
            else if (existingUser.email===email){
                errorMessage = "Email has already been taken";
            }
            return responseObject.send({errorMessage}); // indicate a bad request from the client
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
}

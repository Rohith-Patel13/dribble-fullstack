const bcrypt = require("bcrypt")

const User = require("../models/users")


// create handler function
exports.createUser = async (requestObject,responseObject)=>{
    console.log(requestObject.body,"createUser")

    const { name, username, email, password,isChecked } = requestObject.body;

    try {

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


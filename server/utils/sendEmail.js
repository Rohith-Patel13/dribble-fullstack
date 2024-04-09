
const nodemailer = require("nodemailer");
require("dotenv").config()



const sendEmailId = async(email,subject,text)=>{
    try {
        const transporter = nodemailer.createTransport({
            host:process.env.HOST,
            service:process.env.EMAIL_PORT,
            secure:Boolean(process.env.SECURE),
            auth:{
                user:process.env.USER,
                pass:process.env.PASS
            }
        })
        await transporter.sendMail({
            from:process.env.USER,
            to:email,
            subject:subject,
            text:text
        })
        console.log("Email sent successfully")
        responseObject.status(201).send({message:"An Email sent to your account please verify"})

    } catch (error) {
        console.log("Email not sent")
        console.log(error.message)
    }
}

// Node.js doesn't support ES6 module syntax by default
module.exports = sendEmailId // Use CommonJS syntax (require/module.exports)

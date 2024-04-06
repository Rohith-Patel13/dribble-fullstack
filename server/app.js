const express = require("express");
const mongoose = require('mongoose')
const app = express()
const usersRoutes = require("./routes/users")

app.use(express.json());

const cors = require('cors');
app.use(cors()); 

require("dotenv").config()

app.listen(8000,()=>{
    console.log(`server runs on port number: ${process.env.PORT || 8000}`)
    mongoose.connect(process.env.MONGODB_URI)
            .then(()=>console.log("Database connected"))
            .catch((err)=>console.log(err.message))
})

app.use("/api/users",usersRoutes)

const express = require("express")
const app = express()

app.use(express.json());


require("dotenv").config()

app.listen(process.env.PORT || 8009,()=>(
    console.log("Server Running at Given Port Number")
))

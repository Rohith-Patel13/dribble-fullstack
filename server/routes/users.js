const express = require("express")

const router = express.Router();
const usersController = require("../controllers/users")

// defining routes:-

// create
router.post("/create",usersController.createUser)

// login
router.post("/login",usersController.loginUser)

// email
router.post("/sendemail",usersController.emailLogic)

// router.get("/:id/verify/:token",usersController.verifyUser) // http://localhost:3000/6614fea60f4ffe2af73cb9f1/verify/12200ecdad5305d00c555rerr

module.exports = router;

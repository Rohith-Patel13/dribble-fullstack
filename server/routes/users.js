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

router.get("/:id/verify/:token",usersController.verifyUser)

module.exports = router;

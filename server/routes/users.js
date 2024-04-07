const express = require("express")

const router = express.Router();
const usersController = require("../controllers/users")

// defining routes:-

// create
router.post("/create",usersController.createUser)

router.post("/login",usersController.loginUser)


module.exports = router;

const express = require("express")
const { registerController, loginController, logoutController, refetchUSerController } = require("../controllers/authController")
const router = express.Router()



//REGISTER
router.post("/register", registerController)

//LOGIN
router.post("/login", loginController)

//LOGOUT
router.get("/logout", logoutController)

//FETCH CURRENT USER
router.get("/refetch", refetchUSerController)

module.exports = router
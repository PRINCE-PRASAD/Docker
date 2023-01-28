const express = require("express")

const authControler = require("../controlers/authControler")

const router = express.Router()

router.post("/signup", authControler.signUp)
router.post("/login", authControler.login)

module.exports = router;
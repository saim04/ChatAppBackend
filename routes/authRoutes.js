const authCtrl = require("../controllers/authControllers");

const router = require("express").Router();

router.post("/signup", authCtrl.signup);

router.post("/login", authCtrl.login);

router.post("/logout", authCtrl.logout);

module.exports = router;

const msgCtrl = require("../controllers/messageControllers");
const protectRoutes = require("../middlewares/protectRoutes");

const router = require("express").Router();

router.post("/send/:id", protectRoutes, msgCtrl.sendMessage);
router.get("/:id", protectRoutes, msgCtrl.getMessages);

module.exports = router;

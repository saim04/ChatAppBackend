const userControllers = require("../controllers/userControllers");
const protectRoutes = require("../middlewares/protectRoutes");

const router = require("express").Router();

router.get("/", protectRoutes, userControllers.getUsersForSidebar);

module.exports = router;

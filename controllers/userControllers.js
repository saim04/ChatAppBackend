const User = require("../models/userModel");

const userControllers = {
  getUsersForSidebar: async (req, res) => {
    try {
      const loggedInUser = req.user._id;

      const otherUsers = await User.find({ _id: { $ne: loggedInUser } }).select(
        "-password"
      );

      res.status(200).json(otherUsers);
    } catch (error) {
      console.log("Error in GetUserForSidebar controller", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = userControllers;

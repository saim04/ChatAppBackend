const mongoose = require("mongoose");

const connectToMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MongoDb");
  } catch (error) {
    console.log("Error Connecting to Mongo Db ", error.message);
  }
};

module.exports = connectToMongo;

const express = require("express");
const dotenv = require("dotenv");
const connectToMongo = require("./config/connectToMongo");
const cookieParser = require("cookie-parser");
const { app, server } = require("./socket/socket");

dotenv.config();

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/messages", require("./routes/messageRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.get("/", (req, res) => {
  res.send("Server is running...");
});
server.listen(PORT, () => {
  connectToMongo();
  console.log(`Server Running on PORT ${PORT}`);
});

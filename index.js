const express = require("express");
const dotenv = require("dotenv");
const connectToMongo = require("./config/connectToMongo");
const cookieParser = require("cookie-parser");
const { app, server } = require("./socket/socket");
const cors = require("cors");
dotenv.config();

const PORT = process.env.PORT || 8000;
const allowedOrigins = [
  "http://localhost:5173",
  "https://mern-chat-app-lake-one.vercel.app",
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true, // allow cookies/auth headers
  })
);

app.use(cookieParser());
app.use(express.json());

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

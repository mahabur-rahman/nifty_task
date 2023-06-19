const express = require("express");
const app = express();
const colors = require("colors");
const cors = require("cors");
// dotenv config
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 5000;

// ROUTE
const authRoute = require("./routes/authRoute");
const userRoute = require("./routes/userRoute");

// connect to db
const connectedDB = require("./db/connect");
connectedDB();

// middleware
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

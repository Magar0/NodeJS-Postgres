const express = require("express");
const cors = require("cors");
const dotEnv = require("dotenv");
const addRoutes = require("./routes/add");
const sequelize = require("./config/database");

dotEnv.config();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Api Is working" });
});

app.use("/add", addRoutes);

app.use("/", (err, req, res, next) => {
  res.status(500).json("Something Went Wrong");
});

sequelize
  .sync()
  .then(() => console.log("Postgres Database synchronized"))
  .catch((err) => console.log(err));

//server listening
app.listen(PORT, () => {
  console.log("server is running on port:", PORT);
});

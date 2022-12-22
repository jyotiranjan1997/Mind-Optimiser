const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/users");
const productRoute = require("./routes/products");
const cartRoutes = require("./routes/carts");
const orderRoute = require("./routes/orders");
const dotenv = require("dotenv");
const navbarRoutes = require("./routes/navbar");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

/* MONGODB CONNECT */
mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log(err);
    console.log("Unable to connect !");
  });

/* BASIC */
app.use(express.json());
app.use(cors());

/* WELCOME */
app.get("/", (req, res) => {
  res.send("WELCOME TO BEAUTYBEBO.COM BACKEND");
});

/* ROUTES */
app.use("/users", userRoutes);
// app.use("/products", productRoute);
// app.use("/carts", cartRoutes);
// app.use("/orders", orderRoute);
// app.use("/navbars", navbarRoutes);

/* LISTENING */
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

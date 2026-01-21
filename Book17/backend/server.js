const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth");
const bookingRoutes = require("./routes/booking");
const businessRoutes = require("./routes/business");
const paymentRoutes = require("./routes/payments");
const smsRoutes = require("./routes/sms");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/booking", bookingRoutes);
app.use("/api/business", businessRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/sms", smsRoutes);

app.get("/", (req, res) => {
  res.send("Book17 API v1.4 running");
});

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  app.listen(PORT, () => console.log(`Server running on ${PORT}`));
})
.catch(err => console.error(err));

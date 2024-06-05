const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5050;

// import routes
const trackRoutes = require("./routes/tracks");
const prixRoutes = require("./routes/prixs");

app.use(express.json());
app.use(cors());
app.use("/images", express.static(path.join(__dirname, "images")));

// use routes
app.use("/api/tracks", trackRoutes);
app.use("/api/prixs", prixRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}`);
});

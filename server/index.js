const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

/// Middleware
app.use(cors());
app.use(express.json());

/// Const routers
// Template:
// const Router = require("./routes/api/");

/// Simple API Documentation
app.get("/", (req, res) => {
  res.json({
    msg: "You can perform these requests from this API:"
  });
});

/// Link Route Files
// Template:
// app.use("/comments", Router);

app.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}`);
});

const express = require("express");
var cors = require("cors");

const app = express();

app.use(cors());
// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use("/api/amchart", require("./routes/api/amchart"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

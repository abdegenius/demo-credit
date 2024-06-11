const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const bodyParser = require("body-parser");
require("dotenv").config();
// ROUTES
const indexRoute = require("./routes/index");;

// CREATE EXPRESS SERVER
const app = express();
const port = process.env.PORT || 7000;

// EXPRESS CONFIGS
app.use(cors()); // CORS
app.use(helmet()); // HELMET
app.use(morgan("dev")); // MORGAN
app.use(bodyParser.json()); // BODY PARSER

// CALLING ROUTES
app.use("/", indexRoute);

// START EXPRESS SERVER
app.listen(port, () => {
  console.log(`Server initiated at http://localhost:${port}`);
});

export default app;

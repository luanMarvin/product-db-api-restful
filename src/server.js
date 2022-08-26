const express = require("express");
const db = require("./database");
const routes = require("./routes");
const cors = require("cors");

const app = express();
db.connect();
app.use(cors({origin: "http://127.0.0.1:5500"}));
//Run fetch with front end localhost on port 5500
app.use(express.json());
app.use("/api", routes);

const port = process.env.PORT || 8024;
app.listen(port, console.log(`Running on port ${port}`))
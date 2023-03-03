const express = require("express");
var cors = require("cors");
const app = express();

//Error Handling middleWare
const { ErrorMiddleware } = require("./middlewares/Error");
const { route } = require("./routes");

//Server Setup
app.use(express.json({ strict: false }));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//USING ALL THE ROUTES INSIDE THE ROUTES/INDEX FOLDER
app.use(route);

app.use(ErrorMiddleware);

module.exports = app;

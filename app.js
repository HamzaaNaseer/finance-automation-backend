const express = require("express");
var cors = require("cors");
const app = express();

//Error Handling middleWare
const { ErrorMiddleware } = require("./middlewares/Error");

//Server Setup
app.use(express.json({ strict: false }));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(ErrorMiddleware);

module.exports = app;

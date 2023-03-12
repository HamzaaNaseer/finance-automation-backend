const express = require("express");
var cors = require("cors");
const app = express();

//Error Handling middleWare
const { ErrorMiddleware } = require("./middlewares/Error");
const routes = require("./routes");
//Server Setup
app.use(express.json({ strict: false }));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//static configurations
app.use(express.static("./uploads"));

//send a req to this route along with the image name to get image
app.use("/documents", express.static("uploads"));

//USING ALL THE ROUTES INSIDE THE ROUTES/INDEX FOLDER
app.use(routes);

app.use(ErrorMiddleware);

module.exports = app;

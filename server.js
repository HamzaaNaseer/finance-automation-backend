//--------WHEN THE SERVER RUNS THIS IS THE FIRST FILE THAT GETS EXECUTED-------------
//env configuration
require("dotenv").config();


const app = require("./app");
const { connectToDatabase } = require("./config/db");

const http = require("http")

//database connection
connectToDatabase();

//server
const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(process.env.PORT, () => {
  console.log(`server is running on port ${port}`);
});

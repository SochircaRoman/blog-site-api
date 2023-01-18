require("dotenv").config();

const express = require("express");
const router = require("./api/routes/index");

const app = express();

app.use(express.json());
app.use('/', router);

const startServer = async () => {
  try {
      require('./database').init()
      app.listen(process.env.SERVER_PORT, process.env.SERVER_URL, () => {
        console.log(`Server started on PORT = ${process.env.SERVER_PORT}`)
      })
    
  } catch (error) {
      console.log(error)
  }
};

startServer();
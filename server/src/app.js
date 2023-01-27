require("dotenv").config();

const express = require("express");
const cors = require("cors");
const router = require("./api/routes/index");

const app = express();

// Set origin localhost:3000 for incoming requests
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,              //access-control-allow-credentials: true
  optionSuccessStatus: 200
};
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use('/', router);
app.use(express.static("src/api/static"));

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
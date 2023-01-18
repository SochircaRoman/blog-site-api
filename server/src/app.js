require("dotenv").config()

const express = require("express")

const app = express()

const startServer = async () => {
  try {
      require('./database').init()
      app.listen(process.env.SERVER_PORT, process.env.SERVER_URL, () => {
        console.log(`Server started on PORT = ${process.env.SERVER_PORT}`)
      })
    
  } catch (error) {
      console.log(error)
  }
}

startServer()
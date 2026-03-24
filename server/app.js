require("dotenv").config()

const express = require("express")
const cors = require("cors")

const connectDB = require("./config/db")

connectDB()

const app = express()

app.use(cors())
app.use(express.json())

const studentRoutes =
  require("./routes/studentRoutes")

app.use("/students", studentRoutes)

app.get("/test", (req, res) => {
  res.json(["ok"])
})

module.exports = app
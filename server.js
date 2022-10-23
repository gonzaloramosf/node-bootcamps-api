import express from "express"
import dotenv from "dotenv"

dotenv.config({ path: "./config/config.env"})

const app = express()
const PORT = process.env.PORT || 8080

app.listen(PORT, console.log("server runing in port 8080"))
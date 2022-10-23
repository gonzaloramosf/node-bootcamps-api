import express from "express"
import dotenv from "dotenv"
// routes
import bootcamps from "./src/routes/bootcamps.js"


dotenv.config({ path: "./config/config.env"})

const app = express()
const PORT = process.env.PORT || 8080

app.use("/api/v1/bootcamps", bootcamps)

app.listen(PORT, console.log("server runing in port 8080"))
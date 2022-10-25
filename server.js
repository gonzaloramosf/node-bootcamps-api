import express from "express"
import dotenv from "dotenv"
import morgan from "morgan"
import connectDB from "./config/db.js"
import errorHandler from "./src/middlewares/error.js"
// routes
import bootcamps from "./src/routes/bootcamps.js"

// load env vars
dotenv.config({ path: "./config/config.env"})

// connect database
connectDB()

const app = express()

app.use(express.json())

const PORT = process.env.PORT || 8080

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"))
}

app.use("/api/v1/bootcamps", bootcamps)

app.use(errorHandler)

const server = app.listen(PORT, console.log("server runing in port 8080"))

process.on("unhandledRejection", function (err, promise) {
    console.log(`Error unhandled: ${err.message}`)
    // close server and exit with error code
    server.close(function () { process.exit(1) })
})
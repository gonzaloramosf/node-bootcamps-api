import mongoose from "mongoose"

async function connectDB() {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true})

        console.log("MongoDb connected ", conn.connection.host)
    } catch (err) {
        console.log("Error connecting MongoDB ", err)
    }
}

export default connectDB
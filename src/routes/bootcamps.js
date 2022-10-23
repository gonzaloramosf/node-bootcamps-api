import express from "express"
import { Bootcamps } from "../controllers/bootcamps.js"

const router = express.Router()

router.route("/")
    .get(Bootcamps.getAll)
    .post(Bootcamps.create)

router.route("/:id")
    .get(Bootcamps.getById)
    .put(Bootcamps.update)
    .delete(Bootcamps.remove)

export default router
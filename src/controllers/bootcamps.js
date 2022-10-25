import Bootcamp from "../models/Bootcamp.js"

// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
async function getAll(req, res, next) {
    try {
        const bootcamps = await Bootcamp.find()
        res.status(200).json({ success: true, count: bootcamps.length, data: bootcamps })

    } catch (err) {
        res.status(400).json({ success: false, msg: `Error trying to get all bootcamps: ${err}` })

    }
}

// @desc    Get single bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Public
async function getById(req, res, next) {
    try {
        const bootcamp = await Bootcamp.findById(req.params.id)

        if (!bootcamp) {
            return res.status(404).json({ success: false, msg: "Bootcamp not found" })
        }
        res.status(200).json({ success: true, data: bootcamp })

    } catch (err) {
        res.status(400).json({ success: false, msg: `Error trying to get bootcamp: ${err}` })

    }
}

// @desc    Create new bootcamp
// @route   POST /api/v1/bootcamps
// @access  Private
async function create(req, res, next) {
    try {
        const bootcamp = await Bootcamp.create(req.body)
        res.status(201).json({ success: true, data: bootcamp })

    } catch (err) {
        res.status(400).json({ success: false })

    }
}

// @desc    Update a bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access  Private
async function update(req, res, next) {
    try {
        const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

        if (!bootcamp) {
            return res.status(404).json({ success: false, msg: "Bootcamp not found" })
        }
        res.status(200).json({ success: true, data: bootcamp })

    } catch (err) {
        res.status(400).json({ success: false, msg: `Error trying to update bootcamp: ${err}` })
    }
}

// @desc    Remove a bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Private
async function remove(req, res, next) {
    try {
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id)

        if (!bootcamp) {
            return res.status(404).json({ success: false, msg: "Bootcamp not found" })
        }
        res.status(200).json({ success: true, data: {} })

    } catch (err) {
        res.status(400).json({ success: false, msg: `Error trying to delete bootcamp: ${err}` })
    }
}

export const Bootcamps = { getAll, getById, create, update, remove }
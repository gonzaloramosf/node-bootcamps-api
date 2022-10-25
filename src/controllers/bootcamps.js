import Bootcamp from "../models/Bootcamp.js"
import ErrorResponse from "../utils/errorResponse.js"

// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
async function getAll(req, res, next) {
    try {
        const bootcamps = await Bootcamp.find()
        res.status(200).json({ success: true, count: bootcamps.length, data: bootcamps })

    } catch (err) {
        next(err)
    }
}

// @desc    Get single bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Public
async function getById(req, res, next) {
    try {
        const bootcamp = await Bootcamp.findById(req.params.id)

        if (!bootcamp) {
            return next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404))
        }
        res.status(200).json({ success: true, data: bootcamp })

    } catch (err) {
        next(err)
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
        next(err)
    }
}

// @desc    Update a bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access  Private
async function update(req, res, next) {
    try {
        const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

        if (!bootcamp) {
            next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404))
        }
        res.status(200).json({ success: true, data: bootcamp })

    } catch (err) {
        next(err)
    }
}

// @desc    Remove a bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Private
async function remove(req, res, next) {
    try {
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id)

        if (!bootcamp) {
            next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404))
        }
        res.status(200).json({ success: true, data: {} })

    } catch (err) {
        next(err)
    }
}

export const Bootcamps = { getAll, getById, create, update, remove }
import Bootcamp from "../models/Bootcamp.js"
import ErrorResponse from "../utils/errorResponse.js"
import asyncHandler from "../middlewares/async.js"

// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
const getAll = asyncHandler( async function(req, res, next) {
    const bootcamps = await Bootcamp.find()
    res.status(200).json({ success: true, count: bootcamps.length, data: bootcamps })
})

// @desc    Get single bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Public
const getById = asyncHandler( async function(req, res, next) {
    const bootcamp = await Bootcamp.findById(req.params.id)

    if (!bootcamp) {
        return next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404))
    }
    res.status(200).json({ success: true, data: bootcamp })
})

// @desc    Create new bootcamp
// @route   POST /api/v1/bootcamps
// @access  Private
const create = asyncHandler( async function(req, res, next) {
    const bootcamp = await Bootcamp.create(req.body)
    res.status(201).json({ success: true, data: bootcamp })
})

// @desc    Update a bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access  Private
const update = asyncHandler(async function(req, res, next) {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

    if (!bootcamp) {
        next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404))
    }
    res.status(200).json({ success: true, data: bootcamp })
})

// @desc    Remove a bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Private
const remove = asyncHandler(async function(req, res, next) {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id)

    if (!bootcamp) {
        next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404))
    }
    res.status(200).json({ success: true, data: {} })
})

export const Bootcamps = { getAll, getById, create, update, remove }
// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
function getAll(req, res, next) {
    res.status(200).json({ success: true, msg: "bootcamps"})
}

// @desc    Get single bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Public
function getById(req, res, next) {
    res.status(200).json({ success: true, msg: `get bootcamp ${req.params.id}`})
}

// @desc    Create new bootcamp
// @route   POST /api/v1/bootcamps
// @access  Private
function create(req, res, next) {
    res.status(200).json({ success: true, msg: "create a bootcamp"})
}

// @desc    Update a bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access  Private
function update(req, res, next) {
    res.status(200).json({ success: true, msg: `update a bootcamp ${req.params.id}`})
}

// @desc    Remove a bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Private
function remove(req, res, next) {
    res.status(200).json({ success: true, msg: `remove bootcamp ${req.params.id}`})
}

export const Bootcamps = { getAll, getById, create, update, remove }
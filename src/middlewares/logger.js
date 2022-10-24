import morgan from "morgan"

// @desc Logs requests to console
function logger(req, res, next) {



    next()
}

export default logger
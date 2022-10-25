
/*
function asyncHandler(fn) {
    console.log("async handler")
    return function (req, res ,next) {
        Promise.resolve(fn(req, res, next)).catch(next)
    }
}
 */

const asyncHandler = fn => (req, res, next) =>
    Promise
        .resolve(fn(req, res, next))
        .catch(next)

export default asyncHandler
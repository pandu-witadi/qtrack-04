//
//
// module.exports = async function isAuthenticated(req, res, proceed) {
module.exports = async function isAdmin(req, res, proceed) {
    if (!req.currentUser.isAdmin) {
        return res.notFound(); // Forbidden
    }

    return proceed()
}

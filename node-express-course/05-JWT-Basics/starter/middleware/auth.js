const { UnauthenticatedError } = require("../errors/index");
// const genarateToken = require('../helpers/genarateToken');
const jwt = require('jsonwebtoken');


const authenticationMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new UnauthenticatedError("No token provided")
    }
    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const { id, username } = decoded;
        req.user = { id, username };
        next()
    } catch (error) {
        throw new UnauthenticatedError("not authorizad to access")
    }
}
module.exports = authenticationMiddleware;
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { CustomAPIError,
    UnauthenticatedError,
    NotFoundError,
    BadRequestError
} = require('../errors');

const auth = (req, res, next) => {
    // check header
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new UnauthenticatedError('Authencation invalid');
    }
    const token = authHeader.split(' ')[1];

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        // attch the user to the job routes
        req.user = { userId: payload.userId, name: payload.name };
        next()
    } catch (error) {
        throw new UnauthenticatedError('Authencation invalid');
    }
}

module.exports = auth;
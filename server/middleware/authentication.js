const jwt = require('jsonwebtoken');
const { errorResponse } = require('../helpers/successAndError');
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || 'masai';

//Middleware for authenticating JWT tokens
const authenticateToken = async (req, res, next) => {
    // Retrieve token from the Authorization header
    const token = req.header('Authorization');

    // If token is not provided, deny access
    if (!token) {
        return res.status(401).json(errorResponse(401, "Unauthorized - No token provided", null));
    }
    try {
        // Verify the token using your secret key
        const decoded =jwt.verify(token, ACCESS_TOKEN_SECRET);

        // Attach the user information to the request object
        req.user = decoded;

        // Continue to the next middleware or route handler
        next();
    } catch (error) {
        // Token is invalid or expired
        return res.status(401).json(errorResponse(401, error.message));
    }
};

module.exports = { authenticateToken };

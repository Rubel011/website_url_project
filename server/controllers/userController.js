const { successResponse, errorResponse } = require("../helpers/successAndError");
const { User } = require("../models/userModel");
const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt");
const SALT_ROUNDS = Number(process.env.SALT_ROUNDS) || 10;

// Get deployment URL and secret key from environment variables or use default values
const deploy_url = process.env.deploy_link || "http://localhost:8080";
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || 'masai';
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET || "masai-refresh-secret";


module.exports.retriveAllUsers = async (req, res) => {
    try {
        // Retrieve all users from the database
        const users = await User.find();

        // Respond with the list of users
        res.status(200).json(successResponse(200, "Successfully retrieved all users from the database", users));
    } catch (error) {
        // Handle server error
        res.status(500).json(errorResponse(500, error.message));
    }
};

module.exports.retriveUsersById = async (req, res) => {
    try {
        const id=req.params.id;
        // Retrieve all users from the database
        const users = await User.findById(id);

        // Respond with the list of users
        res.status(200).json(successResponse(200, "Successfully retrieved user's by id from the database", users));
    } catch (error) {
        // Handle server error
        res.status(500).json(errorResponse(500, error.message));
    }

}

module.exports.addNewUser = async (req, res) => {
    try {
        // Extract user information from the request body
        const { email, password, name,avatarUrl } = req.body;

        // Check if the email is already registered
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            // Email is already registered
            return res.status(400).json(errorResponse(400, "Email already registered, Use different email or Login"));
        }

        // Hash the password using bcrypt
        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

        if (!hashedPassword) {
            // Handle password hashing error
            return res.status(500).json(errorResponse(500, "Password hashing failed"));
        }

        // Create a new user document with hashed password
        const newUser = new User({ name, email, password: hashedPassword,avatarUrl});

        // Save the new user to the database
        await newUser.save();

        // Respond with a success message
        res.status(201).json(successResponse(201, `${name} has been registered successfully with _Id-${newUser._id}`, newUser));

    } catch (error) {
        // Handle bad request
        res.status(400).json(errorResponse(400, error.message));
    }
}

module.exports.loginUser = async (req, res) => {
    try {
        // Extract user information from the request body
        const { email, password } = req.body;

        // Find the user by email
        const user = await User.findOne({ email });

        // If user doesn't exist or password is incorrect
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json(errorResponse(401, "Invalid credentials"));
        }

        // Generate a JWT token
        const accessToken = jwt.sign({ userId: user._id }, ACCESS_TOKEN_SECRET, { expiresIn: "1d" });
        const refreshToken = jwt.sign({ userId: user._id }, REFRESH_TOKEN_SECRET, { expiresIn: "2d" });

        // Respond with a success message and the JWT token
        let succData = successResponse(200, "Login successful", user)
        succData.accessToken=accessToken;
        succData.refreshToken=refreshToken;

        res.status(200).json(succData);
        
    } catch (error) {
        // Handle server error
        res.status(500).json(errorResponse(500,error.message));
    }
}
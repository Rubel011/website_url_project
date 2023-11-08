const express=require("express");
const { addNewUser, loginUser, retriveUsersById, retriveAllUsers } = require("../controllers/userController");
const userRouter=express.Router()

/**
 * @route   GET /users
 * @desc    Get all users (protected route)
 * @access  Private
 */
userRouter.get("/",retriveAllUsers);

/**
 * @route   GET /users
 * @desc    Get  users using Id (protected route)
 * @access  Private
 */
userRouter.get("/:id",retriveUsersById); 

/**
 * @route   POST /users/register
 * @desc    Register a new user
 * @access  Public
 */
userRouter.post("/register", addNewUser);

/**
 * @route   POST /users/login
 * @desc    Log in user
 * @access  Public
 */
userRouter.post("/login", loginUser);




module.exports = userRouter;
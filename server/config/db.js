const mongoose = require('mongoose');
require('dotenv').config()

// Creating the connection with database using mongoose
const connection = mongoose.connect(process.env.mongoUrl)
module.exports = {connection}
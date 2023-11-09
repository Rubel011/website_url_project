const express = require('express');
const app = express();
const cors = require('cors');
const { successResponse, errorResponse } = require('./helpers/successAndError');
const { connection } = require('./config/db');
const userRouter = require('./routes/userRouter');
const urlRouter = require('./routes/urlDetailRouter');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swaggerConfig');
const PORT = process.env.PORT || 8080

// Middleware to parse JSON request bodies
app.use(express.json());

// Middleware for cors error
app.use(cors());

// Serve Swagger documentation
// const CSS_URL ="https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css";
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, { customCssUrl: CSS_URL }));

// Home route
app.get("/", async (req, res) => {
    try {
        res.status(200).json(successResponse(200, "This is the home page running successfully", null));
    } catch (error) {
        res.status(500).json(errorResponse(500, error.message));
    }
});


// all routes are here
app.use("/users",userRouter)

app.use("/domain",urlRouter)


// Start the server
app.listen(PORT, async () => {
    try {
        // Establish database connection
        await connection;

        // Server listening message
        console.log({ message: `Server is listening on port ${PORT}` });
    } catch (error) {
        console.log(error.message);
    }
});



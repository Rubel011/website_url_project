const swaggerJSDoc = require('swagger-jsdoc');
require("dotenv").config()
const path=require('path');
const BACKEND_DEPLOYED_URL=process.env.BACKEND_DEPLOYED_URL||"http://localhost:8080/"
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0', // Specify the OpenAPI version
        info: {
            title: 'website_url_project',
            version: '1.0.0',
            description: 'Documentation for website Url Project',
        },
        servers: [
            {
                url:BACKEND_DEPLOYED_URL,
            }
        ]
    },
    // Provide the path to your API routes files
    apis: [path.join(__dirname, '..', 'docs', 'swagger.js')],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

module.exports = swaggerSpec;
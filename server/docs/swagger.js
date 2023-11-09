// ---------------------*********** Authentication Schema ***********---------------------
/**
 * @swagger
 * components:
 *   securitySchemes:
 *     BearerAuth:
 *       type: apiKey
 *       in: header
 *       name: Authorization
 *       description: Bearer token authorization header
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         email:
 *           type: string
 *         password:
 *           type: string
 *         avatarUrl:
 *           type: string
 *       required:
 *         - name
 *  
 */

/**
 * @swagger
 * /users/:
 *   get:
 *     summary: Get user details by users
 *     tags:
 *       - User
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       '200':
 *         description: User details retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       '404':
 *         description: User not found
 *       '500':
 *         description: Server error
 *
 * /users/register:
 *   post:
 *     summary: Register a new user
 *     tags:
 *       - User
 *     requestBody:
 *       description: User object to be registered
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       '201':
 *         description: User registered successfully
 *       '500':
 *         description: Server error
 *
 * /users/login:
 *   post:
 *     summary: User login
 *     tags:
 *       - User
 *     requestBody:
 *       description: User login credentials
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - email
 *               - password
 *     responses:
 *       '200':
 *         description: Login successful
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       '401':
 *         description: Unauthorized
 *       '500':
 *         description: Server error
 */


// /**
//  * @swagger
//  * components:
//  *   schemas:
//  *     Book:
//  *       type: object
//  *       properties:
//  *         name:
//  *           type: string
//  *         email:
//  *           type: string
//  *         password:
//  *           type: string
//  *         avatarUrl:
//  *           type: string
//  *
//  * /users/:
//  *   get:
//  *     summary: Get user details by users
//  *     tags:
//  *       - User
//  *     security:
//  *       - BearerAuth: []
//  *     responses:
//  *       '200':
//  *         description: User details retrieved successfully
//  *         content:
//  *           application/json:
//  *             schema:
//  *               $ref: '#/components/schemas/User'
//  *       '404':
//  *         description: User not found
//  *       '500':
//  *         description: Server error
//  *
//  * /users/register:
//  *   post:
//  *     summary: Register a new user
//  *     tags:
//  *       - User
//  *     requestBody:
//  *       description: User object to be registered
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             $ref: '#/components/schemas/User'
//  *     responses:
//  *       '201':
//  *         description: User registered successfully
//  *       '500':
//  *         description: Server error
//  *
//  * /users/login:
//  *   post:
//  *     summary: User login
//  *     tags:
//  *       - User
//  *     requestBody:
//  *       description: User login credentials
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             properties:
//  *               email:
//  *                 type: string
//  *               password:
//  *                 type: string
//  *             required:
//  *               - email
//  *               - password
//  *     responses:
//  *       '200':
//  *         description: Login successful
//  *         content:
//  *           application/json:
//  *             schema:
//  *               $ref: '#/components/schemas/User'
//  *       '401':
//  *         description: Unauthorized
//  *       '500':
//  *         description: Server error
//  */

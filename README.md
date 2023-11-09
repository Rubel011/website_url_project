# Website-Url-Project

This is the Website-Url-Project, where you can register, log in, and access restricted resources.

## API Documentation: for Swagger

You can explore the API documentation using Swagger UI. Access the documentation by navigating to:

   https://website-url-project-backend.vercel.app/api-docs

## Functionality

The API includes the following functionality:
- User Registration
- User Login and Authentication
- User details 
- Url Management- create , update, delete


## Backend Deployment

The backend of this project is deployed on AWS and can be accessed via the following link: 

[Backend Deployment Link](https://website-url-project-backend.vercel.app/)


## Backend-Routes
- **User Authentication**:
  - `POST /users/register`: Register a new user.
  - `POST /users/login`: Log in with a registered user.
  - `GET /users/`: Get all user details (jwt protected) .
- **Url Management**:
  - `GET /Domain/`: List of all available url data (jwt protected) .
  - `POST /Domain/`: Add a new book (jwt protected) in the body add url field .
  - `PUT /Domain/:id`: Update book details (jwt protected) in the body add favorite field.
  - `DELETE /Domain/:id`: Delete a book form database (jwt protected) .
### Technologies Used
- Node.js 
- Express.js
- MongoDB
- Mongoose
- Bcrypt
- JWT
- Swagger (for API documentation)

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Rubel011/website_url_project.git

2. Navigate to the project directory:
    ```bash
    cd website_url_project
    for frontent: cd frontent-app
    fort backend: cd server
3. Install the project dependencies:
    ```bash
    npm install 

4. Create a .env file in the project root and configure the following environment variables:
    ```markdown
    PORT=8080
    mongoUrl=database link
    saltRounds=15
    ACCESS_TOKEN_SECRET=masai_school
    REFRESH_TOKEN_SECRET=masai_refresh_token


4. Start the server:
    ```
    npm run server
    ```

5. Access the backend API at http://localhost:PORT.

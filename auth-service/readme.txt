# Auth Service - School Vaccination Backend

## Description
This microservice handles user authentication using JWT. It's built with Node.js, Express, and MongoDB.

## Prerequisites
- Node.js and npm
- MongoDB (running locally or cloud instance)

## Setup

1. Install dependencies:
```
npm install
```

2. Create a `.env` file in the root of `auth-service`:
```
MONGO_URI=mongodb://localhost:27017/auth-db
JWT_SECRET=your_jwt_secret
```

3. Run the server:
```
node index.js
```

4. Access Swagger API docs:
```
http://localhost:5000/api-docs
```

## Routes
- POST `/api/auth/register`
- POST `/api/auth/login`
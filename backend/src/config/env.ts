// config.ts
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();


const env = {
  port: parseInt(process.env.PORT || '3000', 10),
  mongoDB: process.env.MONGO_DB || "",
  jwtSecret: process.env.JWT_SECRET || 'your_jwt_secret'
};

export default env;

import dotenv from 'dotenv';

const envFound = dotenv.config();
if (!envFound) {
  // This error should crash whole process
  throw new Error("Couldn't find .env file.");
}

// Set the NODE_ENV to 'development' by default
const env = process.env.NODE_ENV || 'development';

const db = require('./db')[env];

export const dbConfig = db;

export const port = process.env.PORT || 8000;

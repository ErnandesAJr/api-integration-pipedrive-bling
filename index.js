import dotenv from "dotenv";
dotenv.config();
import 'express-async-errors';
import app from './src/app.js';

const server = app.express;
const context = {
  port: process.env.SERVER_PORT,
  env: process.env.NODE_ENV,
};

server.listen(context.port, () => {
  console.log(`PipeDrive and Bling Integration server listen on port ${context.port}...`);
});
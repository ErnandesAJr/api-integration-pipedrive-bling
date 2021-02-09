import dotenv from "dotenv";
dotenv.config();
const config = {
  dialect: 'mongo',
  username: process.env.MONGO_USER,
  password: process.env.MONGO_PWD,
  database: process.env.MONGO_DB,
  uri: process.env.MONGO_URI,
};
export default config


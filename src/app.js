import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
// import path from 'path';
// import exceptions from './errors/exceptions';
import routes from './routes/index.js';
import './database/index.js';
import connectDB from './database/index.js'

// import CronJobService from './services/CronJobService';

class App {
  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
    // this.handleExceptions();
    // this.services();
  }

  middlewares() {
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: false }));
    this.express.use(morgan('dev'));
    this.express.use(cors());
  }

  async services() {
    connectDB();
    //CronJob (Readme)

  }

  // handleExceptions() {
  //   Object.values(exceptions).forEach((expection) => this.express.use(expection));
  // }

  routes() {
    this.express.use(routes);
  }
}

export default new App();
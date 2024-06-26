import compression from 'compression';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import { logMiddleware } from './Api/Middleware/RegisterLoggerMiddleware';

export class App {
  constructor() {
    this.app = express();
    this.applyMiddleware();
  }

  public app: express.Application;

  private applyMiddleware(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(compression());
    this.app.use(logMiddleware);
  }
}

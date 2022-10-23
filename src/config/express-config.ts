import express, { Express } from 'express';
import * as bodyParser from 'body-parser';

export const app: Express = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
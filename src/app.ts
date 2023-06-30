import express from 'express';
const app = express();
import {router} from './routes/tutors';
require('dotenv').config();
require('express-async-errors');
require('bcrypt');
import { connectDB } from './database/connect';
import { errorHandlerMiddleware } from './middlewares/error-handler';
import{notFound} from './errors/not-found';





app.use(express.json());

// Route
app.use('/', router);

// middleware
app.use(notFound);
app.use(errorHandlerMiddleware);

export{app}
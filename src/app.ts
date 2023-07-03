import express from 'express';
const app = express();
import 'express-async-errors';
import {router} from './routes/tutors';
import{notFound} from './errors/not-found';
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from './swagger.json';
require('dotenv').config();
import 'bcrypt';
import { errorHandlerMiddleware } from './middlewares/error-handler';

app.use(express.json());

// Route
app.use('/', router);

// Swagger
app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Middleware

app.use(notFound);
app.use(errorHandlerMiddleware);

export{app}
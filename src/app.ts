import express from 'express';
const app = express();
import {router} from './routes/tutors';
require('dotenv').config();
require('express-async-errors');
require('bcrypt');
import { connectDB } from './database/connect';
import { errorHandlerMiddleware } from './middlewares/error-handler';
import{notFound} from './errors/not-found';




// middleware
app.use(express.json());

// Route
app.use('/', router);

app.use(notFound);
app.use(errorHandlerMiddleware);


// Porta
const port = process.env.PORT || 3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI!)
        app.listen(port, () => console.log(`Server is listening port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}


start()
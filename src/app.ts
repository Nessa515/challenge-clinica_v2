import express from 'express';
const app = express();
import {router} from './routes/tutors';
require('dotenv').config();
import { notFound } from './middleware/not-found';
import { errorHandlerMiddleware } from './middleware/error-handler';
import { connectDB } from './database/connect';


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
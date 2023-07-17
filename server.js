import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import colors from 'colors';
import morgan from 'morgan';

//Routes Imports
import homeRouter from './routes/homeRouter.js';

const app = express();
const port = process.env.PORT;
const nodeMode = process.env.NODE_MODE;


// Middlewares
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use("/", homeRouter);


app.listen(port, () => {
    console.log(`App running in ${nodeMode} mode  on the Port ${port}`.yellow)
})









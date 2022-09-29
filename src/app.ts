import express, { json } from 'express';
import cors from 'cors';
import 'express-async-errors';

import router from './routes/index';
import errorHandlerMiddleware from './middlewares/errorHandlerMiddleware';

const app = express();

app.use(json());
app.use(cors());
app.use(router);
app.use(errorHandlerMiddleware);

export default app;
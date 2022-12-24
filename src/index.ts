import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import morgan from 'morgan';
import * as dotenv from 'dotenv';
import routes from './routes/index';
import { promises as fs } from 'fs';
import { buffer } from 'stream/consumers';

// initalize the express server
const app = express();
const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});

// parsing incoming JSON format & Logging stats
app.use(bodyParser.json(), morgan('dev'));

app.get('/', (req: express.Request, res: express.Response) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.use('/resize', routes);

export default app;

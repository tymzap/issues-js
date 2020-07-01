import path from 'path';
import express from 'express';

import issuesRouter from './routes/issues';

const app = express();

app.use(express.json());

app.use('/api/issues', issuesRouter);

app.use('/', express.static(path.join(__dirname, 'public')));

export default app;

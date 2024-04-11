import express, { Request, Response } from 'express';
import gameRoutes from './routes/game.routes';
const app = express();

app.use(express.json());


app.get('/', (_req: Request, res: Response) => {
  res.send('<h1>Welcome to my REST API!</h1>');
});


app.use('/games', gameRoutes)

export default app;

import { app } from './configs/expressConfig';
import { Request, Response } from 'express';
import runApplication from './configs/runApplication';

runApplication(app);

app.get('/skins', (req: Request, res: Response) => {
  res.json({
    message: 'Hello World',
  });
});

import { Express } from 'express';

const runApplication = (app: Express) => {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

export default runApplication;

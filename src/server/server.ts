import 'dotenv-flow/config';

import app from './app';
import sequelize from './services/sequelize';

const port = process.env.PORT;

sequelize
  .sync({ force: process.env.NODE_ENV === 'development' })
  .then(async () => {
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  });

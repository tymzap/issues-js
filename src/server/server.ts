import 'dotenv-flow/config';

import app from './app';
import sequelize from './services/sequelize';

const port = process.env.PORT;

sequelize.sync().then(async () => {
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
});

import 'dotenv-flow/config';
import { Sequelize } from 'sequelize-typescript';

import User from '../database/models/user';

export default new Sequelize(process.env.DATABASE_URL as string, {
  dialect: 'postgres',
  models: [
    User
  ],
  define: {
    underscored: true
  }
});

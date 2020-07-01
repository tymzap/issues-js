import 'dotenv-flow/config';
import { Sequelize } from 'sequelize-typescript';

import User from '../database/models/user';
import Issue from '../database/models/issue';

export default new Sequelize(process.env.DATABASE_URL as string, {
  dialect: 'postgres',
  models: [ User, Issue ],
  define: {
    underscored: true
  }
});

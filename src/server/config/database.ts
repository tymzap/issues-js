import 'dotenv-flow/config';
import { parse } from 'dotenv-flow'

module.exports = {
  development: {
    url: parse('.env.development').DATABASE_URL,
    dialect: 'postgres',
  },
  test: {
    url: parse('.env.test').DATABASE_URL,
    dialect: 'postgres',
  }
};

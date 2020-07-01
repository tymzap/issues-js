import { QueryInterface } from 'sequelize';

module.exports = {
  up: (queryInterface: QueryInterface) => queryInterface.bulkInsert(
    'users',
    [
      {
        email: 'tymzap@gmail.com',
        password: 'test',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        email: 'tymzap+1@gmail.com',
        password: 'test',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        email: 'tymzap+2@gmail.com',
        password: 'test',
        created_at: new Date(),
        updated_at: new Date()
      },
    ]
  ),
  down: (queryInterface: QueryInterface) => queryInterface.bulkDelete('users', {})
};


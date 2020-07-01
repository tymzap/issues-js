import { QueryInterface } from 'sequelize';

module.exports = {
  up: (queryInterface: QueryInterface) => queryInterface.bulkInsert(
    'issues',
    [
      {
        name: 'Lorem ipsum dolor sit amet',
        description: 'Morbi mollis mauris ante, lobortis accumsan tellus pharetra sed',
        status: 'OPEN',
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Donec purus elit',
        description: 'In porta ornare magna, at sodales arcu lacinia et',
        status: 'OPEN',
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Mauris enim ante',
        description: 'Donec in diam et ante sollicitudin mollis sit amet at orci. Integer lacus lectus, maximus ac ultricies vitae, convallis sit amet sem. Sed cursus, libero in malesuada ullamcorper, neque felis vulputate ante, a posuere justo nunc at sapien. Curabitur et diam eget odio faucibus sollicitudin sit amet eget mauris',
        status: 'OPEN',
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Cras bibendum',
        description: 'Donec in diam et ante sollicitudin mollis sit amet at orci',
        status: 'PENDING',
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Proin dapibus posuere fringilla',
        description: 'Morbi congue ipsum quam, id consequat neque volutpat vel. Quisque eget est egestas, gravida purus eu, dignissim massa',
        status: 'PENDING',
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Nulla eget arcu suscipit',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed elementum dui. Donec vitae facilisis odio, id aliquet tellus. Cras vel ipsum nisl. Cras tempus est id pellentesque finibus.',
        status: 'CLOSED',
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Morbi porta laoreet tellus et ultricies',
        description: 'Pellentesque in massa lacinia, fermentum quam vitae, dapibus tellus',
        status: 'OPEN',
        user_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Nunc pharetra magna id libero tincidunt',
        description: 'Nulla eget arcu suscipit, vulputate augue non, fringilla enim. Proin auctor nisl id ipsum auctor mollis. In et condimentum magna, non vulputate nulla.',
        status: 'OPEN',
        user_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Curabitur facilisis consequat ante',
        description: 'Proin gravida efficitur ante ac gravida',
        status: 'PENDING',
        user_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Vestibulum a nulla odio',
        description: 'Vestibulum a nulla odio. Integer auctor nisl ac gravida auctor',
        status: 'OPEN',
        user_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]
  ),
  down: (queryInterface: QueryInterface) => queryInterface.bulkDelete('issues', {})
};


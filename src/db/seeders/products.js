'use strict';

if (!process.env.NODE_ENV) {
    throw new Error('NODE_ENV not set')
}

//We don't want seeds to run in production
if (process.env.NODE_ENV === 'production') {
    throw new Error("Can't run seeds in production")
}
/*





*/
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('products', [
      {
          name: 'Codes',
          company_id: 1,
          description: 'Piece of code to share',
          picture: '/data/products/pictures/code877267867919.jpg',
          status: 'active',
          created_at: new Date(),
          updated_at: new Date()
      },
      {
          name: 'Tutorial',
          company_id: 1,
          description: 'Tutorials to follow',
          picture: '/data/products/pictures/tuto543154653154.jpg',
          status: 'active',
          created_at: new Date(),
          updated_at: new Date()
      },
      {
          name: 'Knowledge',
          company_id: 1,
          description: 'knowledge to everyone',
          picture: '/data/products/pictures/know945145684941.jpg',
          status: 'active',
          created_at: new Date(),
          updated_at: new Date()
      },
      {
          name: 'Foo product',
          company_id: 2,
          description: 'Some foo !!!',
          picture: '/data/products/pictures/foop001543612160.jpg',
          status: 'active',
          created_at: new Date(),
          updated_at: new Date()
      },
      {
          name: 'Foo product again',
          company_id: 2,
          description: 'Some foo again !!!',
          picture: '/data/products/pictures/foop443940164421.jpg',
          status: 'active',
          created_at: new Date(),
          updated_at: new Date()
      },
      {
          name: 'Bar team',
          company_id: 3,
          description: 'Bar and more ...',
          picture: '/data/products/pictures/bart308943437825.jpg',
          status: 'active',
          created_at: new Date(),
          updated_at: new Date()
      },
      {
          name: 'Mrs Michmuche recipe - Good cookies',
          company_id: 6,
          description: 'hummmm ! that is the best I ever eat',
          picture: '/data/products/pictures/mrsm469433913092.jpg',
          status: 'active',
          created_at: new Date(),
          updated_at: new Date()
      },
      {
          name: 'Mrs Michmuche recipe - Pasta sale e pepe',
          company_id: 6,
          description: 'Good traditional pasta',
          picture: '/data/products/pictures/mrsm587454639867.jpg',
          status: 'active',
          created_at: new Date(),
          updated_at: new Date()
      }
    ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products', null, {});
  }
};

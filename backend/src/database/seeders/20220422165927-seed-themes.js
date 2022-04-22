'use strict';

const themes = [
  {
    name : 'Business ideas',
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    name : 'Business meetings',
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    name : 'Programming concepts',
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    name : 'Grocery list',
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    name : 'Housework',
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    name : 'Hobbies',
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    name : 'Social gatherings',
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    name : 'Other',
    createdAt : new Date,
    updatedAt : new Date
  },
]


module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Themes', themes, {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Themes', null, {});
    
  }
};

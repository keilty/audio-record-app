'use strict';

const recipients = [
  {
    name : 'Roberto',
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    name : 'Clara',
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    name : 'Juan',
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    name : 'María',
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    name : 'Fernando',
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    name : 'Patricia',
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    name : 'Otro destinatario',
    createdAt : new Date,
    updatedAt : new Date
  },
]


module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Recipients', recipients, {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Recipients', null, {});
    
  }
};

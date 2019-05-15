'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true
      },
      company_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false/*,
        references: {
          model: 'Company',
          key: 'id'
        }*/
      },
      description: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: true,
      },
      picture: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
      },
      status: {
        allowNull: false,
        default: 'active',
        type: Sequelize.ENUM(['active','inactive','deleted'])
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "created_at"
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "updated_at"
      },
      deletedAt: {
        allowNull: true,
        default: undefined,
        type: Sequelize.DATE,
        field: "deleted_at"
      }
    });
  },
  down: (queryInterface, Sequelize) => {
//removeConstraint('products', 'Company').
    return queryInterface.dropTable('products');
/*    return queryInterface.sequelize.transaction((t) => {
                return Promise.all([
                    queryInterface.removeConstraint('products', 'Company', { transaction: t })
                    queryInterface.dropTable('products', { transaction: t }),
                ])
            })*/
  }
};

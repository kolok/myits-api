import {sequelize, Sequelize} from '../db/db'

const ProductModel = sequelize.define("products", {
  id: {
    type: Sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  company_id: {
    type: Sequelize.DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Company',
      key: 'id'
    }
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
    type: Sequelize.ENUM,
    defaultValue: 'active',
    values: ['active', 'inactive', 'deleted']
  },
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
    field: "created_at"
  },
  updatedAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
    field: "updated_at"
  },
  deletedAt: {
    type: Sequelize.DATE,
    field: "deleted_at"
  }
});

class Product {
    constructor() {}

    async all(request) {
        try {
            return ProductModel.findAll() //.then(projects => {return projects})
        } catch (error) {
            console.log(error)
            throw new Error('ERROR')
        }
    }
};

export { Product }

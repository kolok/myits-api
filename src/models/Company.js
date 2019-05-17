import {sequelize, Sequelize} from '../db/db'
import {Product} from './Product'

const Company = sequelize.define("companies", {
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
}, {underscored: true});

Company.hasMany(Product, {
  foreignKey: 'company_id',
  as: 'products',
});
Product.belongsTo(Company, {
  foreignKey: 'company_id',
  as: 'company'
});

export { Company }

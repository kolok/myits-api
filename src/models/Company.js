import {sequelize, Sequelize} from '../db/db'
import rand from 'randexp'

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

Company.associate = function(models) {
  Company.hasMany(models.Product, {as:'Product'});
};

/*class Company {
    constructor() {}

    async all(request) {
        try {
            return CompanyModel.findAll()
        } catch (error) {
            console.log(error)
            throw new Error('ERROR')
        }
    }

    async find(id) {
        try {
          return CompanyModel.findByPk(id)
        } catch (error) {
            console.log(error)
            throw new Error('ERROR')
        }
    }

    async findProducts(id) {
      try {
        return CompanyModel.findByPk(id).then(company => {console.log(company.products); return company.getProducts})
      } catch (error) {
          console.log(error)
          throw new Error('ERROR')
      }
    }

    /*
    async store() {
        try {
            return await db('companies').insert(this)
        } catch (error) {
            console.log(error)
            throw new Error('ERROR')
        }
    }

    async save(request) {
        try {
            return await db('companies')
                .update(this)
                .where({ id: this.id })
        } catch (error) {
            console.log(error)
            throw new Error('ERROR')
        }
    }

    async destroy(request) {
        try {
            return await db('companies')
                .delete()
                .where({ id: this.id })
        } catch (error) {
            console.log(error)
            throw new Error('ERROR')
        }
    }*/



export { Company }

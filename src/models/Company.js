import {sequelize, Sequelize} from '../db/db'
import rand from 'randexp'

/*const Task = sequelize.define('task', {
  title: Sequelize.STRING,
  description: Sequelize.TEXT,
  deadline: Sequelize.DATE
})
*/

/* FIXME adding enum
class MyModel extends Model {}
MyModel.init({
  states: {
    type: Sequelize.ENUM,
    values: ['active', 'pending', 'deleted']
  }
}, { sequelize })
*/

const CompanyModel = sequelize.define("companies", {
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
});






class Company {
    constructor() {}

    async all(request) {
        try {
            return CompanyModel.findAll() //.then(projects => {return projects})
        } catch (error) {
            console.log(error)
            throw new Error('ERROR')
        }
    }
/*
    async find(id) {
        try {
            let result = await findById(id)
            if (!result) return {}
            this.constructor(result)
        } catch (error) {
            console.log(error)
            throw new Error('ERROR')
        }
    }

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
};

/*
async function findById(id) {
    try {
        let [companyData] = await db('companies')
            .select('*')
            .where({ id: id })
        return companyData
    } catch (error) {
        console.log(error)
        throw new Error('ERROR')
    }
}*/

export { Company }

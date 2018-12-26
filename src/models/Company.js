import db from '../db/db'
import rand from 'randexp'

class Company {
    constructor(data) {
        if (!data) {
            return
        }

        this.id = data.id
        this.name = data.name
        this.status = data.status
        this.created_at = data.created_at
        this.updated_at = data.updated_at
        this.deleted_at = data.deleted_at
    }

    async all(request) {
        try {
            return await db('companies')
                .select('*')
/*                .where(
                    'title',
                    'like',
                    '%' + (request.sort ? request.sort : '') + '%'
                )
                .orderBy('createdAt', request.order)
                .offset(+request.page * +request.limit)
                .limit(+request.limit)*/
        } catch (error) {
            console.log(error)
            throw new Error('ERROR')
        }
    }

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
    }
}

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
}

export { Company, findById }

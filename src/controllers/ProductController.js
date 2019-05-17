import { Product } from '../models/Product'
import { Company } from '../models/Company'

class ProductController {
    async index(ctx) {
        //Init a new product object
        const query = ctx.query

        //Get list of product
        try {
            let result = await Product.findAll()
            ctx.body = result
        } catch (error) {
            console.log(error)
            ctx.throw(400, 'INVALID_DATA' + error)
        }
    }
    async getCompany(ctx) {
        // get company id from params
        const params = ctx.params
        if (!params.id) ctx.throw(400, 'INVALID_DATA')

        //Get list of products which belongs to the company
        try {
            let result = await Product.findByPk(params.id, {include: [{model:Company, as:'company'}]}).then(product => {return product})
            ctx.body = result
        } catch (error) {
            console.log(error)
            ctx.throw(400, 'INVALID_DATA')
        }
    }
}

export default ProductController

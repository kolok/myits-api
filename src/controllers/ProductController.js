import joi from 'joi'
import dateFormat from 'date-fns/format'

import { Product } from '../models/Product'


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
}

export default ProductController

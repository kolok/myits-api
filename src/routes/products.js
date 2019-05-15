import Router from 'koa-router'
//import jwt from '../middleware/jwt'
import logger from '../logs/log'

import ProductController from '../controllers/ProductController'

const router = new Router()
//const jwtMiddleware = jwt({ secret: process.env.JWT_SECRET })

const productController = new ProductController()

router.get('/api/v1/products', async (ctx, next) => {
    await productController.index(ctx)
})

export default router

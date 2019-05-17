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

router.get('/api/v1/products/:id/company', /*jwtMiddleware,*/ async (ctx, next) => {
    await productController.getCompany(ctx)
})

export default router

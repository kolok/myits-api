import Router from 'koa-router'
//import jwt from '../middleware/jwt'
import logger from '../logs/log'

import CompanyController from '../controllers/CompanyController'

const router = new Router()
//const jwtMiddleware = jwt({ secret: process.env.JWT_SECRET })

const companyController = new CompanyController()

router.get('/api/v1/companies', async (ctx, next) => {
    await companyController.index(ctx)
})

router.post('/api/v1/companies', /*jwtMiddleware,*/ async (ctx, next) => {
    await companyController.create(ctx)
})

router.get('/api/v1/companies/:id', /*jwtMiddleware,*/ async (ctx, next) => {
    await companyController.show(ctx)
})

router.put('/api/v1/companies/:id', /*jwtMiddleware,*/ async (ctx, next) => {
    await companyController.update(ctx)
})

router.delete('/api/v1/companies/:id', /*jwtMiddleware,*/ async (ctx, next) => {
    await companyController.delete(ctx)
})

export default router

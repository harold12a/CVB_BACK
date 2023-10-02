import { Router } from 'express'

import authRouter from './auth.js'
// import usersRouter from './users.js'

let indexRouter = Router()


indexRouter.use('/auth', authRouter)
// indexRouter.use('/users', usersRouter)

export default indexRouter
import { Router } from 'express'

import authRouter from './auth.js'
import noticiasRouter from './noticias.js'
// import usersRouter from './users.js'

let indexRouter = Router()


indexRouter.use('/auth', authRouter)
indexRouter.use('/noticias', noticiasRouter)
// indexRouter.use('/users', usersRouter)

export default indexRouter
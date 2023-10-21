import { Router } from 'express'

import authRouter from './auth.js'
import noticiasRouter from './noticias.js'
import courseRouter from './course.js'
import postRouter from './post.js'
// import usersRouter from './users.js'

let indexRouter = Router()


indexRouter.use('/auth', authRouter)
indexRouter.use('/noticias', noticiasRouter)
indexRouter.use('/cursos', courseRouter)
indexRouter.use('/post', postRouter)
// indexRouter.use('/users', usersRouter)

export default indexRouter
import { Router} from 'express'
import clientesRouter from './clientes.js'

let indexRouter = Router()
indexRouter.use('/clientes', clientesRouter)

export default indexRouter
import { Router } from "express"
import create from "../controllers/Clientes/create.js"
import read from "../controllers/Clientes/read.js"
import validator from '../middlewares/validator.js'
import schema_create from '../schema/clientes/create.js'

let clientesRouter = Router()


clientesRouter.post('/',validator(schema_create),create)
clientesRouter.get('/',read)

export default clientesRouter


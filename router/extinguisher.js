import { Router } from "express";

import read from '../controllers/Extinguisher/read.js'
import create from '../controllers/Extinguisher/create.js'
import update from '../controllers/Extinguisher/update.js'
import destroy from '../controllers/Extinguisher/destroy.js'
import passport from '../middlewares/passport.js';

let extinguisherRouter = Router()

extinguisherRouter.get('/', read)
extinguisherRouter.get('/:_id', read)
extinguisherRouter.post('/', passport.authenticate('jwt', { session: false }), create)
extinguisherRouter.put('/:id', passport.authenticate('jwt', { session: false }), update)
extinguisherRouter.delete('/:id', passport.authenticate('jwt', { session: false }), destroy)

export default extinguisherRouter